const prompt = require("prompt-sync")({ sigint:true });
let karakter = prompt("Masukkan karakter: ");
let hasil;

if (karakter >= '0' && karakter <= '9') {
    hasil = parseInt(karakter);
} else {
    hasil = -99;
}

console.log("Hasil konversi = " + hasil);