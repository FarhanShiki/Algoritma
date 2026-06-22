const prompt = require("prompt-sync")({ sigint:true });
let x = parseInt(prompt("Masukkan jumlah hari:"));
let tahun = Math.floor(x / 365);
let sisa = x % 365;
let bulan = Math.floor(sisa / 30);
let hari = sisa % 30;
console.log(`${tahun} tahun ${bulan} bulan ${hari} hari`);