program Soal9;
uses crt;
var
    berat, tinggi, beratIdeal, selisih: real;
begin
    clrscr;
    write('Masukkan berat badan (kg): ');
    readln(berat);
    write('Masukkan tinggi badan (cm): ');
    readln(tinggi);

    beratIdeal := tinggi - 100;
    selisih := berat - beratIdeal;
    if selisih < 0 then
        selisih := -selisih;

    if selisih <= 2 then
        writeln('Ideal')
    else
        writeln('Tidak ideal');

    readln;
end.