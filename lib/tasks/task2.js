"use strict";

var fs = require('fs');

var csv = require('csvtojson');

var csvFilePath = 'assets/h1-ex1.csv';
var readStream = fs.createReadStream(csvFilePath);
var writeStream = fs.createWriteStream('./output');
readStream.pipe(csv()).pipe(writeStream);