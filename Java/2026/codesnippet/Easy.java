
import java.util.Arrays;
import java.util.List;
import java.util.StringJoiner;

public class Easy {

    public static void test1() {
        StringBuffer sb = new StringBuffer("Hello");
        sb.append(" World");
        sb.repeat(42, "$");
        System.out.println(sb.toString());
    }

    public static void may224() {
        int x = 10;
        x *= (5 + 3);
        System.out.println(x);
    }

    public int may524() {
        return 10;
    }
    public static void may62024() {
        // range of short is -32768 to 32767
        int x = 32767; // this will cause compile time error because it is out of range for short
        int y=1;
        System.out.println(x+y);
    }
    public static void may72024() {
        StringJoiner sj = new StringJoiner(", ");
        sj.add("Hello");
        sj.add("World");
        sj.add("Java");
        System.out.println(sj.toString());
    }
    public static void june62024() {
        List<String> list = Arrays.asList("Hello", "World", "Java");
       List<String> filteredList = list.stream().filter(s -> s.length() > 4).toList();
        System.out.println(filteredList);
        // ALL Match vs anymatch 
        int hasLengthGreaterThan=3;

        boolean allMatch = list.stream().allMatch(s -> s.length() > hasLengthGreaterThan);
        boolean anyMatch = list.stream().anyMatch(s -> s.length() > hasLengthGreaterThan);
        System.out.println("All match: " + allMatch);
        System.out.println("Any match: " + anyMatch);

    }
    public static void june82024() {
        String str="";
       System.out.println(str.isBlank());
       System.out.println(str.isEmpty());
          String str1=" ";
       System.out.println(str1.isBlank());
       System.out.println(str1.isEmpty());
    }

    public static void main(String[] args) {
        // Object var=33.5;
        // if (var instanceof Double || var instanceof String) {
        // System.out.println("The variable is a Double or String.");
        // } else {
        // System.out.println("The variable is not a floating-point number.");
        // }
        // test1();
        // may224();

        // Person p=new Person("John", 30);
        // System.out.println(p.name());
        // System.out.println(p.age());
        // System.out.println(may524()); // compile time error because may524 is not
        // static method and we are trying to call it from static context(main method)
        //   may62024();
        //   may72024();
        // june62024();
        june82024();
    }
}
