program Soal5b;
uses crt;
var
    ch: char;
    angka: integer;
begin
    clrscr;
    write('Masukkan sebuah karakter: ');
    readln(ch);

    if (ch >= '0') and (ch <= '9') then
        angka := ord(ch) - ord('0')
    else
        angka := -99;

    writeln('Hasil konversi = ', angka);
    readln;
end.