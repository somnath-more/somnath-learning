public class MissingNumber {
    public static void main(String[] args) {
        // Write a program to find the missing number in an array of consecutive integers.
        int [] arr= {1,2,3,4,5,6,7,9,10};
        int n = arr.length + 1;
        int totalSum = n*(n+1)/2;
        int sum = 0;
        for(int i=0; i<arr.length; i++){
            sum += arr[i];
    
        }
        System.out.println(totalSum-sum);
       return ;
    }
}
