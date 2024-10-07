public class TrappingRainWater {

    // Function to calculate total amount of water trapped
    public static int totalRaiWaterStore(int arr[],int n) {
        int left[] = new int[n];
        int right[] = new int[n];
        left[0] = arr[0];
        right[n-1] = arr[n-1];
        
        // Fill left array
        for (int i = 1; i < n; i++)
            left[i] = Math.max(left[i-1], arr[i]);
        
        
        // Fill right array
        for (int i = n-2; i >= 0; i--)
            right[i] = Math.max(right[i+1], arr[i]);
        
        // Calculate and return the total amount of water trapped
        int totalWater = 0;
        for (int i = 0; i < n; i++)
            totalWater += Math.min(left[i], right[i]) - arr[i];
        
        return totalWater;
    }

    public static void main(String[] args) {
       int arr[] = {3,0,0,2,0,4};
       int n = arr.length;
       System.out.println(totalRaiWaterStore(arr,n));
    }
}
