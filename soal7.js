const prompt = require("prompt-sync")({ sigint:true });
let cmTotal = parseInt(prompt("Masukkan jarak (cm):"));

let km = Math.floor(cmTotal / 100000);
let sisa = cmTotal % 100000;

let m = Math.floor(sisa / 100);
let cm = sisa % 100;

console.log(`${km} km ${m} m ${cm} cm`);