import java.util.ArrayList;
import java.util.Scanner;

public class DayTwo {
    // 1. Reverse a String
    public String ReverseString(String str) {
        StringBuilder reversedString = new StringBuilder();
        for (int i = str.length() - 1; i >= 0; i--) {
            reversedString.append(str.charAt(i));
        }
        return reversedString.toString();
    }

//  Difference String Buffer and String Builder

    // StringBuilder is faster for frequent string concatenation,
    // while StringBuffer is thread-safe and slower for single-threaded applications.
    // StringBuilder is used when you need to modify the string in place.
    // StringBuffer is used when you need to modify the string in a multi-threaded environment.

    // 2. Fibonacci Series
    public ArrayList<Integer> FibonacciList(int n) {
        ArrayList<Integer> fibArray = new ArrayList<>();
        if (n <= 0) return fibArray;
        fibArray.add(0);
        if (n == 1) return fibArray;
        fibArray.add(1);
        for (int i = 2; i < n; i++) {
            fibArray.add(fibArray.get(i - 1) + fibArray.get(i - 2));
        }
        return fibArray;
    }

    // 3. Factorial
    public int checkFactorial(int num) {
        if (num == 0 || num == 1) return 1;
        int result = 1;
        for (int i = 2; i <= num; i++) {
            result *= i;
        }
        return result;
    }

    // 4. Palindrome
    public void isPalindrome(String str) {
        StringBuilder sb = new StringBuilder(str);
        if (sb.toString().equalsIgnoreCase(sb.reverse().toString())) {
            System.out.println(str + " is a palindrome.");
        } else {
            System.out.println(str + " is not a palindrome.");
        }
    }

    // 5. Prime Number
    public void isPrime(int num) {
        if (num <= 1) {
            System.out.println(num + " is not a prime number.");
            return;
        }
        for (int i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                System.out.println(num + " is not a prime number.");
                return;
            }
        }
        System.out.println(num + " is a prime number.");
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        DayTwo d2 = new DayTwo();

        System.out.println("Enter your choice (1-5): ");
        int choice = scanner.nextInt();

        switch (choice) {
            case 1:
                System.out.println("Enter a string: ");
                String str = scanner.next();
                System.out.println("Reversed string: " + d2.ReverseString(str));
                break;
            case 2:
                System.out.println("Enter the number of terms: ");
                int n = scanner.nextInt();
                System.out.println("Fibonacci series: " + d2.FibonacciList(n));
                break;
            case 3:
                System.out.println("Enter a number: ");
                int num = scanner.nextInt();
                System.out.println("Factorial of " + num + " is: " + d2.checkFactorial(num));
                break;
            case 4:
                System.out.println("Enter a string: ");
                String palindrome = scanner.next();
                d2.isPalindrome(palindrome);
                break;
            case 5:
                System.out.println("Enter a number: ");
                int num1 = scanner.nextInt();
                d2.isPrime(num1);
                break;
            default:
                System.out.println("Invalid choice.");
                break;
        }

        scanner.close();
    }
}
