const prompt = require("prompt-sync")({ sigint:true });
let nilai = parseInt(prompt("Masukkan nilai: "));
if (nilai >= 80) {
    console.log("Grade A");
} else if (nilai >= 70) {
    console.log("Grade B");
} else if (nilai >= 55) {
    console.log("Grade C");
} else if (nilai >= 40) {
    console.log("Grade D");
} else if (nilai >= 0) {
    console.log("Grade E");
}