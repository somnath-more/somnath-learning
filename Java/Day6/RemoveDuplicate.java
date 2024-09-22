public class RemoveDuplicate {
    //  Write a program to remove duplicates from a sorted array without using extra space.
    //  The array may contain both positive and negative integers.
    //  The program should have a time complexity of O(n) and a space complexity of O(1).
    //  Example:
    //  Input: [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5]
    //  Output: [1, 2, 3, 4, 5]
    public static void main(String[] args) {
        int [] arr= {1, 2, 3, 4, 5, 5, 6, 6, 6,7,7};
        int n = arr.length;
        int j = 0;
        
        for (int i = 0; i < n-1; i++) {
            if (arr[i]!=arr[i+1]) {
                arr[j++] = arr[i]; // 1 2 3 4 5 6 7 
            }
        }
        
        arr[j++] = arr[n-1];
        
        System.out.println("Array after removing duplicates: ");
        for (int i = 0; i < j; i++) {
            System.out.print(arr[i] + " ");
        }  // Time complexity: O(n) and Space complexity: O(1)
    }
}
