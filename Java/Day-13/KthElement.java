import java.util.*;
public class KthElement {
    public static void main(String[] args) {
        int [] nums = {1, 2, 3, 4, 5, 6, 7, 8};
        int k = 3;
        Arrays.sort(nums);
        System.out.println(nums[nums.length-k]);
       // return nums[nums.length - k];
    }
}