const prompt = require("prompt-sync")({ sigint:true });
let tinggi = parseFloat(prompt("Masukkan tinggi badan (cm):"));

let bbi = (tinggi - 100) - (0.1 * (tinggi - 100));

console.log(`Berat badan ideal = ${bbi.toFixed(2)} kg`);