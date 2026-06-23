#include <stdio.h>

int main() {
    float berat, tinggi, beratIdeal, selisih;

    printf("Masukkan berat badan (kg): ");
    scanf("%f", &berat);
    printf("Masukkan tinggi badan (cm): ");
    scanf("%f", &tinggi);

    beratIdeal = tinggi - 100;
    selisih = berat - beratIdeal;
    if (selisih < 0)
        selisih = -selisih;

    if (selisih <= 2)
        printf("Ideal\n");
    else
        printf("Tidak ideal\n");

    return 0;
}