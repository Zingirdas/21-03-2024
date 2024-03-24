const fs = require("fs");
const str = fs.readFileSync("./studentai.json").toString();

const studentai = JSON.parse(str);

// Kiek mokosi studentu:
console.log(`Studentu mokosi: ${studentai.length}`);

// Koks studentu vidurkis:
let suma = 0;
for (let studentas of studentai) {
    suma += studentas.amzius
}
let vidurkis = suma / studentai.length;
console.log(`Studentu amziaus vidurkis: ${vidurkis}`);

// Studentu pazangumo vidurkis:
studentai.forEach(studentas => {
    suma = 0;
    kiekis = 0;
    studentas.pazymiai.forEach(pazymys => {
        suma += pazymys;
        kiekis++;
    });
});
let pazangumoVidurkis = suma / kiekis;
console.log(`Studentų pažangumo vidurkis: ${pazangumoVidurkis}`);


// Studentų sąrašas ir kiekvieno studento vidurkis:
studentai.forEach((studentas) => {
    suma = 0;
    kiekis = 0;
    studentas.pazymiai.forEach((pazymys) => {
        suma += pazymys;
        kiekis++
    })
    let vidurkis = suma / kiekis;
    console.log(`${studentas.vardas} ${studentas.pavarde} ${vidurkis}`);
});

