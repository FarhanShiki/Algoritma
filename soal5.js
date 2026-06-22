const prompt = require("prompt-sync")({ sigint:true });
let a = parseInt(prompt("Masukkan nilai a:"));
let b = parseInt(prompt("Masukkan nilai b:"));
let c = parseInt(prompt("Masukkan nilai c:"));
let d = parseInt(prompt("Masukkan nilai d:"));

let temp = a;
a = b;
b = c;
c = d;
d = temp;
console.log(`a = ${a}, b = ${b}, c = ${c}, d = ${d}`);