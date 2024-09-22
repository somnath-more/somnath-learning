package Java.Day05;

import java.util.Scanner;

public class ReverseString {

    // Method to reverse the string using StringBuilder
    public String reverseString(String str) {
        StringBuilder sb = new StringBuilder(str);
        return sb.reverse().toString();
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        try {
            System.out.println("Enter a String : ");
            ReverseString reverseString = new ReverseString();
            String str = scanner.nextLine();
            System.out.println("Reversed String: " + reverseString.reverseString(str));
        } finally {
            scanner.close(); // Ensure the scanner is closed after usage
        }
    }
}
