import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Arrays;

public class CommonElement {
    public void findCommonElement(int[] arr1, int[] arr2, int[] arr3) {
        // Create a HashMap to track the occurrences of elements in arr1, arr2, arr3
        HashMap<Integer, Integer> fc = new HashMap<>();

        // Add elements from arr1 and mark them with the value 1
        for (int i = 0; i < arr1.length; i++) {
            fc.put(arr1[i], 1);
        }

        // For elements in arr2, mark them with the value 2 if they exist in arr1
        for (int i = 0; i < arr2.length; i++) {
            if (fc.containsKey(arr2[i]) && fc.get(arr2[i]) == 1) {
                fc.put(arr2[i], 2);  // Mark elements that are present in both arr1 and arr2
            }
        }

        // For elements in arr3, mark them with the value 3 if they exist in both arr1 and arr2
        for (int i = 0; i < arr3.length; i++) {
            if (fc.containsKey(arr3[i]) && fc.get(arr3[i]) == 2) {
                fc.put(arr3[i], 3);  // Mark elements present in all three arrays
            }
        }

        // Print the common elements
        System.out.println("Common elements found in all three arrays:");
        boolean found = false;
        for (Map.Entry<Integer, Integer> entry : fc.entrySet()) {
            if (entry.getValue() == 3) {
                System.out.print(entry.getKey() + " ");
                found = true;
            }
        }
        if (!found) {
            System.out.println("No common elements found.");
        }
    }


    public void CommonElementUsingHashset(int[] arr1,int[] arr2,int[] arr3){
       
          HashSet<Integer> set1 = new Hashset();
          for(int num:arr1){
              set1.add(arr1[i]);
          }
     HashSet<Integer> set2 = new Hashset();
          for(int num:arr2){
             if(set1.contains(num)){

              set2.add(num);
          }
}
 HashSet<Integer> ce = new Hashset();
          for(int num:arr3){
                          if(set2.contains(num)){

              ce.add(arr3[i]);
          }
          }
         for(int num: arr3){
             if(set.contains(num)){
                 ce.add(num);
             }
         }

        // Print the common elements
        System.out.println("Common elements found in all three arrays:");
        if (commonElements.isEmpty()) {
            System.out.println("No common elements found.");
        } else {
            for (int num : commonElements) {
                System.out.print(num + " ");
            }
            System.out.println();  // Newline after printing all elements
        }


      
    }
    public static void main(String[] args) {
        // Initialize arrays
        int[] arr1 = {1, 2, 3, 4};
        int[] arr2 = {4, 5, 6, 7};
        int[] arr3 = {4, 7, 8, 9};

        // // Print arrays using Arrays.toString()
        // System.out.println("Array 1: " + Arrays.toString(arr1));
        // System.out.println("Array 2: " + Arrays.toString(arr2));
        // System.out.println("Array 3: " + Arrays.toString(arr3));

        // Find common elements
        CommonElement ce = new CommonElement();
        ce.findCommonElement(arr1, arr2, arr3);
    }
}
