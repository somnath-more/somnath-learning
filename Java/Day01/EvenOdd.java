// Write a Java program to check if a number is even or odd.
import java.util.Scanner;

public class EvenOdd{
    public boolean isEven(int number) {
       return number % 2 == 0;
    }
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int num=scanner.nextInt();
        EvenOdd evenOdd = new EvenOdd();
        boolean result = evenOdd.isEven(num);
        if(result){
            System.out.println(num + " is even.");
        }else{
            System.out.println(num + " is odd.");
        }
    }
}