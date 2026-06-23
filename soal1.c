#include <stdio.h>

int main() {
    int bilangan;

    printf("Masukkan bilangan bulat positif: ");
    scanf("%d", &bilangan);

    if (bilangan % 4 == 0)
        printf("%d merupakan kelipatan 4\n", bilangan);
    else
        printf("%d bukan kelipatan 4\n", bilangan);

    return 0;
}