const prompt = require("prompt-sync")({ sigint:true });
let dtk = parseInt(prompt("Masukkan jumlah detik:"));
let hari = Math.floor(dtk / 86400);
let sisa = dtk % 86400;
let jam = Math.floor(sisa / 3600);
sisa = sisa % 3600;
let menit = Math.floor(sisa / 60);
let detik = sisa % 60;
console.log(`${hari} hari ${jam} jam ${menit} menit ${detik} detik`);