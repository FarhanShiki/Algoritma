const prompt = require("prompt-sync")({ sigint:true });
let pixel = parseInt(prompt("Masukkan nilai pixel: "));

if (pixel > 255) {
    pixel = 255;
} else if (pixel < 0) {
    pixel = 0;
}

console.log("Nilai pixel setelah clipping = " + pixel);