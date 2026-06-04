public class CamelCase {

    private static String toCamelCase(String input) {
        String[] words = input.split(" ");
        StringBuilder camelCase = new StringBuilder();
        for (int i = 0; i < words.length; i++) {
            String word = words[i];
            // first smalles word and then capitalized first letter of each word
            
            if (i == 0) {
                camelCase.append(word);

            }else {
                camelCase.append(Character.toUpperCase(word.charAt(0)))
                         .append(word.substring(1).toLowerCase());
       
       }          
        }
        return camelCase.toString();
    }
    public static void main(String[] args) {
        String input = "hello worlD thiS is camel case";
        String camelCase = toCamelCase(input);
        System.out.println("Camel Case: " + camelCase);
    }
}
