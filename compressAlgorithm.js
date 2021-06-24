import imagemin from 'imagemin';
import mozjpeg from 'imagemin-mozjpeg';
import sharp from 'sharp';
import isJpg from 'is-jpg';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const convertToJpg = async (image) => {
  if (isJpg(image)) {
    return image;
  }
  return sharp(image).jpeg().toBuffer();
}

const uploadCompressedImage = async (buffer, fileName) => {
  const outputDirectory = path.join(__dirname, './output');
  const miniBuffer = await imagemin.buffer(buffer, {
    plugins: [convertToJpg, mozjpeg({ quality: 20 })]
  });
  fs.writeFileSync(`${outputDirectory}/${fileName}.jpg`, miniBuffer)
}

export const compressImage = async (image, fileName) => {
  console.log(`Compressing ${fileName}...`)
  if (!image) {
    console.log('null')
    return null;
  }
  await uploadCompressedImage(image, fileName);
}