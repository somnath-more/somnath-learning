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


//                23. Reverse Each String in a List
// Question: Reverse each string in a list.
        // List<String> words = Arrays.asList("Java", "Stream", "API");
        //  List<String> reverseWords =  words.stream().map(w-> new StringBuilder(w).reverse().toString()).collect(Collectors.toList());
        // System.out.println(reverseWords);
//57

//         57. Combine Two Lists into a Map
// Question: Combine two lists into a map where one is keys and the other values.

// List<String> keys = Arrays.asList("A", "B", "C");
// List<Integer> values = Arrays.asList(1, 2, 3);
//         Map<String,Integer> result=IntStream.range(0,keys.size()).boxed().collect(Collectors.toMap(keys::get,values::get));
            

// 1. Filter Even Numbers from a List
// Question: Given a list of integers, filter the even numbers.

// List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6);
        
//      List<Integer> evenNumbers =numbers.stream().filter(num->num%2==0).collect(Collectors.toList());
//         System.out.println(evenNumbers);

// 31. Find the Longest Word from a Sentence
// Question: Find the longest word in a sentence using Streams.
        // String sentence = "Java Stream API is very powerful";
        // String longestWord=Arrays.stream(sentence.split(" ")).max(Comparator.comparingInt(String::length)).orElse(null);
        // System.out.println(longestWord);

// 34. Group by First Character
// Question: Group a list of strings by their first character.

// List<String> words = Arrays.asList("apple", "banana", "avocado", "blueberry", "cherry");
//     Map<Character,List<String>> groupedByFirstChar =words.stream().collect(Collectors.groupingBy(word->word.charAt(0)));
//         System.out.println(groupedByFirstChar );
// 2. Find Maximum in a List
// Question: Find the maximum number from a list of integers.
    // List<Integer> numbers = Arrays.asList(10, 20, 30, 40, 50);
    //  int maxNumber=numbers.stream().max(Integer::compare).orElseThrow();

    //     System.out.println(maxNumber );

//         61. Sort a List Based on Frequency of Elements
// Question: Sort a list based on the frequency of elements in descending order.

// List<Integer> numbers = Arrays.asList(4, 5, 6, 5, 4, 3);

    
//    List<Integer> resNum =      numbers.stream().sorted(Comparator.comparingInt(n->-Collections.frequency(numbers,n))).distinct().collect(Collectors.toList());

//         System.out.println(resNum );

// 28. Find the Sum of Squares of Even Numbers
// Question: Calculate the sum of squares of all even numbers in a list.

// List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6);
//        int sumOfSquares =
//            numbers.stream().
//            filter(n->n%2==0).
//            mapToInt(n -> n * n).sum();
//           System.out.println(sumOfSquares );
//         52. Flatten a Nested List
// Question: Flatten a list of lists into a single list.

// List<List<Integer>> nestedList = Arrays.asList(
//     Arrays.asList(1, 2, 3),
//     Arrays.asList(4, 5),
//     Arrays.asList(6, 7, 8, 9)
// );
//  List<Integer> flattenList=       nestedList.stream().flatMap(List::stream).collect(Collectors.toList());
//         System.out.println(flattenList);
//      9. Find Duplicate Elements in a List
// Question: Identify duplicate elements in a list.

// List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 2, 5, 1);  
//         Set<Integer> st=new HashSet();
//        List<Integer> duplicateNumbers =  numbers.stream().filter(n->st.add(n))
//             .collect(Collectors.toList());
//         System.out.println(duplicateNumbers);
        
        

    
    }
}
