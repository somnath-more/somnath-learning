public class SubArrayWithSum {
    public static void subArrayWithSum(int[] arr, int sum) {
        int currentSum = 0;
        int startIndex = 0;
        for (int i = 0; i < arr.length; i++) {
             currentSum += arr[i];
             while (currentSum > sum && startIndex < i) {
                 currentSum -= arr[startIndex];
                 startIndex++;
             }
             if (currentSum == sum) {
                 System.out.println("Subarray with sum " + sum + " starting from index " + startIndex + " and ending at index " + i);
             }
         }
        }
    
    public static void main(String[] args) {
        // Subarray with Given Sum: Write a program to find a subarray in a given array that adds up to a given sum.
        int[] arr = {1, 4, 20, 3, 10, 5, 15};
        int sum = 33;
        subArrayWithSum(arr, sum);
    }

}