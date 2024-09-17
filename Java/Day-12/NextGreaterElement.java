import java.util.Stack;

public class NextGreaterElement {
    public static int[] NextGreaterElement(int[] arr) {

        int n = arr.length;
        int[] result = new int[n];  // Array to store the next greater elements
        Stack<Integer> stack = new Stack<>();

        // Initialize all elements in the result array to -1
        for (int i = 0; i < n; i++) {
            result[i] = -1;
        }

        // Traverse the array from right to left
        for (int i = n - 1; i >= 0; i--) {
            // Pop elements from the stack that are smaller or equal to the current element
            while (!stack.isEmpty() && stack.peek() <= arr[i]) {
                stack.pop();
            }

            // If the stack is not empty, the top of the stack is the next greater element
            if (!stack.isEmpty()) {
                result[i] = stack.peek();
            }

            // Push the current element onto the stack
            stack.push(arr[i]);
        }

        return result;
       
    }

    public static void main(String[] args) {
        int arr[] = { 2, 3, 4, 5, 6 };  // Sorted array for binary search
        int x = 3;
       int[] ans= NextGreaterElement(arr);
       for (int i=0; i<ans.length; i++) {
        System.out.print(ans[i] + " ");
       }

    }
}
