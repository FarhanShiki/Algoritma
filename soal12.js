const prompt = require("prompt-sync")({ sigint:true });
let tahun = parseInt(prompt("Masukkan tahun masehi: "));

if ((tahun % 4 === 0 && tahun % 100 !== 0) || (tahun % 400 === 0)) {
    console.log("Tahun " + tahun + " adalah tahun kabisat");
    console.log("Bulan Februari berjumlah 29 hari");
} else {
    console.log("Tahun " + tahun + " bukan tahun kabisat");
    console.log("Bulan Februari berjumlah 28 hari");
}