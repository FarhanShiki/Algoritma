const prompt = require("prompt-sync")({ sigint:true });
let totalBelanja = parseInt(prompt("Masukkan total belanja: "));
let diskon = 0;

if (totalBelanja > 100000) {
    diskon = totalBelanja * 0.10; // 10%
}

let totalBayar = totalBelanja - diskon;

console.log("Diskon       : Rp" + diskon);
console.log("Total bayar  : Rp" + totalBayar);