const https = require('https');
const fs = require('fs');

function fetchHTML(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      res.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  try {
    const html = await fetchHTML('https://unsplash.com/s/photos/luxury-hotel-exterior');
    const regex = /https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9-]+[^"&\\]+/g;
    const matches = [...new Set(html.match(regex))].filter(u => u.includes('w=800') || u.includes('w=1000') || !u.includes('w=100'));
    
    if (matches.length >= 2) {
      console.log('Found images:', matches[0], matches[1]);
      await downloadImage(matches[0] + '&w=800&q=80', 'public/images/movenpick_anwar.jpg');
      await downloadImage(matches[1] + '&w=800&q=80', 'public/images/manarat_misk.jpg');
      console.log('Downloaded successfully.');
    } else {
      console.log('Not enough matches found.');
    }
  } catch(e) {
    console.error(e);
  }
}

run();
