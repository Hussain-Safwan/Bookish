#include<stdio.h>
int main(){
    int a, b;
    scanf("%d%d", &a, &b);
    double ans = (a*100)/b;
    printf("%.3lf\n", ans);
}