import java.util.Arrays;

public class Duplicate {
    public static int findDuplicate(int arr[]) {
        int n = arr.length;
        Arrays.sort(arr);
        for (int i = 0; i < n - 1; i++) {
            if (arr[i] == arr[i + 1]) {
                System.out.println("Duplicate element is: " + arr[i]);
                return arr[i];
               
            }
        }
        return -1;
    }
    public static void main(String[] args) {
        int arr[]={1,2,3,4};
        System.out.println(findDuplicate(arr));
    }
}
