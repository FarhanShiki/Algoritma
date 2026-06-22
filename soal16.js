const prompt = require("prompt-sync")({ sigint:true });
let angka = parseInt(prompt("Masukkan angka (1-4): "));
switch (angka) {
    case 1:
        console.log("Satu");
        break;
    case 2:
        console.log("Dua");
        break;
    case 3:
        console.log("Tiga");
        break;
    case 4:
        console.log("Empat");
        break;
    default:
        console.log("Angka tidak valid");
}
