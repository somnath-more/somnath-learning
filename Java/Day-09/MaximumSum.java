public class MaximumSum {
    public static int maxSum(int[] arr) {
        int maxSum=0,currSum=0;
        for(int i=0;i<arr.length;i++){
             currSum+=arr[i];
           if(currSum>maxSum)
           {
               maxSum=currSum;
           }
           if(currSum<0)
           {
              currSum=0;
           }
        }
        return maxSum; 
    }
    public static void main(String[] args){
        int[] arr = {1, -2, 3, 4, -10, 23, -1, 0, 20};
        System.out.println("Maximum sum of a contiguous subarray: " + maxSum(arr)+ "okk");
    }
    
}
