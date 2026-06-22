const prompt = require("prompt-sync")({ sigint:true });
let nama = prompt("Masukkan nama karyawan: ");
let golongan = prompt("Masukkan golongan (A/B/C/D): ").toUpperCase();
let jamKerja = parseInt(prompt("Masukkan jumlah jam kerja selama seminggu: "));

let upahPerJam;
let gaji;
let lembur = 0;

// Menentukan upah berdasarkan golongan
if (golongan === "A") {
    upahPerJam = 4000;
} else if (golongan === "B") {
    upahPerJam = 5000;
} else if (golongan === "C") {
    upahPerJam = 6000;
} else if (golongan === "D") {
    upahPerJam = 7500;
} else {
    console.log("Golongan tidak valid!");
    process.exit();
}

// Menghitung gaji
if (jamKerja <= 48) {
    gaji = jamKerja * upahPerJam;
} else {
    lembur = jamKerja - 48;
    gaji = (48 * upahPerJam) + (lembur * 3000);
}

// Output
console.log("\n===== HASIL =====");
console.log("Nama Karyawan :", nama);
console.log("Golongan      :", golongan);
console.log("Jam Kerja     :", jamKerja, "jam");
console.log("Jam Lembur    :", lembur, "jam");
console.log("Gaji Mingguan : Rp" + gaji);