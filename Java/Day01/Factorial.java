// Write a Java program to find the factorial of a number.
import java.util.Scanner;
public class Factorial{
    public static int factorial(int n){
        if(n==1) return 1;
        else return n * factorial(n-1);
    }
    public static void main(String[] args){
        int num;
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a number: ");
        num = scanner.nextInt();
        int result = factorial(num);
        System.out.println("Factorial of " + num + " is: " + result);
    }
}