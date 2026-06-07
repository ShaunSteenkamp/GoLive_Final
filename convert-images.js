import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const directories = ['public/photos', 'src/assets'];

async function convert() {
  for (const dir of directories) {
    if (!fs.existsSync(dir)) {
      console.warn(`Directory ${dir} does not exist, skipping.`);
      continue;
    }

    const files = fs.readdirSync(dir).filter(file => 
      file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg')
    );

    console.log(`Processing directory: ${dir} (${files.length} images)`);

    for (const file of files) {
      const inputPath = path.join(dir, file);
      const outputPath = path.join(dir, file.replace(/\.(jpg|jpeg)$/i, '.webp'));
    
    // Check if webp already exists
    if (fs.existsSync(outputPath)) {
      console.log(`Skipping ${file}, webp already exists.`);
      continue;
    }

    try {
      console.log(`Converting ${file}...`);
      await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath);
      console.log(`Converted ${file} successfully.`);
    } catch (err) {
      console.error(`Error converting ${file}:`, err);
      }
    }
  }
  console.log('Conversion complete.');
}

convert();
