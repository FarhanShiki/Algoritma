program Soal2;
uses crt;
var
    totalBelanja: longint;
    diskon, totalBayar: real;
begin
    clrscr;
    write('Masukkan total belanja: ');
    readln(totalBelanja);

    if totalBelanja > 100000 then
        diskon := totalBelanja * 0.10
    else
        diskon := 0;

    totalBayar := totalBelanja - diskon;

    writeln('Diskon      : Rp', diskon:0:0);
    writeln('Total bayar : Rp', totalBayar:0:0);

    readln;
end.