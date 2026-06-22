const prompt = require("prompt-sync")({ sigint:true });
let hh = parseInt(prompt("Masukkan jam(hh):"));
let mm = parseInt(prompt("Masukkan menit(mm):"));
let ss = parseInt(prompt("Masukkan detik(ss):"));
ss++;
if (ss === 60) {
    ss = 0;
    mm++;
}
if (mm === 60) {
    mm = 0;
    hh++;
}
if (hh === 24) {
    hh = 0;
}   
console.log(`${String(hh).padStart(2, "0")}:${String(mm).padStart(2, "0")}:${String(ss).padStart(2, "0")}`);