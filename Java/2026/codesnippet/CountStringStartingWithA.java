
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class CountStringStartingWithA {
    public static void main(String[] args) {
        List<String> strings = Arrays.asList("Apple", "Banana", "Avocado", "Cherry", "Apricot");
        long count = strings.stream()
                            .filter(s -> s.startsWith("A"))
                            .count();
        System.out.println("Number of strings starting with 'A': " + count);
   // 2nd way using collection
        long count2 = strings.stream()
                             .filter(s -> s.startsWith("A"))
                             .collect(Collectors.counting());
        System.out.println("Number of strings starting with 'A' (using collect): " + count2);
    }
}