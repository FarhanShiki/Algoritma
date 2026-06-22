const prompt = require("prompt-sync")({ sigint:true });
const prompt = require("prompt-sync")({ sigint: true });

let a = parseInt(prompt("Bilangan 1: "));
let b = parseInt(prompt("Bilangan 2: "));
let c = parseInt(prompt("Bilangan 3: "));

let arr = [a, b, c];
arr.sort((x, y) => x - y);

console.log("Urutan dari kecil ke besar:");
console.log(arr[0], arr[1], arr[2]);