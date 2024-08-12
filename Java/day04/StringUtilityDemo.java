package day04;

import java.util.Arrays;

public class StringUtilityDemo {
    public static void main(String[] args) {
        String str = "  Hello World  ";

        // toUpperCase() and toLowerCase()
        System.out.println("Original: " + str);
        System.out.println("Uppercase: " + str.toUpperCase());
        System.out.println("Lowercase: " + str.toLowerCase());

        // trim(), strip(), stripLeading(), stripTrailing()
        System.out.println("Trimmed: " + str.trim());
        System.out.println("Stripped: " + str.strip());
        System.out.println("Stripped Leading: " + str.stripLeading());
        System.out.println("Stripped Trailing: " + str.stripTrailing());

        // concat()
        String concatStr = str.trim().concat(" Java");
        System.out.println("Concatenated: " + concatStr);

        // repeat()
        String repeatedStr = "abc".repeat(3);
        System.out.println("Repeated: " + repeatedStr);

        // substring()
        System.out.println("Substring (0, 5): " + str.trim().substring(0, 5));

        // contains(), indexOf(), lastIndexOf()
        System.out.println("Contains 'World': " + str.contains("World"));
        System.out.println("Index of 'World': " + str.indexOf("World"));
        System.out.println("Last Index of 'o': " + str.lastIndexOf('o'));

        // replace() and replaceAll()
        System.out.println("Replace 'World' with 'Java': " + str.replace("World", "Java"));
        System.out.println("Replace all 'o' with '0': " + str.replaceAll("o", "0"));

        // split()
        String[] parts = str.trim().split(" ");
        System.out.println("Split by space: " + Arrays.toString(parts));

        // equals() and equalsIgnoreCase()
        System.out.println("Equals 'Hello World': " + str.trim().equals("Hello World"));
        System.out.println("Equals Ignore Case 'HELLO world': " + str.trim().equalsIgnoreCase("HELLO world"));

        // isEmpty()
        System.out.println("Is empty: " + str.trim().isEmpty());

        // valueOf()
        int num = 42;
        System.out.println("String value of integer 42: " + String.valueOf(num));

        // codePointAt(), codePointBefore(), codePointCount()
        System.out.println("Code Point at index 1: " + str.codePointAt(1));
        System.out.println("Code Point before index 5: " + str.codePointBefore(5));
        System.out.println("Code Point Count (0, 5): " + str.codePointCount(0, 5));

        // matches(), replaceFirst()
        System.out.println("Matches regex '\\d+': " + str.matches("\\d+"));
        System.out.println("Replace first digit with 'NUM': " + str.replaceFirst("\\d+", "NUM"));

        // regionMatches()
        String str2 = "HelloJava";
        System.out.println("Region matches (ignore case, 0, str2, 0, 5): " + str.regionMatches(true, 0, str2, 0, 5));

        // lines()
        String multiLineStr = "line1\nline2\nline3";
        System.out.println("Lines:");
        multiLineStr.lines().forEach(System.out::println);
    }
}
