#include <stdio.h>

// int getFirstDayOfTheYear (int year){
//     // int day =
// }
int main (){
    char *months [] = {"JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULAY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"};
    int daysInMonth [] = {31, 28, 31, 30, 31, 30, 31, 30, 31, 30, 31, 30};

    int i,j,totalDays,weekDay,spacePrinter,year;


    printf("\n Enter your favorite year\n\n");
    scanf("%d",&year);
    printf("\n************************* WellCome To %d ****************************\n\n",year);


    //check if it is leap year
    if(( year%4 == 0 && year%100 != 0)|| (year%400 == 0)){
        daysInMonth[1] = 29;
    }

    for (i=0; i<12; i++){
         printf("\n------------------------ %s ------------------------\n", months[i]);
         printf("\n   Sun   Mon   Tue   Wed   Thu   Fri   Sat   \n\n");

         for (spacePrinter = 1; spacePrinter<=weekDay; spacePrinter++){
            printf("      ");
         }

         totalDays = daysInMonth[i];
         for (j = 0; j<=totalDays; j++)
         {
            printf("%6d", j);
            weekDay++; 
            if(weekDay > 6){
                weekDay = 0;
                printf("\n");
            }
         }

    }
// getch();
return 0;

}
