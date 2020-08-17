"use strict";

process.stdin.on('data', function (data) {
  console.log(data.toString().split('').reverse().slice(1).join(''));
});