public class MissingNumber{
    public static int findMissingNumber(int[] arr) {
        int n = arr.length + 1;
        int sum = (n * (n + 1)) / 2;
        int actualSum = 0;
        
        for (int num : arr) {
            actualSum += num;
        }
        
        return sum - actualSum;
    }
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5, 7, 8, 9, 10};
        int missingNumber = findMissingNumber(arr);
        System.out.println("The missing number is: " + missingNumber);
    }
}