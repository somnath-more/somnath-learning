import java.util.Arrays;

public class KthLargest{
    public int findKthLargest(int[] nums, int k) {
           Arrays.sort(nums);
        //    1,2,3,4,5,6
           return nums[k-1];  
    }
    public static void main(String[] args) {
        int[] nums = {3,2,1,5,6,4};
        int k = 2;
        KthLargest obj = new KthLargest();
        System.out.println(obj.findKthLargest(nums, k));
    }
}