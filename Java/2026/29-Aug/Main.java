
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.stream.Collectors;

public class Main {
    public static    void main(String[] args) {
        // System.out.println("Hello, World!");
        // Filter Even List
        List<Integer> numbers = List.of(1, 2, 3, 4, 5, 6);
        // numbers.stream().filter(n -> n % 2 == 0).forEach(System.out::println);

        // 2 :Find the ma      x   im  um  number from a list of integers.
        // List1 = Arrays.asList("a p ple", "bana").filter(data-> d ata. s tartsWith("a")).forEach(System.out::println);
        // System.out.println(firstNonRepeatingChar.orElse(null));

    //   convert list 
    List<String> names = Arrays.asList("java", "stream", "api");
    List<String> upperCaseNames = names.stream()
                .map(String::toUpperCase)
                .collect(Collectors.toList());
        // System.out.println(upperCaseNames);
        // 7:
    // int sum=numbers11.stream().mapToInt(Integer::intValue).sum();
    // System.out.println(sum);
    // 8:
    //  Check if any string in a list contains  "apple"
    //  List<String> fruits = Arrays.asList("banana", "orange", "apple", "grape");
    //  boolean containsApple = fruits.stream().anyMatch(predicate -> predicate.contains("apple"));
    //  System.out.println(containsApple);

    //  MAKE IN UPPERCASE
        //  List<String> fruits12 = Arrays.asList("banana", "orange", "apple", "grape");
    //   fruits12.stream().map(String::toUpperCase).forEach(System.out::println);
      // 17
      List<String> words = Arrays.asList("Java", null, "Stream", null, "API");
     List<String> filterNullValues= words.stream().filter(Objects::nonNull).collect(Collectors.toList());
    //  System.out.println(filterNullValues);
    //  18. Calculate Average of Numbers
      List<Integer> numbersSum = Arrays.asList(1, 2, 3, 4, 5);
     double average= numbersSum.stream().mapToInt(Integer::intValue).average().orElse(0.0);
    //  System.out.println("Average : "+average);
    //  19. Collect Map from List
      List<String> wordsList1 = Arrays.asList("Java", "Stream", "API");
Map<String, Integer> wordLengthMap  = wordsList1.stream().collect(Collectors.toMap(word->word, String::length));
    //  System.out.println("wordLengthMap : "+wordLengthMap);
    //  20. Partition Numbers into Even and Odd
      Map<Boolean, List<Integer>>  res12 = Arrays.asList(1, 2, 3, 4, 5).stream().collect(Collectors.partitioningBy(n->n%2==0));
    //  System.out.println("res : "+res12);
    //  print even and odd numbers
     List<Integer> evenNumbers = res12.get(true);
     List<Integer> oddNumbers = res12.get(false);
     System.out.println("Even Numbers : "+evenNumbers);
     System.out.println("Odd Numbers : "+oddNumbers);
     












    }
}
