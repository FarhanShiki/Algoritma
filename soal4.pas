#include <stdio.h>

int main() {
    int a, b, c, temp;

    printf("Masukkan bilangan pertama: ");
    scanf("%d", &a);
    printf("Masukkan bilangan kedua: ");
    scanf("%d", &b);
    printf("Masukkan bilangan ketiga: ");
    scanf("%d", &c);

    if (a > b) {
        temp = a; a = b; b = temp;
    }
    if (a > c) {
        temp = a; a = c; c = temp;
    }
    if (b > c) {
        temp = b; b = c; c = temp;
    }

    printf("Urutan: %d %d %d\n", a, b, c);

    return 0;
}