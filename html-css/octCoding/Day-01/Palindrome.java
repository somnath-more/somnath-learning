public class Palindrome {
    public static boolean isPalindrome(String input) {
        // Convert the input to lowercase and remove non-alphanumeric characters
        String cleanedInput = input.toLowerCase().replaceAll("[^a-z0-9]", "");
        if( input.length() % 2 != 0){
            return false;
        }

        for(int i=0;i<input.length()/2;i++){
            if(cleanedInput.charAt(i)!= cleanedInput.charAt(input.length() - i - 1)){
                return false;
             
            }
        }
        return true;
    }
    public static void main(String[] args) {
        // malayalam
        String input = "malayalam";
        boolean isPalindrome = isPalindrome(input);
        System.out.println("Is \"" + input + "\" a palindrome? " + (isPalindrome?"true":"false"));
    }
}
