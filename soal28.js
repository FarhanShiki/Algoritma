const prompt = require("prompt-sync")({ sigint:true });
let berat = parseFloat(prompt("Masukkan berat badan: "));
let tinggi = parseFloat(prompt("Masukkan tinggi badan: "));

let beratIdeal = tinggi - 100;

if (Math.abs(berat - beratIdeal) <= 2) {
    console.log("Ideal");
} else {
    console.log("Tidak ideal");
}