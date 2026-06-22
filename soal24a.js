const prompt = require("prompt-stnc")({ sigint:true });
let karakter = prompt("Masukkan karakter digit (0-9): ");
let angka = parseInt(karakter);

console.log("Nilai integer = " + angka);