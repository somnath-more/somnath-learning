
public class BinarySearch {
    public static int binarySearch(int[] arr, int start, int end, int element) {
        while (start <= end) {
            int mid = start + (end - start) / 2;  // Prevents potential overflow

            if (arr[mid] == element) {
                return mid;  // Element found, return index
            } else if (arr[mid] < element) {
                start = mid + 1;  // Search in the right half
            } else {
                end = mid - 1;  // Search in the left half
            }
        }

        return -1;  // Element not found
    }

    public static void main(String[] args) {
        int arr[] = { 2, 3, 4, 5, 6 };  // Sorted array for binary search
        int x = 3;
        int result = binarySearch(arr, 0, arr.length - 1, x);

        if (result != -1) {
            System.out.println("Element found at index: " + result);
        } else {
            System.out.println("Element not found");
        }
    }
}
