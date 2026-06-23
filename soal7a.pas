program Soal7a;
uses crt;
var
    n: integer;
begin
    clrscr;
    write('Masukkan bilangan 1-10: ');
    readln(n);

    case n of
        1: writeln('I');
        2: writeln('II');
        3: writeln('III');
        4: writeln('IV');
        5: writeln('V');
        6: writeln('VI');
        7: writeln('VII');
        8: writeln('VIII');
        9: writeln('IX');
        10: writeln('X');
    else
        writeln('Tidak valid');
    end;

    readln;
end.