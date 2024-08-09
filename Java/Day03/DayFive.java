import java.util.ArrayList;
import java.util.Scanner;

public class DayFive {

    public void checkArmStrong(int num) {
        // 153 = 1 + 125 + 27
        int originalNum = num;
        int sum = 0;
        while (num != 0) {
            int lastNumber = num % 10;
            num = num / 10; // 15
            sum += lastNumber * lastNumber * lastNumber;
        }
        if (sum == originalNum)
            System.out.println(originalNum + " is an Armstrong number.");
        else
            System.out.println(originalNum + " is not an Armstrong number.");
    }

    public int sumOfDigits(int num) {
        int sum = 0;
        while (num != 0) {
            int lastNumber = num % 10;
            sum += lastNumber;
            num = num / 10; // 15
        }
        return sum;
    }

    public void printDuplicates(String str) {
        ArrayList<Character> list = new ArrayList<Character>();
        for (int i = 0; i < str.length(); i++) {
            if (!list.contains(str.charAt(i))) {
                list.add(str.charAt(i));
            } else {
                System.out.println(str.charAt(i) + " is a duplicate character.");
            }
        }
    }

    public void bubbleSort(ArrayList<Integer> list) {
        int size = list.size(); // TC O(n^2) SC O(n)
        for (int i = 0; i < size; i++) {
            for (int j = 0; j < size - i - 1; j++) {
                if (list.get(j) > list.get(j + 1)) {
                    int temp = list.get(j);
                    list.set(j, list.get(j + 1));
                    list.set(j + 1, temp);
                }
            }
        }
        for (int i = 0; i < list.size(); i++) {
            System.out.println(list.get(i));
        }
    }

    public void binarySearch(ArrayList<Integer> arr, int target) {
        // using binary search
        int l = 0;
        int r = arr.size() - 1;
        while (l <= r) {
            int mid = l + (r - l) / 2;
            if (arr.get(mid) == target) {
                System.out.println("Element found at index: " + mid);
                return;
            } else if (arr.get(mid) < target) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
        System.out.println("Element not found.");
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter your choice (1-5): ");
        int choice = scanner.nextInt();
        DayFive db = new DayFive();
        ArrayList<Integer> arrayList = new ArrayList<Integer>();
        arrayList.add(5);
        arrayList.add(3);
        arrayList.add(1);
        arrayList.add(4);
        scanner.nextLine(); // Consume the newline character left by nextInt()
        switch (choice) {
            case 1:
                System.out.println("You chose option 1. Enter a number: ");
                int num = scanner.nextInt();
                db.checkArmStrong(num);
                break;
            case 2:
                System.out.println("You chose option 2. Enter a number 1: ");
                int num1 = scanner.nextInt();
                System.out.println("Enter a number 2: ");
                int num2 = scanner.nextInt();
                System.out.println("Sum of digits of " + num1 + " and " + num2 + " is: " + db.sumOfDigits(num1) + " " + db.sumOfDigits(num2));
                break;
            case 3:
                System.out.println("You chose option 3. Enter a string: ");
                String str = scanner.nextLine();
                db.printDuplicates(str);
                break;
            case 4:
                System.out.println("You chose option 4.");
                db.bubbleSort(arrayList);
                break;
            case 5:
                System.out.println("You chose option 5. Enter a number: ");
                int searchNum = scanner.nextInt();
                db.binarySearch(arrayList, searchNum);
                break;
            default:
                System.out.println("Invalid choice.");
                break;
        }

        scanner.close();
    }
}
