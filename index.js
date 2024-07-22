const fs = require('fs');
const {readdir} = require('node:fs/promises');
const path = require('path');
const Tesseract = require('tesseract.js');

const IMAGE_DIR = './images';
const OUTPUT_FILE = './output.text';

async function processImage(imagePath) {
    try {
        const result = await Tesseract.recognize(imagePath, 'eng');
        return result.data.text;
    } catch (error) {
        console.log(`Error processing image, got: ${error.message}`);
        return '';
    }
}

async function processAllImages() {
    try {
        const files = await readdir(IMAGE_DIR);
        const imageFiles = files.filter(file => /\.(png|jpg|jpeg)$/i.test(file));

        const texts = await Promise.all(imageFiles.map(file => {
            const imagePath = path.join(IMAGE_DIR, file);
            return processImage(imagePath);
        }));

        await fs.writeFileSync(OUTPUT_FILE, texts.join('\n\n'), 'utf8');
        console.log('Done extracting text!');
    } catch (error) {
        console.log(`Error processing images, got: ${error.message}`);
    }
}

processAllImages();