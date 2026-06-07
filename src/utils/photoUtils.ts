
// Generate array of engagement photo filenames
export const generatePhotoList = () => {
  const mountainIndices = [
    375, 385, 395, 410, 420, 434, 472, 515, 541,
    6, 14, 25, 32, 40, 48, 58, 66, 76, 86, 101, 114, 129, 140, 150
  ];
  const photos = mountainIndices.map(num => `/2-Wedding-Website/photos/027A0${String(num).padStart(3, '0')}.webp`);
  
  // Add DSC mountain shots
  photos.push(`/2-Wedding-Website/photos/DSC_8796.webp`);
  photos.push(`/2-Wedding-Website/photos/DSC_8772.webp`);
  photos.push(`/2-Wedding-Website/photos/DSC_8780.webp`);
  
  return photos;
};

