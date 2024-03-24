const fs = require("fs");
let str = fs.readFileSync("./studentai.json").toString();


console.log(str);
console.log(typeof str);

// const str = JSON.stringify(studentai);

// console.log(str);
// console.log(typeof str);

fs.writeFileSync("./studentai.json", str);


