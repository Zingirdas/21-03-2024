const fs = require("fs");
let str = fs.readFileSync("./studentai.json").toString();


let studentai = JSON.parse(str);

console.log(studentai);