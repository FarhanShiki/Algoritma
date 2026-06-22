const prompt = require("prompt-sync")({ sigint:true });
let x = parseInt(prompt("Masukkan x:"));
let y = parseInt(prompt("Masukkan y:"));
let z = parseInt(prompt("Masukkan z:"));

let temp = x;
x = y;
y = z;
z = temp;

console.log(`x = ${x}, y = ${y}, z = ${z}`);