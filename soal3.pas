program Soal3;
uses crt;
var
    a, b, c, temp: integer;
begin
    clrscr;
    write('Masukkan bilangan pertama: ');
    readln(a);
    write('Masukkan bilangan kedua: ');
    readln(b);
    write('Masukkan bilangan ketiga: ');
    readln(c);

    if a > b then
    begin
        temp := a;
        a := b;
        b := temp;
    end;

    if a > c then
    begin
        temp := a;
        a := c;
        c := temp;
    end;

    if b > c then
    begin
        temp := b;
        b := c;
        c := temp;
    end;

    writeln('Urutan: ', a, ' ', b, ' ', c);
    readln;
end.