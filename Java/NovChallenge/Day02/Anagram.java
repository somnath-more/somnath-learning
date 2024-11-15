
import java.util.Arrays;

public class Anagram {

    public boolean isAnagram(String str1, String str2) {
        if (str1.length() != str2.length()) {
            return false;
        }

        // Convert both strings to lowercase and remove spaces
        str1 = str1.toLowerCase().replaceAll("\\s", "");
        str2 = str2.toLowerCase().replaceAll("\\s", "");

        // Sort the characters in both strings
        char[] charArray1 = str1.toCharArray();
        char[] charArray2 = str2.toCharArray();
        Arrays.sort(charArray1);
        Arrays.sort(charArray2);

        // Compare the sorted strings
        return Arrays.equals(charArray1, charArray2);
    }

    public static void main(String[] args) {
        Anagram a = new Anagram();
        String str1 = "listen";
        String str2 = "silent";
        boolean result = a.isAnagram(str1, str2);
        System.out.println(result);
    }
}
