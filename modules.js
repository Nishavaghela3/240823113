const moment = require('moment');
const path = require('path');
const fs = require('fs');

// console.log(path.extname('index.js'));

// console.log(path.dirname('indexedDB.js'));

console.log(moment().format('DD-MM-YYYY, HH:MM:SS '));
console.log(moment().add(10 ,"days").format('DD-MM-YYYY, HH:MM:SS '));
console.log(moment().format('dddd'));
fs.writeFile("test.txt","This is a test file", (err) => {if (err) throw err;
    console.log("File created successfully");});