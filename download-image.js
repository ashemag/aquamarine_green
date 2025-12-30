const https = require('https');
const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, 'public/secrets-images/beach-haven-west');
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

function fetch(url) {
    return new Promise((resolve, reject) => {
        https.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                'Accept-Language': 'en-US,en;q=0.9',
                'Cache-Control': 'no-cache',
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

        const doDownload = (downloadUrl) => {
            https.get(downloadUrl, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
                    'Accept': 'image/*',
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
                    // Check if it's actually an image (JPEG starts with FFD8)
                    if (buffer.length > 15000 && buffer[0] === 0xFF && buffer[1] === 0xD8) {
                        fs.writeFileSync(outputPath, buffer);
                        console.log(`✓ ${filename} (${Math.round(buffer.length / 1024)}KB)`);
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

async function main() {
    console.log('Fetching Houzz project page...\n');
    const html = await fetch('https://www.houzz.com/hznb/projects/beach-haven-west-pj-vj~537172');

    // Save for debugging
    fs.writeFileSync(path.join(outputDir, '_debug.html'), html);
    console.log(`Page size: ${html.length} characters\n`);

    // Extract ALL hzcdn URLs
    const allMatches = html.match(/st\.hzcdn\.com[^"'\s\\\)]+/g) || [];
    console.log(`Found ${allMatches.length} hzcdn references\n`);

    // Dedupe and filter for images
    const imageHashes = new Set();
    const imageUrls = [];

    for (const match of allMatches) {
        // Extract the unique hash (usually 16+ hex chars)
        const hashMatch = match.match(/([a-f0-9]{12,})/i);
        if (hashMatch && !imageHashes.has(hashMatch[1])) {
            imageHashes.add(hashMatch[1]);
            // Construct full URL
            let url = 'https://' + match.replace(/\\/g, '').replace(/&amp;/g, '&');
            // Clean up any trailing garbage
            url = url.split(/['"<>\s]/)[0];
            if (url.includes('.jpg') || url.includes('.png') || url.includes('simgs') || url.includes('fimgs')) {
                imageUrls.push(url);
            }
        }
    }

    console.log(`Unique image candidates: ${imageUrls.length}\n`);

    // Download all
    let downloaded = 0;
    for (let i = 0; i < imageUrls.length; i++) {
        const filename = `photo-${String(i + 1).padStart(2, '0')}.jpg`;
        try {
            const result = await downloadImage(imageUrls[i], filename);
            if (result) downloaded++;
        } catch (e) {
            // Skip failures silently
        }
    }

    // Clean up existing bedroom files to avoid confusion
    const existingFiles = fs.readdirSync(outputDir);
    for (const file of existingFiles) {
        if (file.startsWith('bedroom')) {
            fs.unlinkSync(path.join(outputDir, file));
        }
    }

    console.log(`\n✓ Downloaded ${downloaded} images to beach-haven-west/`);

    // List what we got
    const finalFiles = fs.readdirSync(outputDir).filter(f => f.endsWith('.jpg') && !f.startsWith('_'));
    console.log(`\nFiles in folder: ${finalFiles.length}`);
}

main().catch(console.error);
