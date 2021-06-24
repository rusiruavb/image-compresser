import express from 'express';
import fs from 'fs';
import path from 'path';
import { compressImage } from './compressAlgorithm.js';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const sourceDirectory = path.join(__dirname, './images');
const readImageFile = () => {
  let image;
  fs.readFile('test.jpg', (err, data) => {
    if (err) throw err;
    return data;
  });
}

app.listen(5000, () => {
  console.log(`Server is started on PORT ${5000}`);
  
  try {
    fs.readdir(sourceDirectory, (err, files) => {
      if (err) {
        throw new Error(err.message);
      }

      if (files && files.length > 0) {
        files.forEach((file) => {
          console.log(file)
          fs.readFile(`${sourceDirectory}/${file}`, (err, data) => {
            if (err) throw err.message
            compressImage(data, file)
          })
        })
      }
    })
  } catch (error) {
    console.log(error.message);
  }
});