// Write a Java program to find the sum of two integers.
import java.util.Scanner;
public class Sum{
    public static int calculate(int num1, int num2){
        return num1 + num2;
    }
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the first integer: ");
        int num1 = scanner.nextInt();
        System.out.print("Enter the second integer: ");
        int num2 = scanner.nextInt();
        int ans= calculate(num1,num2);
        System.out.println("Sum: " + ans);
    }
}