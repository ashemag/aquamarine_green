const https = require('https');
const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, 'public/secrets-images/beach-haven-west');
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// All 53 photos with their names and URLs
const photos = [
    { name: "01-contemporary-living-room", url: "https://www.houzz.com/photos/beach-haven-west-contemporary-living-room-new-york-phvw-vp~11750980" },
    { name: "02-contemporary-family-room", url: "https://www.houzz.com/photos/beach-haven-west-contemporary-family-room-new-york-phvw-vp~11750981" },
    { name: "03-beach-style-living-room-1", url: "https://www.houzz.com/photos/beach-haven-west-beach-style-living-room-new-york-phvw-vp~14649594" },
    { name: "04-beach-style-living-room-2", url: "https://www.houzz.com/photos/beach-haven-west-beach-style-living-room-new-york-phvw-vp~14649605" },
    { name: "05-beach-style-living-room-3", url: "https://www.houzz.com/photos/beach-haven-west-beach-style-living-room-new-york-phvw-vp~14649611" },
    { name: "06-beach-style-dining-room-1", url: "https://www.houzz.com/photos/beach-haven-west-beach-style-dining-room-new-york-phvw-vp~14649630" },
    { name: "07-beach-style-dining-room-2", url: "https://www.houzz.com/photos/beach-haven-west-beach-style-dining-room-new-york-phvw-vp~14649640" },
    { name: "08-beach-style-dining-room-3", url: "https://www.houzz.com/photos/beach-haven-west-beach-style-dining-room-new-york-phvw-vp~14649646" },
    { name: "09-beach-style-kitchen-1", url: "https://www.houzz.com/photos/beach-haven-west-beach-style-kitchen-new-york-phvw-vp~14649653" },
    { name: "10-beach-style-kitchen-2", url: "https://www.houzz.com/photos/beach-haven-west-beach-style-kitchen-new-york-phvw-vp~14649656" },
    { name: "11-beach-style-kitchen-3", url: "https://www.houzz.com/photos/beach-haven-west-beach-style-kitchen-new-york-phvw-vp~14649663" },
    { name: "12-beach-style-kitchen-4", url: "https://www.houzz.com/photos/beach-haven-west-beach-style-kitchen-new-york-phvw-vp~14649669" },
    { name: "13-beach-style-bathroom-1", url: "https://www.houzz.com/photos/beach-haven-west-beach-style-bathroom-new-york-phvw-vp~14649676" },
    { name: "14-beach-style-bathroom-2", url: "https://www.houzz.com/photos/beach-haven-west-beach-style-bathroom-new-york-phvw-vp~14649684" },
    { name: "15-beach-style-bathroom-3", url: "https://www.houzz.com/photos/beach-haven-west-beach-style-bathroom-new-york-phvw-vp~14649700" },
    { name: "16-beach-style-bathroom-4", url: "https://www.houzz.com/photos/beach-haven-west-beach-style-bathroom-new-york-phvw-vp~14649709" },
    { name: "17-beach-style-bathroom-5", url: "https://www.houzz.com/photos/beach-haven-west-beach-style-bathroom-new-york-phvw-vp~14649716" },
    { name: "18-beach-style-bathroom-6", url: "https://www.houzz.com/photos/beach-haven-west-beach-style-bathroom-new-york-phvw-vp~14649736" },
    { name: "19-beach-style-bathroom-7", url: "https://www.houzz.com/photos/beach-haven-west-beach-style-bathroom-new-york-phvw-vp~15758201" },
    { name: "20-beach-style-bathroom-8", url: "https://www.houzz.com/photos/beach-haven-west-beach-style-bathroom-new-york-phvw-vp~15758218" },
    { name: "21-beach-style-bathroom-9", url: "https://www.houzz.com/photos/beach-haven-west-beach-style-bathroom-new-york-phvw-vp~15758223" },
    { name: "22-beach-style-bedroom-1", url: "https://www.houzz.com/photos/beach-haven-west-beach-style-bedroom-new-york-phvw-vp~14649755" },
    { name: "23-beach-style-bedroom-2", url: "https://www.houzz.com/photos/beach-haven-west-beach-style-bedroom-new-york-phvw-vp~14649764" },
    { name: "24-beach-style-bedroom-3", url: "https://www.houzz.com/photos/beach-haven-west-beach-style-bedroom-new-york-phvw-vp~14649774" },
    { name: "25-beach-style-bedroom-4", url: "https://www.houzz.com/photos/beach-haven-west-beach-style-bedroom-new-york-phvw-vp~14649778" },
    { name: "26-beach-style-bedroom-5", url: "https://www.houzz.com/photos/beach-haven-west-beach-style-bedroom-new-york-phvw-vp~14649784" },
    { name: "27-beach-style-bedroom-6", url: "https://www.houzz.com/photos/beach-haven-west-beach-style-bedroom-new-york-phvw-vp~14649789" },
    { name: "28-beach-style-bedroom-7", url: "https://www.houzz.com/photos/beach-haven-west-beach-style-bedroom-new-york-phvw-vp~15758226" },
    { name: "29-beach-style-bedroom-8", url: "https://www.houzz.com/photos/beach-haven-west-beach-style-bedroom-new-york-phvw-vp~15758231" },
    { name: "30-beach-style-bedroom-9", url: "https://www.houzz.com/photos/beach-haven-west-beach-style-bedroom-new-york-phvw-vp~15758265" },
    { name: "31-beach-style-bedroom-10", url: "https://www.houzz.com/photos/beach-haven-west-beach-style-bedroom-new-york-phvw-vp~15758238" },
    { name: "32-beach-style-bedroom-11", url: "https://www.houzz.com/photos/beach-haven-west-beach-style-bedroom-new-york-phvw-vp~15758245" },
    { name: "33-beach-style-master-bedroom", url: "https://www.houzz.com/photos/beach-haven-west-beach-style-bedroom-new-york-phvw-vp~15758250" },
    { name: "34-beach-style-bedroom-12", url: "https://www.houzz.com/photos/beach-haven-west-beach-style-bedroom-new-york-phvw-vp~15758257" },
    { name: "35-beach-style-bedroom-13", url: "https://www.houzz.com/photos/beach-haven-west-beach-style-bedroom-new-york-phvw-vp~15758275" },
    { name: "36-beach-style-staircase-1", url: "https://www.houzz.com/photos/beach-haven-west-beach-style-staircase-new-york-phvw-vp~14649615" },
    { name: "37-beach-style-staircase-2", url: "https://www.houzz.com/photos/beach-haven-west-beach-style-staircase-new-york-phvw-vp~14649624" },
    { name: "38-beach-style-staircase-3", url: "https://www.houzz.com/photos/beach-haven-west-beach-style-staircase-new-york-phvw-vp~14649790" },
    { name: "39-beach-style-staircase-4", url: "https://www.houzz.com/photos/beach-haven-west-beach-style-staircase-new-york-phvw-vp~14649793" },
    { name: "40-beach-style-entry", url: "https://www.houzz.com/photos/beach-haven-west-beach-style-entry-new-york-phvw-vp~14649797" },
    { name: "41-beach-style-deck-1", url: "https://www.houzz.com/photos/beach-haven-west-beach-style-deck-new-york-phvw-vp~14805754" },
    { name: "42-beach-style-deck-2", url: "https://www.houzz.com/photos/beach-haven-west-beach-style-deck-new-york-phvw-vp~14805762" },
    { name: "43-beach-style-deck-3", url: "https://www.houzz.com/photos/beach-haven-west-beach-style-deck-new-york-phvw-vp~14805774" },
    { name: "44-beach-style-deck-4", url: "https://www.houzz.com/photos/beach-haven-west-beach-style-deck-new-york-phvw-vp~14805781" },
    { name: "45-beach-style-deck-5", url: "https://www.houzz.com/photos/beach-haven-west-beach-style-deck-new-york-phvw-vp~14805789" },
    { name: "46-beach-style-deck-6", url: "https://www.houzz.com/photos/beach-haven-west-beach-style-deck-new-york-phvw-vp~14805797" },
    { name: "47-beach-style-patio", url: "https://www.houzz.com/photos/beach-haven-west-beach-style-patio-new-york-phvw-vp~15758188" },
    { name: "48-contemporary-exterior-1", url: "https://www.houzz.com/photos/beach-haven-west-contemporary-exterior-new-york-phvw-vp~11750982" },
    { name: "49-contemporary-exterior-2", url: "https://www.houzz.com/photos/beach-haven-west-contemporary-exterior-new-york-phvw-vp~11750979" },
    { name: "50-beach-style-exterior-1", url: "https://www.houzz.com/photos/beach-haven-west-beach-style-exterior-new-york-phvw-vp~15870165" },
    { name: "51-beach-style-exterior-2", url: "https://www.houzz.com/photos/beach-haven-west-beach-style-exterior-new-york-phvw-vp~15870177" },
    { name: "52-beach-style-exterior-3", url: "https://www.houzz.com/photos/beach-haven-west-beach-style-exterior-new-york-phvw-vp~15870185" },
    { name: "53-beach-style-exterior-4", url: "https://www.houzz.com/photos/beach-haven-west-beach-style-exterior-new-york-phvw-vp~15870196" },
];

