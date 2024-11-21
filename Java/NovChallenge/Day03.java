
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

class Day03 {

    // Method to calculate factorial
    public int factorial(int n) {
        if (n == 0 || n == 1) {
            return 1;
        }
        return n * factorial(n - 1);
    }

    // Method to calculate nth Fibonacci number and return the sequence
    public ArrayList<Integer> fibonacci(int n) {
        ArrayList<Integer> fibArr = new ArrayList<>();
        if (n == 0) {
            fibArr.add(0);
            return fibArr;
        }

        int a = 0, b = 1;
        fibArr.add(a);
        fibArr.add(b);

        for (int i = 2; i <= n; i++) {
            int c = a + b;
            fibArr.add(c);
            a = b;
            b = c;
        }

        return fibArr;
    }

    // Method to find the first non-repeating character in a string
    public Character firstNonrepeatingChar(String str) {
        Map<Character, Integer> charFreq = new HashMap<>();
        for (char c : str.toCharArray()) {
            charFreq.put(c, charFreq.getOrDefault(c, 0) + 1);
        }

        for (char c : str.toCharArray()) {
            if (charFreq.get(c) == 1) {
                return c;
            }
        }
        return null;
    }

    // Method to find the maximum sum of a subarray
    public Integer findMaxSum(int[] arr) {
        int n = arr.length;
        int currSum = 0;
        int maxSum = Integer.MIN_VALUE;

        for (int i = 0; i < n; i++) {
            currSum += arr[i];
            if (maxSum < currSum) {
                maxSum = currSum;
            }
            if (currSum < 0) {
                currSum = 0;
            }
        }
        return maxSum;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Day03 day = new Day03();

        System.out.println("Choose an operation:");
        System.out.println("1: Factorial");
        System.out.println("2: Fibonacci");
        System.out.println("3: First Non-Repeating Character");
        System.out.println("4: Maximum Subarray Sum");
        System.out.println("Enter a choice : ");
        int choice = scanner.nextInt();

        switch (choice) {
            case 1 -> {
                System.out.println("Enter a number for factorial:");
                int numFactorial = scanner.nextInt();
                System.out.println("Factorial of " + numFactorial + " is: " + day.factorial(numFactorial));
            }

            case 2 -> {
                System.out.println("Enter a number for Fibonacci:");
                int numFibonacci = scanner.nextInt();
                ArrayList<Integer> fibSequence = day.fibonacci(numFibonacci);
                System.out.println("Fibonacci sequence up to " + numFibonacci + " is: " + fibSequence);
            }

            case 3 -> {
                System.out.println("Enter a string:");
                scanner.nextLine(); // Consume leftover newline
                String inputStr = scanner.nextLine();
                Character firstNonRepeating = day.firstNonrepeatingChar(inputStr);
                if (firstNonRepeating != null) {
                    System.out.println("First non-repeating character is: " + firstNonRepeating);
                } else {
                    System.out.println("No non-repeating character found.");
                }
            }

            case 4 -> {
                System.out.println("Enter the size of the array:");
                int size = scanner.nextInt();
                int[] arr = new int[size];
                System.out.println("Enter the array elements:");
                for (int i = 0; i < size; i++) {
                    arr[i] = scanner.nextInt();
                }
                System.out.println("Maximum subarray sum is: " + day.findMaxSum(arr));
            }

            default ->
                System.out.println("Invalid choice. Please choose between 1 and 4.");
        }

        scanner.close();
    }
}
