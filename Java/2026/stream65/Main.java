
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

class Student {
    String name;
    int score;

    Student(String name, int score) {
        this.name = name;
        this.score = score;
    }
}

public class Main {

    public static void main(String[] args) {

        // List<String> list = Arrays.asList("ADC", "BD", "EEC", "MODaD");
        // .collect(Collectors.groupingBy(String::length, Collectors.counting()));
        // map.forEach((key, value) -> System.out.println(key + ": " + value));
        // Map<Integer, List<String>> map = list.stream()
        // .collect(Collectors.groupingBy(String::length));

        // map.forEach((length, items) ->
        // System.out.println("Length " + length + " (Count: " + items.size() + "): " +
        // items)
        // );
        // 21. Find Nth Largest Element in a List
        // Question: Find the 3rd largest element in a list.

        // List<Integer> numbers = Arrays.asList(10, 20, 50, 40, 30);
        // numbers.stream().sorted(Comparator.reverseOrder()).skip(2).findFirst().ifPresent(System.out::println);
        // 22. Find All Palindromic Strings
        // Question: Find all strings that are palindromes in a list.

        // List<String> words = Arrays.asList("radar", "level", "world", "java");
        // words.stream().filter(word-> word.equals(new
        // StringBuilder(word).reverse().toString()))
        // .forEach(System.out::println);
        // 23. Reverse Each String in a List
        // Question: Reverse each string in a list.

        // List<String> words = Arrays.asList("Java", "Stream", "API");
        // words.stream().map(word -> new StringBuilder(word).reverse().toString())
        // .forEach(System.out::println);

        // 24. Filter and Convert Map to List
        // Question: Given a map, filter entries with values greater than 10 and collect
        // keys into a list.

        // Map<String, Integer> map = Map.of("A", 5, "B", 15, "C", 10, "D", 20);
        // map.entrySet().stream()
        // .filter(entry -> entry.getValue() > 10)
        // .map(Map.Entry::getKey)
        // .forEach(System.out::println);
        // 25. Remove Duplicates Without Collectors
        // Question: Remove duplicates from a list using distinct().

        // List<Integer> numbers = Arrays.asList(1, 2, 3, 2, 4, 3, 5);
        // numbers.stream().distinct().forEach(System.out::println);

        // How to find duplicates strings in a list using streams?
        // List<String> words = Arrays.asList("Java", "Stream", "API", "Java");
        // words.stream().filter(word -> Collections.frequency(words, word) >
        // 1).distinct().forEach(System.out::println);
        // Another Approach
        // words.stream().collect(Collectors.groupingBy(word -> word,
        // Collectors.counting()))
        // .entrySet().stream()
        // .filter(entry -> entry.getValue() > 1)
        // .map(Map.Entry::getKey)
        // .forEach(System.out::println);
        // 26. Find the Most Frequent Character in a String
        // Question: Find the most frequent character in a string.

        // String input = "success";
        // char mostFrequent= input.chars().mapToObj(ele->
        // (char)ele).collect(Collectors.groupingBy(c->c,Collectors.counting())).entrySet().stream().max(Map.Entry.comparingByValue()).map(Map.Entry::getKey).orElseThrow();

        // System.out.println("Most Frequent -> "+mostFrequent);

        // 27. Find Common Elements Between Two Lists
        // Question: Find common elements between two lists.

        // List<Integer> list1 = Arrays.asList(1, 2, 3, 4, 5);
        // List<Integer> list2 = Arrays.asList(3, 4, 5, 6, 7);
        // List<Integer>
        // resultList=list1.stream().filter(list2::contains).collect(Collectors.toList());
        // System.out.println("Result List : "+resultList);
        // 28. Find the Sum of Squares of Even Numbers
        // Question: Calculate the sum of squares of all even numbers in a list.

        // List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6);
        // long sumOfSquares = numbers.stream()
        // .filter(n -> n % 2 == 0)
        // .mapToLong(n->n*n).sum();

        // System.out.println("Sum Of Squares -> " + sumOfSquares);
        // 29. Partition Strings by Palindrome
        // Question: Partition strings into palindromes and non-palindromes.

        // List<String> words = Arrays.asList("radar", "level", "java", "stream");
        // Map<Boolean,List<String>> map=
        // words.stream().collect(Collectors.partitioningBy(ele -> ele.equals(new
        // StringBuilder(ele).reverse().toString())));

        // System.out.println("Not a Palindrome : "+map.get(false));
        // System.out.println("Palindrome : "+ map.get(true));

        // 30. Skip and Limit Elements
        // Question: Skip the first 3 elements and limit the result to the next 2.

        // List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9);
        // List<Integer>
        // result=numbers.stream().skip(3).limit(2).collect(Collectors.toList());
        // System.out.println("Result : -> "+result);
        // 31. Find the Longest Word from a Sentence
        // Question: Find the longest word in a sentence using Streams.

        // String sentence = "Java Stream API is very powerful";
        // String longestWord = java.util.Arrays.stream(sentence.split("\\s+"))
        // .max(Comparator.comparingInt(String::length))
        // .orElse("");

        // System.out.println("Longest word: " + longestWord);

        // 32. Compute Cartesian Product of Two Lists
        // Question: Compute the Cartesian product of two lists of integers.

        // List<Integer> list1 = Arrays.asList(1, 2, 3);
        // List<Integer> list2 = Arrays.asList(4, 5);
        // List<String>
        // list=list1.stream().flatMap(i->list2.stream().map(j->"("+i+","+j+")")).collect(Collectors.toList());
        // System.out.println("List : "+list);

        // 33. Find Top N Highest Scoring Students
        // Question: From a list of students, find the top 3 by score.

        List<Student> students = Arrays.asList(
                new Student("Alice", 85),
                new Student("Bob", 92),
                new Student("Charlie", 88),
                new Student("Dave", 78),
                new Student("Eve", 91));

        List<String> topStudents = students.stream().sorted(Comparator.comparingInt((Student s) -> s.score).reversed())
                .limit(3).map(s -> s.name).collect(Collectors.toList());
        System.out.println("Top Students : " + topStudents);

        // 34. Group by First Character
        // Question: Group a list of strings by their first character.

        // List<String> words = Arrays.asList("apple", "banana", "avocado", "blueberry",
        // "cherry");
        // Map<Character, List<String>> groupedByFirstChar =
        // words.stream().collect(Collectors.groupingBy(c->c.charAt(0)));
        // System.out.println("GroupedByFirstChar : "+groupedByFirstChar);

        // 35. Custom Reduce to Concatenate Strings
        // Question: Concatenate strings in reverse order using reduce.

        // List<String> words = Arrays.asList("Stream", "API", "is", "awesome");
        // String reversedConcatenation = words.stream().reduce((w1,w2)->w2+"
        // "+w1).orElse("");
        // System.out.println(reversedConcatenation);

        // 36. Find Median of a List
        // Question: Find the median of a list of integers.

        // List<Integer> numbers = Arrays.asList(3, 1, 4, 2, 5);
        // List<Integer> sorted =
        // numbers.stream().sorted().collect(Collectors.toList());
        // int medianResult= sorted.size()%2==0?
        // (sorted.get(sorted.size()/2-1)+sorted.get(sorted.size()/2))/2 :
        // sorted.get(sorted.size()/2);
        // System.out.println("Median : "+medianResult);
        // 37. Collect Nested Map by Grouping
        // Question: Group employees by department and then by age.

        List<Employee> employees = Arrays.asList(
                new Employee("Alice", "HR", 25),
                new Employee("Bob", "IT", 30),
                new Employee("Charlie", "HR", 30),
                new Employee("Somanth", "HR", 30),

                new Employee("Dave", "IT", 25));
        employees.stream().collect(Collectors.groupingBy(e -> e.department, Collectors.groupingBy(e -> e.age)))
                .forEach((department, ageMap) -> {
                    System.out.println("Department: " + department);
                    ageMap.forEach((age, empList) -> {
                        System.out.println("  Age: " + age);
                        empList.forEach(emp -> System.out.println("    Employee: " + emp.name));
                    });
                });
    }

    public static class Employee {
        String name, department;
        int age;

        Employee(String name, String department, int age) {
            this.name = name;
            this.department = department;
            this.age = age;
        }
    }

}