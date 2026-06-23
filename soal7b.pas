program Soal7b;
uses crt;
var
    angka: integer;
begin
    clrscr;
    write('Masukkan bilangan positif: ');
    readln(angka);

    while angka >= 1000 do begin write('M'); angka := angka - 1000; end;
    if angka >= 900 then begin write('CM'); angka := angka - 900; end;
    if angka >= 500 then begin write('D'); angka := angka - 500; end;
    if angka >= 400 then begin write('CD'); angka := angka - 400; end;
    while angka >= 100 do begin write('C'); angka := angka - 100; end;
    if angka >= 90 then begin write('XC'); angka := angka - 90; end;
    if angka >= 50 then begin write('L'); angka := angka - 50; end;
    if angka >= 40 then begin write('XL'); angka := angka - 40; end;
    while angka >= 10 do begin write('X'); angka := angka - 10; end;
    if angka >= 9 then begin write('IX'); angka := angka - 9; end;
    if angka >= 5 then begin write('V'); angka := angka - 5; end;
    if angka >= 4 then begin write('IV'); angka := angka - 4; end;
    while angka >= 1 do begin write('I'); angka := angka - 1; end;

    writeln;
    readln;
end.