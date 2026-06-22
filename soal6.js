const prompt = require("prompt-sync")({ sigint:true });
let uang = parseInt(prompt("Masukkan jumlah uang:"));
let p1000 = Math.floor(uang / 1000);
let sisa = uang % 1000;

let p500 = Math.floor(sisa / 500);
sisa = sisa % 500;

let p100 = Math.floor(sisa / 100);
sisa = sisa % 100;

let p50 = Math.floor(sisa / 50);
sisa = sisa % 50;

let p25 = Math.floor(sisa / 25);
console.log(`Rp1000 = ${p1000}`);
console.log(`Rp500 = ${p500}`);
console.log(`Rp100 = ${p100}`);
console.log(`Rp50 = ${p50}`);
console.log(`Rp25 = ${p25}`);