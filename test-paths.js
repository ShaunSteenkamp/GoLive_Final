import fs from 'fs';
import path from 'path';

const mountainIndices = [375, 385, 395, 410, 420, 434, 472, 515, 541];
const photos = mountainIndices.map(num => `public/photos/027A0${String(num).padStart(3, '0')}.webp`);
photos.push("public/photos/DSC_8796.webp");

photos.forEach(p => {
    if (fs.existsSync(p)) {
        console.log(`OK: ${p}`);
    } else {
        console.log(`MISSING: ${p}`);
    }
});
