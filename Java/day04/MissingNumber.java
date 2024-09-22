package day04;


public class MissingNumber {
    public static void main(String[] args) {
        int[] arr = {2, 3, 4, 1, 5};
        int n = 6;

        int totalSum = (n * (n + 1)) / 2; // Sum of numbers from 0 to n
        int sum = 0;
        for (int i = 0; i < arr.length; i++) {
            sum += arr[i]; // Sum of elements in the array
        }
        System.out.println("Missing number is: " + (totalSum - sum));
    }
}
