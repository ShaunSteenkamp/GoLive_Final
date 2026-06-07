# Photo Optimization Guide

To ensure the wedding website loads quickly and avoids the "blank white screen" issue caused by high-resolution images, we use the **WebP format**. This guide explains how to maintain and update the website's photo library.

## 🚀 Quick Start: Optimized Conversion

If you add new `.jpg` or `.jpeg` photos to the project, you can convert them all to WebP with a single command.

1.  **Open a terminal** in the `alexandra-loves-us-rsvp-main` directory.
2.  **Run the conversion script**:
    ```bash
    node convert-images.js
    ```

The script will automatically:
- Scan `public/photos/` and `src/assets/` for JPG files.
- Skip files that already have a WebP version (saving time).
- Create a `.webp` version of كل new image with 80% quality compression.

---

## 📂 Photo Directories

The website pulls images from two main locations:

1.  **`public/photos/`**: Contains the large library of 180+ engagement and mountain shots used in the Gallery and Slideshow.
2.  **`src/assets/`**: Contains core UI photos like the header image, venue photos (Mulderbosch/Moederkerk), and floral elements.

---

## 🛠️ How it Works

The project uses a library called `sharp`, which is a high-performance Node.js image processing module.

### The Conversion Script (`convert-images.js`)
This script is a custom utility that handles the batch processing. You don't need to edit it unless you want to change compression levels or target new folders.

```javascript
// Example of how to change quality in convert-images.js
await sharp(inputPath)
  .webp({ quality: 80 }) // Increase or decrease this (0-100)
  .toFile(outputPath);
```

---

## 💡 Best Practices for New Photos

When adding new photos to the website:

1.  **Drop the raw JPGs** into `public/photos/`.
2.  **Run the script**: `node convert-images.js`.
3.  **Update the code**: If you are adding specific photos to the "Our Journey" section, update `src/utils/photoUtils.ts` to use the new `.webp` filenames.

### Why WebP?
- **File Size**: WebP images are typically 30-50% smaller than JPGs with no noticeable loss in quality.
- **Loading Speed**: Smaller files mean the website renders instantly, even on mobile data.
- **Browser Support**: All modern browsers (Chrome, Safari, Edge, Firefox) fully support WebP.

---

## ❓ Troubleshooting

**"sharp" is not installed:**
If the script fails with a "module not found" error, run:
```bash
npm install -g sharp
```
or 
```bash
npm install
```

**White screen persists:**
Check the browser console (F12). If you see "404 Not Found" for an image, ensure you've updated the file extension from `.jpg` to `.webp` in your React components.
