import fs from 'fs';
import csv from 'csvtojson';

const csvFilePath = 'assets/h1-ex1.csv';

const readStream = fs.createReadStream(csvFilePath);

const writeStream = fs.createWriteStream('./output');

readStream.pipe(csv()).pipe(writeStream);