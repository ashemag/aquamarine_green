const https = require('https');
const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, 'public/secrets-images/beach-haven-west');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function fetch(url, options = {}) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    const reqOptions = {
      hostname: urlObj.hostname,
      path: urlObj.pathname + urlObj.search,
      method: options.method || 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'application/json, text/html, */*',
        'Accept-Language': 'en-US,en;q=0.9',
        ...options.headers
      }
    };
    
    https.get(url, reqOptions, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetch(res.headers.location, options).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ data, status: res.statusCode }));
      res.on('error', reject);
    }).on('error', reject);
  });
}

function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const outputPath = path.join(outputDir, filename);
    
    const doDownload = (downloadUrl) => {
      https.get(downloadUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
          'Accept': 'image/webp,image/apng,image/*,*/*;q=0.8',
          'Referer': 'https://www.houzz.com/'
        }
      }, (response) => {
        if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
          return doDownload(response.headers.location);
        }
        
        if (response.statusCode !== 200) {
          reject(new Error(`HTTP ${response.statusCode}`));
          return;
        }
        
        const chunks = [];
        response.on('data', chunk => chunks.push(chunk));
        response.on('end', () => {
          const buffer = Buffer.concat(chunks);
          if (buffer.length > 10000) {
            fs.writeFileSync(outputPath, buffer);
            console.log(`Downloaded: ${filename} (${Math.round(buffer.length/1024)}KB)`);
            resolve(outputPath);
          } else {
            resolve(null);
          }
        });
        response.on('error', reject);
      }).on('error', reject);
    };
    
    doDownload(url);
  });
}

async function scrapeProject() {
  const projectId = '537172';
  
  // Try different API endpoints
  const endpoints = [
    `https://www.houzz.com/j/ajax/project?projectId=${projectId}`,
    `https://www.houzz.com/j/ajax/projectPhotosById?projectId=${projectId}&start=0&count=100`,
    `https://www.houzz.com/j/getProjectPhotos?projectId=${projectId}`,
  ];
  
  console.log('Trying API endpoints...');
  
  for (const endpoint of endpoints) {
    try {
      console.log(`Trying: ${endpoint}`);
      const { data, status } = await fetch(endpoint);
      if (status === 200 && data.length > 100) {
        console.log(`Got response (${data.length} chars)`);
        fs.writeFileSync(path.join(outputDir, 'api-response.json'), data);
        
        // Try to extract image URLs
        const urls = data.match(/https:\/\/st\.hzcdn\.com\/[^"'\s\\]+\.jpg/g) || [];
        console.log(`Found ${urls.length} image URLs in response`);
      }
    } catch (e) {
      console.log(`Failed: ${e.message}`);
    }
  }
  
  // Fetch the main page and look for __NEXT_DATA__ or similar
  console.log('\nFetching main project page...');
  const { data: html } = await fetch('https://www.houzz.com/hznb/projects/beach-haven-west-pj-vj~537172');
  
  // Look for Next.js data
  const nextDataMatch = html.match(/<script id="__NEXT_DATA__"[^>]*>([^<]+)<\/script>/);
  if (nextDataMatch) {
    console.log('Found __NEXT_DATA__');
    try {
      const nextData = JSON.parse(nextDataMatch[1]);
      fs.writeFileSync(path.join(outputDir, 'next-data.json'), JSON.stringify(nextData, null, 2));
      console.log('Saved next-data.json for inspection');
    } catch (e) {
      console.log('Could not parse Next data');
    }
  }
  
  // Look for Apollo state or similar
  const apolloMatch = html.match(/window\.__APOLLO_STATE__\s*=\s*({[^;]+});/);
  if (apolloMatch) {
    console.log('Found __APOLLO_STATE__');
    fs.writeFileSync(path.join(outputDir, 'apollo-state.json'), apolloMatch[1]);
  }
  
  // Find ALL image URLs in the page
  const allUrls = new Set();
  const urlPattern = /https:\/\/st\.hzcdn\.com\/simgs\/[a-f0-9]+[^"'\s\\]*/g;
  let match;
  while ((match = urlPattern.exec(html)) !== null) {
    let url = match[0].replace(/\\/g, '').replace(/&amp;/g, '&');
    // Remove trailing non-URL characters
    url = url.replace(/[^a-zA-Z0-9\-._~:/?#\[\]@!$&'()*+,;=%]/g, '');
    allUrls.add(url);
  }
  
  // Also check for base64 encoded URLs or escaped URLs
  const escapedPattern = /st\.hzcdn\.com\\\/simgs\\\/([a-f0-9]+)/g;
  while ((match = escapedPattern.exec(html)) !== null) {
    const hash = match[1];
    allUrls.add(`https://st.hzcdn.com/simgs/${hash}_4_0/home-design.jpg`);
  }
  
  console.log(`\nFound ${allUrls.size} unique image URLs`);
  
  // Download images
  let count = 1;
  let downloaded = 0;
  for (const url of allUrls) {
    const filename = `photo-${String(count).padStart(2, '0')}.jpg`;
    try {
      const result = await downloadImage(url, filename);
      if (result) downloaded++;
    } catch (err) {
      // Skip failed downloads
    }
    count++;
  }
  
  console.log(`\nDownloaded ${downloaded} images`);
  console.log(`\nNote: Houzz loads images via JavaScript. For all 53 images, you may need to:`);
  console.log('1. Open the page in a browser');
  console.log('2. Scroll through all images');
  console.log('3. Use browser dev tools to save them');
}

scrapeProject().catch(console.error);
