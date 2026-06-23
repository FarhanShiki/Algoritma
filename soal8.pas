program Soal8;
uses crt;
var
    pixel: integer;
begin
    clrscr;
    write('Masukkan nilai pixel: ');
    readln(pixel);

    if pixel > 255 then
        pixel := 255
    else if pixel < 0 then
        pixel := 0;

    writeln('Nilai pixel setelah clipping = ', pixel);
    readln;
end.