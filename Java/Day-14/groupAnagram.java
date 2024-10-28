import java.util.ArrayList;

public class groupAnagram {
    // Function to group anagrams
    public static void groupAnagrams(ArrayList<String> words) {
        ArrayList<ArrayList<String>> anagrams = new ArrayList<ArrayList<String>>();
        
        // Iterate over each word in the array
        for (String word : words) {
            // Create a new ArrayList for the current anagram
            ArrayList<String> currentAnagram = new ArrayList<String>();
            
            // Iterate over each word in the array
            for (String existingWord : words) {
                // If the current word and existing word are anagrams
                if (isAnagram(word, existingWord)) {
                    // Add the existing word to the current anagram
                    currentAnagram.add(existingWord);
                    
                    // Remove the existing word from the words array
                    words.remove(existingWord);
                }
            }
            
            // Add the current anagram to the anagrams array
            anagrams.add(currentAnagram);
        }
        
        // Print the grouped anagrams
        for (ArrayList<String> anagramGroup : anagrams) {
            System.out.println(anagramGroup);
        }
    }
        

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