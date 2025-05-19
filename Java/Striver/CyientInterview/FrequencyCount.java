package Striver.CyientInterview;

import java.util.HashMap;

public class FrequencyCount {
        static void Frequencecount(){
        // Count the frequency of each element in the array:
        int arr[] = {1, 2, 3, 4, 5, 1, 2, 3, 4, 5};
        int n = arr.length;
        HashMap<Integer,Integer> mp=new HashMap<>();
        for (int i = 0; i < n; i++) {
            if (mp.containsKey(arr[i])) {
                mp.put(arr[i], mp.getOrDefault(arr[i], 0) + 1);
            } else {
                mp.put(arr[i], 1);
            }
        }
        // Print the frequency of each element:
         for (Object it : mp.keySet()) {
            System.out.println(it + " " + mp.get(it));
             
         }
    }
    public static void main(String[] args) {
        // Example usage:
        Frequencecount();
        
    }
}
