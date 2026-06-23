#include <stdio.h>

int main() {
    int belanja, hasil;

    printf("Masukkan total belanja: ");
    scanf("%d", &belanja);

    hasil = (belanja / 50) * 50;

    printf("Hasil pembulatan = Rp%d\n", hasil);

    return 0;
}