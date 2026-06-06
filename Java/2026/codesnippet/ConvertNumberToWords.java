public class ConvertNumberToWords {
    public static final String[] units = {
        "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"
    };
    public static void main(String[] args) {
        String number = "12345";
        String words = convertNumberToWords(number);
        System.out.println("Number: " + number);
        System.out.println("In Words: " + words);
    }

    public static String convertNumberToWords(String number) {
        // Implementation for converting number to words
        StringBuilder words = new StringBuilder();
        for(int num: number.toCharArray()) {

            char c= (char)(num-'0');
            if(c>=0 && c<=9) {
                words.append(units[c]).append(" ");
            }
        }
        return words.toString().trim();
    }
}
