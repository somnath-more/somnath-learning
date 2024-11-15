
public class WorReverse {

    public WorReverse() {
        String input = "Hello World";
        String reversed = reverseWords(input);
        System.out.println(reversed);
    }

    public String reverseWords(String input) {
        char[] chars = input.toCharArray();

        String[] charArray = input.split(" ");
        for (int i = 0; i < charArray.length; i++) {
            StringBuilder sb = new StringBuilder(charArray[i]);
            charArray[i] = sb.reverse().toString();

        }
//  convertin charArray to string 
        String reversedWords = String.join(" ", charArray);
        String reveeseEachWord = charArray.toString();
        System.out.println(reveeseEachWord.charAt(0));
        return reversedWords;

    }

    public static void main(String[] args) {
        WorReverse word = new WorReverse();
    }
}
