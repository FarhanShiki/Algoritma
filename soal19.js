const prompt = require("prompt-sync")({ sigint:true });
let bulan = parseInt(prompt("Masukkan bulan (1-12): "));
let tahun = parseInt(prompt("Masukkan tahun: "));
let hari;

switch (bulan) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        hari = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        hari = 30;
        break;
    case 2:
        if ((tahun % 400 === 0 && tahun % 100 !== 0) || tahun % 4 === 0) {
            hari = 29;
        } else {
            hari = 28;
        }
        break;
    default:
        console.log("Bulan tidak valid.");
}
if (hari !== undefined) {
    console.log(`Jumlah hari pada bulan ${bulan} tahun ${tahun} adalah ${hari} hari.`);
}