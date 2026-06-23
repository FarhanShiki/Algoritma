program Soal1;
uses crt;
var
    bilangan: integer;
begin
    clrscr;
    write('Masukkan bilangan bulat positif: ');
    readln(bilangan);

    if bilangan mod 4 = 0 then
        writeln(bilangan, ' merupakan kelipatan 4')
    else
        writeln(bilangan, ' bukan kelipatan 4');

    readln;
end.