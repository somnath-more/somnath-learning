
public class ZeroToend {
    public static void main(String[] args) {
        // Move Zeros to End: Write a program to move all zeroes in an array to the end while maintaining the relative order of the non-zero elements.
        int[] nums={1,2,0,3,0,5};
        int n = nums.length;
        int j = 0;
        int countZero = 0;
        for(int i=0; i<n; i++) {
            if(nums[i]==0) {
            countZero+=1;
        }

        }
        for(int i=0; i<n; i++) {
            if(nums[i]!=0) {
                nums[j]=nums[i];
                j++;
            }
        }
        while(countZero>0){
            nums[j]=0;
           countZero--;
           j++;
        }
        System.out.println("Array after moving zeros to end: ");
        for(int i=0; i<n; i++) {
            System.out.print(nums[i]+" ");
        }
    }
}
