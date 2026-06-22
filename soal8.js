const prompt = require("prompt-sync")({ sigint:true });
let meter = parseFloat(prompt("Masukkan panjang (meter):"));

let inci = meter / 0.0254;
let kaki = meter / 0.3048;
let yard = meter / 0.9144;

console.log(`Inci = ${inci.toFixed(2)}`);
console.log(`Kaki = ${kaki.toFixed(2)}`);
console.log(`Yard = ${yard.toFixed(2)}`);