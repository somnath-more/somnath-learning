import java.util.Arrays;

public class OnceInArray {
    public static void main(String[] args) {
        int arr[] = {1,2,3,4,4,5,1,2,5};
        int n = arr.length;
        Arrays.sort(arr);
        for(int i=0;i<n;i++){
            boolean isOnce = true;
            for(int j=0;j<i;j++){
                if(arr[i] == arr[j]){
                    isOnce = false;
                    break;
                }
            }
            if(isOnce){
                System.out.println("First occurrence of "+arr[i]+" is at index: "+i);
                break;
            }
        }
    }
}
