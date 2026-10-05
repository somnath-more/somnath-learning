
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class ToMap{
    public static void main(String[] args) {
        List<String> list = new ArrayList<>();
        // list.add("Java");
        // list.add("Python");
        // list.add("C++");    

        // Map<String, Integer> map = list.stream()
        //         .collect(Collectors.toMap(Function.identity(), String::length));
        // System.out.println(map);
        // String a="Somnath";
        // String b=new String("Somnath");
        // System.out.println(a==b);
        // System.out.println(a.equals(b));
//         Input:
// nums = [2, 7, 11, 15]
// target = 9

// Output:
// [0, 1]
    // i will use hashmap
    Map<Integer,Integer> map=new HashMap<>();
   int[] nums = new int[]{2,7,11,15};
   map.put(nums[0], 0);
   int target=9;
    for(int i=1;i<nums.length;i++){
        int complement=target-nums[i];
        if(map.containsKey(complement)){
            System.out.println("["+map.get(complement)+","+i+"]");
        }
        map.put(nums[i], i);




    }
    }
}