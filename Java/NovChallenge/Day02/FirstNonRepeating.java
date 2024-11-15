public class FirstNonRepeating {
    public char findFirstNonRepeatingCharacter(String str) {
        int[] count = new int[256];
    
        for (int i = 0; i < str.length(); i++) {
            count[str.charAt(i)]++;
        }
        
        for (int i = 0; i < str.length(); i++) {
            if (count[str.charAt(i)] == 1) {
                return str.charAt(i);
            }
        }
        
        return '\0'; // If no non-repeating character is found
    }
    public static void main(String[] args) {
        FirstNonRepeating firstNonRepeating = new FirstNonRepeating();
        String input = "Hello World";
        System.out.println("First non-repeating character in '" + input + "': " + firstNonRepeating.findFirstNonRepeatingCharacter(input));
    }
}
