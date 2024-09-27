import java.util.ArrayList;

public class groupAnagram {
    // Function to group anagrams
    public static void groupAnagrams(ArrayList<String> words) {
        ArrayList<ArrayList<String>> anagrams = new ArrayList<ArrayList<String>>();
        

//  Write a program to group anagrams from an array of strings.
    public static void main(String[] args) {
        ArrayList<String> groups = new ArrayList<String>();
        groups.add("test");
        groups.add("tset");
        groups.add("star");
        groups.add("arts");
        groups.add("rats");
        System.out.println("Grouped Anagrams:");
        groupAnagrams(groups);
    }
}