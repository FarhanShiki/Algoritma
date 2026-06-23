#include <stdio.h>

int main() {
    char ch;
    int angka;

    printf("Masukkan karakter digit (0..9): ");
    scanf(" %c", &ch);

    angka = ch - '0';

    printf("Nilai integer = %d\n", angka);

    return 0;
}