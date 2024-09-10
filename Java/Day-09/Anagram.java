import java.util.Arrays;

public class Anagram{

    public static boolean checkAnagram(String str1,String str2){
        // length should be equal
        // same character should be there
        // 
        if(str1.length() != str2.length()){
            return false;
        }
        char[] c1 = str1.toCharArray();
        char[] c2 = str2.toCharArray();
        Arrays.sort(c1);
        Arrays.sort(c2);
        // 
        // 
        return Arrays.equals(c1, c2);
    }
    public static void main(String[] args) {
        // Anagram a = new Anagram();
        String str1 = "listen";
        String str2 = "silent";
        
        System.out.println(checkAnagram(str1, str2)); // true
    }
}