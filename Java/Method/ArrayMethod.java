
import java.util.Arrays;

public class ArrayMethod {
    public static void main(String[] args) {
        int[] arr = { 1, 5, 4, 9, 8 };
        System.out.println(arr.length);
        // int[] newarr= arr.clone();
        // System.err.println(newarr.length);
        System.out.println(arr.getClass());
        Arrays.sort(arr);
        System.out.println(arr);
        Arrays.asList(arr);
        System.out.println(arr.hashCode());
    }
}