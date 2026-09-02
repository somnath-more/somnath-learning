
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.*;;

public class Main {
    public static void main(String[] args) {
        // System.out.println("Hello, World!");
        // Filter Even List
        List<Integer> numbers = List.of(1, 2, 3, 4, 5, 6);
        // numbers.stream().filter(n -> n % 2 == 0).forEach(System.out::println);

        // 2 :Find the maximum number from a list of integers.
        List<Integer> numbers11 = Arrays.asList(1,2,5,3,4,5);
        // numbers11.stream().max(Integer::compare).ifPresent(System.out::println);
        //3 
        // numbers11.stream().sorted(Comparator.reverseOrder()).forEach(System.out::println);
        //4 
        List<String> strList1 = Arrays.asList("apple", "banana", "cherry", "date","acid");
        // strList1.stream().filter(data->data.startsWith("a")).forEach(System.out::println);
        String input = "swiss";
        Optional<Character> firstNonRepeatingChar = input.chars()
                .mapToObj(c -> (char) c)
                .filter(c -> input.indexOf(c) == input.lastIndexOf(c))
                .findFirst();
        // System.out.println(firstNonRepeatingChar.orElse(null));

    //   convert list 
    List<String> names = Arrays.asList("java", "stream", "api");
    List<String> upperCaseNames = names.stream()
                .map(String::toUpperCase)
                .collect(Collectors.toList());
        // System.out.println(upperCaseNames);
        // 7:
    int sum=numbers11.stream().mapToInt(Integer::intValue).sum();
    // System.out.println(sum);
    // 8:
    //  Check if any string in a list contains  "apple"
     List<String> fruits = Arrays.asList("banana", "orange", "apple", "grape");
     boolean containsApple = fruits.stream().anyMatch(predicate -> predicate.contains("apple"));
     System.out.println(containsApple);

    //  MAKE IN UPPERCASE
         List<String> fruits12 = Arrays.asList("banana", "orange", "apple", "grape");
      fruits12.stream().map(String::toUpperCase).forEach(System.out::println);




    }
}
