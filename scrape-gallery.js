const https = require('https');

function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        const redirectUrl = res.headers.location.startsWith('http') 
          ? res.headers.location 
          : `https://www.aquamarinegreen.net${res.headers.location}`;
        return fetch(redirectUrl).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
      res.on('error', reject);
    }).on('error', reject);
  });
}

async function main() {
  try {
    const html = await fetch('https://www.aquamarinegreen.net/custom-built-homes-gallery/');
    
    // Extract gallery images
    const imgRegex = /<a[^>]+href="([^"]+)"[^>]*rel="lightbox[^"]*"[^>]*>[\s\S]*?<img[^>]+src="([^"]+)"[^>]*>/gi;
    const images = [];
    let match;
    
    while ((match = imgRegex.exec(html)) !== null) {
      images.push({
        fullSize: match[1],
        thumbnail: match[2]
      });
    }
    
    // Also try to find ngg-gallery images
    const nggRegex = /src="([^"]*nggallery[^"]*\.jpg)"/gi;
    while ((match = nggRegex.exec(html)) !== null) {
      if (!images.find(i => i.thumbnail === match[1])) {
        images.push({ thumbnail: match[1] });
      }
    }
    
    // Find all image sources
    const allImgRegex = /<img[^>]+src="([^"]+)"[^>]*>/gi;
    console.log('\n=== All images found ===');
    while ((match = allImgRegex.exec(html)) !== null) {
      if (match[1].includes('uploads') || match[1].includes('gallery')) {
        console.log(match[1]);
      }
    }
    
    console.log('\n=== Gallery structure ===');
    // Look for gallery div
    const galleryMatch = html.match(/<div[^>]*class="[^"]*gallery[^"]*"[^>]*>([\s\S]*?)<\/div>/i);
    if (galleryMatch) {
      console.log('Found gallery div');
    }
    
    // Look for ngg-gallery
    const nggMatch = html.match(/ngg-gallery-[\d]+/);
    if (nggMatch) {
      console.log('Found NGG gallery:', nggMatch[0]);
    }
    
    // Save full HTML for inspection
    require('fs').writeFileSync('gallery-debug.html', html);
    console.log('\nSaved full HTML to gallery-debug.html');
    
  } catch (err) {
    console.error('Error:', err.message);
  }
}

main();

