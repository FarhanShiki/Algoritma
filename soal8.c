#include <stdio.h>

int main() {
    int pixel;

    printf("Masukkan nilai pixel: ");
    scanf("%d", &pixel);

    if (pixel > 255)
        pixel = 255;
    else if (pixel < 0)
        pixel = 0;

    printf("Nilai pixel setelah clipping = %d\n", pixel);

    return 0;
}