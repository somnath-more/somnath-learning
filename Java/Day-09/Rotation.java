// String Rotation: Write a program to check if one string is a rotation of another.

import java.util.Scanner;

public class Rotation {
    public static boolean isRotation(String str1, String str2) {
        if (str1.length()!=str2.length()) {
            return false;
        }
        String concatStr = str1 + str1;
        return concatStr.contains(str2) && concatStr.indexOf(str2) 
        != -1;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        // str1= somnath str2= thsomna
        System.out.print("Enter the first string: ");
        String str1 = scanner.nextLine();
        System.out.print("Enter the second string: ");
        String str2 = scanner.nextLine();
        boolean isRotation = isRotation(str1, str2);
        System.out.println("Is " + str1 + " a rotation of " + str2 + ": " + isRotation);
    }
}
