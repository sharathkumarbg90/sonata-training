const fs = require('fs');
const path= require('path');
fs.readFile((__dirname, '/java/ja.java'), 'utf8', (err, data)=>{
    if(err) throw err;
    console.log(data)
});