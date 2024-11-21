
public class CountVowel {

    public void countVowelsAndConsonants(String sentence) {
        int vowelCount = 0;
        int consonantCount = 0;

        for (int i = 0; i < sentence.length(); i++) {
            char c = Character.toLowerCase(sentence.charAt(i));

            if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
                vowelCount++;
            } else if (Character.isLetter(c)) {
                consonantCount++;
            }
        }

        System.out.println("Number of vowels: " + vowelCount);
        System.out.println("Number of consonants: " + consonantCount);
    }

    public static void main(String[] args) {
        CountVowel count = new CountVowel();
        String sentence = "Hello World!";
        count.countVowelsAndConsonants(sentence);
    
    }
}
