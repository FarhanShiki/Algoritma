#include <stdio.h>

int main() {
    int a, b, c;
    int kiri, kanan;

    printf("Masukkan sisi a: ");
    scanf("%d", &a);
    printf("Masukkan sisi b: ");
    scanf("%d", &b);
    printf("Masukkan sisi c: ");
    scanf("%d", &c);

    kiri = a*a + b*b;
    kanan = c*c;

    if (kiri == kanan)
        printf("Segitiga siku-siku\n");
    else if (kiri > kanan)
        printf("Segitiga lancip\n");
    else
        printf("Segitiga tumpul\n");

    return 0;
}