const fs = require('fs');
const csv = require('csvtojson');


const csvFilePath = 'src/1.2/h1-ex1.csv';

const readStream = fs.createReadStream(csvFilePath);

const writeStream = fs.createWriteStream('./output');

readStream.pipe(csv()).pipe(writeStream);
