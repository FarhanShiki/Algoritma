const prompt = require("prompt-sync")({ sigint:true });
let jamKerja = parseInt(prompt("Masukkan jumlah jam kerja selama 1 minggu: "));
let upah;

if (jamKerja <= 48) {
    upah = jamKerja * 2000;
} else {
    let jamLembur = jamKerja - 48;
    upah = (48 * 2000) + (jamLembur * 3000);
}

console.log("Jumlah jam kerja :", jamKerja, "jam");
console.log("Upah mingguan    : Rp" + upah);