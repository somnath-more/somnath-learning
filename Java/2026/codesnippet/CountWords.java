
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;
// Words counting using Java Streams
public class CountWords{
    public static Map<String,Long> countWords(String str){
        List<String> words = Arrays.asList(str.split("\\W+"));
         return words.stream()
                .collect(
                    Collectors.groupingBy(Function.identity(), Collectors.counting())
                );
    }

    public static void main(String[] args){
        String str = "Hello, this is a sample words of string to count the number of words.";
        Map<String,Long>  wordCount = countWords(str);
        wordCount.forEach((word, count) -> System.out.println(word + ": " + count));
    }
}