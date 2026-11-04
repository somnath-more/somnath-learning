import java.util.Optional;
import java.util.Set;
import java.util.HashSet;
import java.util.Map;
import java.util.List;
import java.util.ArrayList;  
import java.util.*;     
import java.util.function.Function;
import java.util.stream.Collectors;




public class Main {
    public static void main(String[] args) {
        String s1="Java";
        String s2="Java";
        String s3=new String("Java");

        // System.out.println(s1==s2); // true
        // System.out.println(s1.equals(s2)); // true

        // System.out.println(s1==s3);
        // System.out.println(s1.equals(s3)); // true
        Set<List<Integer>> st=new HashSet<>();
        st.add(List.of(1,2,3));
        st.add(List.of(1,2,3));
        st.add(List.of(1,2,3));
        // System.out.println(st.size());

        // 
        List<String> list=new ArrayList<>();
        list.add("apple");
        list.add("banana");
        list.add("banana");
        list.add("kel");

        Map<String, Long> map=list.stream().sorted().collect(Collectors.groupingBy(Function.identity(),Collectors.counting()));

        // System.out.println(map);
        // List<Integer> numbers = List.of(4, 9, 2, 9, 7, 4, 5);
        // Optional<Integer> thirdLargest =  numbers.stream().distinct().sorted(Comparator.reverseOrder()).skip(1).findFirst();
        // thirdLargest.ifPresent(value -> System.out.println("Third largest: " + value));

    //     List<String> words = List.of("apple", "banana", "apricot", "blueberry", "avocado");
    //    Map<Character, List<String>>  filteredWords = words.stream()
    //             .collect(Collectors.groupingBy(word -> word.charAt(0)));
    //     filteredWords.forEach((key, value) -> System.out.println(key + ": " + value));

    List<Integer> numbers = List.of(1, 2, 3, 4, 5, 6, 7, 8);
    int evenNumbersSquareSum = numbers.stream()
            .filter(num -> num % 2 == 0).map(num -> num * num)
            .mapToInt(n->n).sum();
    // System.out.println(evenNumbersSquareSum);

    List<String> words = List.of("Java", "stream", "API", "code");
    Map<Integer, Long> wordCounts = words.stream().collect(Collectors.groupingBy(String::length,Collectors.counting()));
    // System.out.println(wordCounts);

    // Create list of 2 integers
        List<Integer> list11 = List.of(1, 2, 3, 4);
        List<Integer> list22 = List.of(5, 6, 7, 8,1);
        list11.stream().filter(list22::contains).forEach(System.out::println);  



    
    }
}
