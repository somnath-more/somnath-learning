public class BinarySearch{
    public static int binarySearch(int[] arr, int target) {
        int left = 0;
        int right = arr.length - 1;
        while(left < right){
            int mid = left + (right - left) / 2;
            if(arr[mid] == target){
                return mid;
            }
            if(arr[mid] < target){
                left = mid + 1;
            }else{
                right = mid - 1;
            }
        }
        return -1; // Target not found in the array
    }
    public static void main(String[] args) {
        
        int[] arr = {1, 3, 5, 7, 9, 11, 13, 15, 17, 19};
        int target = 11;
        
        int index = binarySearch(arr, target);
        
        System.out.println(index);
    }
}