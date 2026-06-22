const prompt = require("prompt-sync")({ sigint:true });
const prompt = require("prompt-sync")({ sigint: true });

let n = parseInt(prompt("Masukkan bilangan 1-10: "));
let romawi = "";

if (n === 1) romawi = "I";
else if (n === 2) romawi = "II";
else if (n === 3) romawi = "III";
else if (n === 4) romawi = "IV";
else if (n === 5) romawi = "V";
else if (n === 6) romawi = "VI";
else if (n === 7) romawi = "VII";
else if (n === 8) romawi = "VIII";
else if (n === 9) romawi = "IX";
else if (n === 10) romawi = "X";
else romawi = "Tidak valid";

console.log("Angka Romawi = " + romawi);