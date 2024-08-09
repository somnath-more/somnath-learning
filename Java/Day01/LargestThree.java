// Write a Java program to find the largest of three numbers.
import java.util.Scanner;
public class LargestThree{
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        int n=3;
        System.out.println("Enter Three number: ");
        int largest = Integer.MIN_VALUE;
        while(n != 0){
            System.out.print("Enter the " + n + " number: ");
            int num = scanner.nextInt();
            if(num > largest){
                largest = num;
            }
            n--;
        }
        System.out.println("The largest number is: " + largest);

    }
}