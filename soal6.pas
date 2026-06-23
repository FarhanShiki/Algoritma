#include <stdio.h>

int main() {
    char ch;
    int angka;

    printf("Masukkan sebuah karakter: ");
    scanf(" %c", &ch);

    if (ch >= '0' && ch <= '9')
        angka = ch - '0';
    else
        angka = -99;

    printf("Hasil konversi = %d\n", angka);

    return 0;
}