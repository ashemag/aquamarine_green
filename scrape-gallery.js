const https = require('https');
const fs = require('fs');
const path = require('path');

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

function downloadImage(url, outputPath) {
    return new Promise((resolve, reject) => {
        https.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
                'Accept': 'image/*',
                'Referer': 'https://www.aquamarinegreen.net/'
            }
        }, (res) => {
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                return downloadImage(res.headers.location, outputPath).then(resolve).catch(reject);
            }
            if (res.statusCode !== 200) {
                reject(new Error(`HTTP ${res.statusCode}`));
                return;
            }
            const chunks = [];
            res.on('data', chunk => chunks.push(chunk));
            res.on('end', () => {
                const buffer = Buffer.concat(chunks);
                fs.writeFileSync(outputPath, buffer);
                resolve(buffer.length);
            });
            res.on('error', reject);
        }).on('error', reject);
    });
}

async function scrapeGallery(pageUrl, folderName) {
    console.log(`\n=== Scraping ${folderName} ===`);

    const outputDir = path.join(__dirname, 'public/secrets-images', folderName);
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    const html = await fetch(pageUrl);

    // Extract image URLs from RoyalSlider
    const imgRegex = /href="(https:\/\/www\.aquamarinegreen\.net\/wp-content\/uploads\/[^"]+\.jpg)"/gi;
    const images = [];
    let match;

    while ((match = imgRegex.exec(html)) !== null) {
        if (!images.includes(match[1])) {
            images.push(match[1]);
        }
    }

    console.log(`Found ${images.length} images`);

    const downloaded = [];
    for (let i = 0; i < images.length; i++) {
        const url = images[i];
        const filename = `${String(i + 1).padStart(2, '0')}-${path.basename(url).replace(/-\d+x\d+/, '')}`;
        const outputPath = path.join(outputDir, filename);

        try {
            const size = await downloadImage(url, outputPath);
            console.log(`  ✓ ${filename} (${Math.round(size / 1024)}KB)`);
            downloaded.push({ filename, url });
        } catch (err) {
            console.log(`  ✗ ${filename}: ${err.message}`);
        }
    }

    return downloaded;
}

async function main() {
    const galleries = [
        { url: 'https://www.aquamarinegreen.net/custom-built-homes-gallery/', folder: 'custom-built-homes' },
        { url: 'https://www.aquamarinegreen.net/modular-homes-gallery/', folder: 'modular-homes' },
        { url: 'https://www.aquamarinegreen.net/house-raising-moving-gallery/', folder: 'house-raising-moving' },
    ];

    for (const gallery of galleries) {
        try {
            await scrapeGallery(gallery.url, gallery.folder);
        } catch (err) {
            console.log(`Error scraping ${gallery.folder}: ${err.message}`);
        }
    }

    console.log('\nDone!');
}

main();
