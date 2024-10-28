import java.util.*;
public class NumberSum{
    int finalValue=0;
    void calculateSum(int value){ 
        while(value !=0){
         int ans= value%10;
         value=value/10;
         finalValue+=ans;
       }
       System.out.println("The final answer of given value: " + finalValue);

    }
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the first number: ");
        int num1= scanner.nextInt();
        NumberSum sum = new NumberSum();
        sum.calculateSum(983);
    }
}