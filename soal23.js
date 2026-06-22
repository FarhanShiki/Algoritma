const prompt = require("prompt-sync")({ sigint:true });
let a = parseInt(prompt("Masukkan sisi a: "));
let b = parseInt(prompt("Masukkan sisi b: "));
let c = parseInt(prompt("Masukkan sisi c: "));

let kiri = a * a + b * b;
let kanan = c * c;

if (kiri === kanan) {
    console.log("Segitiga siku-siku");
} else if (kiri > kanan) {
    console.log("Segitiga lancip");
} else {
    console.log("Segitiga tumpul");
}