function fetch(url) {
    return new Promise((resolve, reject) => {
        https.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                'Accept-Language': 'en-US,en;q=0.9',
            }
        }, (res) => {
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                return fetch(res.headers.location).then(resolve).catch(reject);
            }
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
            res.on('error', reject);
        }).on('error', reject);
    });
}

function downloadImage(url, filename) {
    return new Promise((resolve, reject) => {
        const outputPath = path.join(outputDir, filename);

        https.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
                'Accept': 'image/webp,image/apng,image/*,*/*;q=0.8',
                'Referer': 'https://www.houzz.com/'
            }
        }, (response) => {
            if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
                return downloadImage(response.headers.location, filename).then(resolve).catch(reject);
            }

            if (response.statusCode !== 200) {
                reject(new Error(`HTTP ${response.statusCode}`));
                return;
            }

            const chunks = [];
            response.on('data', chunk => chunks.push(chunk));
            response.on('end', () => {
                const buffer = Buffer.concat(chunks);
                fs.writeFileSync(outputPath, buffer);
                resolve(buffer.length);
            });
            response.on('error', reject);
        }).on('error', reject);
    });
}

async function processPhoto(photo) {
    try {
        console.log(`Fetching page: ${photo.name}...`);
        const html = await fetch(photo.url);

        // Look for image URLs in page - try multiple patterns
        let imageUrl = null;

        // Pattern 1: st.hzcdn.com/simgs direct URLs (high res)
        const simgsMatch = html.match(/https:\/\/st\.hzcdn\.com\/simgs\/[a-f0-9]+_\d+-\d+\/[^"'\s]+\.jpg/i);
        if (simgsMatch) {
            imageUrl = simgsMatch[0];
        }

        // Pattern 2: fimgs URLs
        if (!imageUrl) {
            const fimgsMatch = html.match(/https:\/\/st\.hzcdn\.com\/fimgs\/[^"'\s]+\.jpg/i);
            if (fimgsMatch) {
                imageUrl = fimgsMatch[0];
            }
        }

        // Pattern 3: imageUrl in JSON
        if (!imageUrl) {
            const jsonMatch = html.match(/"imageUrl"\s*:\s*"(https:\/\/st\.hzcdn\.com\/[^"]+)"/);
            if (jsonMatch) {
                imageUrl = jsonMatch[1].replace(/\\u002F/g, '/');
            }
        }

        // Pattern 4: og:image meta tag
        if (!imageUrl) {
            const ogMatch = html.match(/<meta[^>]+property="og:image"[^>]+content="([^"]+)"/);
            if (ogMatch) {
                imageUrl = ogMatch[1];
            }
        }

        if (!imageUrl) {
            console.log(`  ❌ No image URL found for ${photo.name}`);
            return null;
        }

        // Clean up the URL
        imageUrl = imageUrl.replace(/&amp;/g, '&');

        console.log(`  Downloading: ${imageUrl.substring(0, 60)}...`);
        const size = await downloadImage(imageUrl, `${photo.name}.jpg`);
        console.log(`  ✓ ${photo.name}.jpg (${Math.round(size / 1024)}KB)`);
        return { name: photo.name, size };
    } catch (err) {
        console.log(`  ❌ Error: ${err.message}`);
        return null;
    }
}

async function main() {
    console.log(`\nDownloading ${photos.length} photos from Beach Haven West...\n`);

    let success = 0;
    let failed = 0;

    // Process in batches of 5 to avoid overwhelming the server
    for (let i = 0; i < photos.length; i += 5) {
        const batch = photos.slice(i, i + 5);
        const results = await Promise.all(batch.map(processPhoto));

        results.forEach(r => {
            if (r) success++;
            else failed++;
        });

        // Small delay between batches
        if (i + 5 < photos.length) {
            await new Promise(r => setTimeout(r, 500));
        }
    }

    console.log(`\n✓ Downloaded ${success}/${photos.length} photos`);
    if (failed > 0) {
        console.log(`✗ Failed: ${failed}`);
    }
}

main();
