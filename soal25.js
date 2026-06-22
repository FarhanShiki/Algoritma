const prompt = require("prompt-sync")({ sigint:true });
let belanja = parseInt(prompt("Masukkan total belanja: "));
let hasil = Math.floor(belanja / 50) * 50;

console.log("Hasil pembulatan = Rp" + hasil);