/**
 * Image Optimization Script
 *
 * Optimizes large images to improve page load performance
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeImage(inputPath, outputPath, options = {}) {
  const {
    width = 1920,
    quality = 85,
    format = 'jpeg'
  } = options;

  try {
    const info = await sharp(inputPath)
      .resize(width, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      .jpeg({ quality, mozjpeg: true })
      .toFile(outputPath);

    console.log('✅ Image optimized successfully:');
    console.log(`   Input: ${inputPath}`);
    console.log(`   Output: ${outputPath}`);
    console.log(`   Size: ${info.size} bytes (${(info.size / 1024 / 1024).toFixed(2)} MB)`);
    console.log(`   Dimensions: ${info.width}x${info.height}`);

    return info;
  } catch (error) {
    console.error('❌ Error optimizing image:', error.message);
    throw error;
  }
}

// Main execution
const inputFile = process.argv[2] || 'public/images/about/representative-new.jpg';
const outputFile = process.argv[3] || inputFile.replace('.jpg', '-optimized.jpg');

console.log('🖼️  Starting image optimization...\n');

// Get original file size
const originalSize = fs.statSync(inputFile).size;
console.log(`📁 Original size: ${(originalSize / 1024 / 1024).toFixed(2)} MB\n`);

optimizeImage(inputFile, outputFile, {
  width: 1920,
  quality: 85
}).then(info => {
  const reduction = ((1 - info.size / originalSize) * 100).toFixed(1);
  console.log(`\n📊 Size reduction: ${reduction}%`);
  console.log(`\n✨ Optimization complete!`);
}).catch(error => {
  console.error('Failed to optimize image:', error);
  process.exit(1);
});
