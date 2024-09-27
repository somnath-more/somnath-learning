import java.util.HashMap;

public class MajorityElement {
    int calculateMajority(int nums[]) {
        HashMap<Integer, Integer> mp = new HashMap<>();
        int majorityCount = nums.length / 2;

        for (int num : nums) {
            // Count the occurrences of each number
            mp.put(num, mp.getOrDefault(num, 0) + 1);

            // Check if the current element is the majority element
            if (mp.get(num) > majorityCount) {
                return num;
            }
        }

        // If no majority element found, return -1
        return -1;
    }

    public static void main(String[] args) {
        MajorityElement obj = new MajorityElement();
        int nums[] = {2, 2, 3, 4, 4, 4, 4, 4, 5};
        System.out.println("Majority Element is: " + obj.calculateMajority(nums));
    }
}
