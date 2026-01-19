const fs = require('fs');
const promises = require("fs").promises;
// aynsc method to write file
fs.writeFileSync("file.txt","welcome to file name gla");
fs.writeFile("./file.txt","welcome to file name gla univeristy", (err) => {
    if (err) {
        console.error("Error writing file:", err);
    }
});

//read file with sync method
// utf 8 is encoding format
const result=fs.readFileSync("./file.txt","utf-8",(err,result)=>{
    if(err){
        console.error("error reading file:",err);
    }
    return result;
});
console.log(result);

