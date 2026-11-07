import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;
import java.util.function.Function;
import java.util.stream.Collectors;
import java.util.stream.IntStream;
import java.util.stream.Stream;

public class Main {

    private enum SalaryCategory {
        LOW, MEDIUM, HIGH
    }

    private enum CharacterCategory {
        UPPERCASE, LOWERCASE, DIGIT, OTHER
    }

    private static class Employee {
        private final String name;
        private final String department;
        private final int age;
        private final double salary;

        private Employee(String name, String department, int age, double salary) {
            this.name = name;
            this.department = department;
            this.age = age;
            this.salary = salary;
        }

        private String getName() {
            return name;
        }

        private String getDepartment() {
            return department;
        }

        private int getAge() {
            return age;
        }

        private double getSalary() {
            return salary;
        }
    }

    private static class Transaction {
        private final String day;
        private final String employeeName;
        private final double amount;

        private Transaction(String day, String employeeName, double amount) {
            this.day = day;
            this.employeeName = employeeName;
            this.amount = amount;
        }

        private String getDay() {
            return day;
        }

        private String getEmployeeName() {
            return employeeName;
        }

        private double getAmount() {
            return amount;
        }
    }

    public static void main(String[] args) {
        List<Employee> employees = Arrays.asList(
                new Employee("John", "IT", 30, 50000),
                new Employee("Alice", "HR", 28, 60000),
                new Employee("Bob", "IT", 35, 55000),
                new Employee("Eve", "Finance", 32, 70000),
                new Employee("Charlie", "HR", 29, 65000));

        // Section 1: Basic stream operations
        System.out.println("1. Create streams:");
        Stream.of(1, 2, 3, 4, 5).forEach(System.out::println);
        int[] values = { 1, 2, 3, 4, 5 };
        Arrays.stream(values).forEach(System.out::println);

        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 1, -9);

        System.out.println("2. Even numbers:");
        numbers.stream().filter(number -> number % 2 == 0).forEach(System.out::println);

        System.out.println("3. Squares:");
        List<Integer> squares = numbers.stream()
                .map(number -> number * number)
                .collect(Collectors.toList());
        System.out.println(squares);

        System.out.println("4. Squares of even numbers:");
        List<Integer> evenSquares = numbers.stream()
                .filter(number -> number % 2 == 0)
                .map(number -> number * number)
                .collect(Collectors.toList());
        System.out.println(evenSquares);

        System.out.println("5. First number greater than 10:");
        numbers.stream().filter(number -> number > 10).findFirst()
                .ifPresentOrElse(System.out::println, () -> System.out.println("No match"));

        System.out.println("6. Count of numbers greater than 5:");
        long countGreaterThanFive = numbers.stream().filter(number -> number > 5).count();
        System.out.println(countGreaterThanFive);

        System.out.println("7. Sum and product:");
        int sum = numbers.stream().mapToInt(Integer::intValue).sum();
        int product = Arrays.asList(1, 2, 3).stream().reduce(1, (left, right) -> left * right);
        System.out.println("Sum: " + sum + ", product of [1, 2, 3]: " + product);

        System.out.println("8. Sum of even numbers:");
        int evenSum = numbers.stream()
                .filter(number -> number % 2 == 0)
                .mapToInt(Integer::intValue)
                .sum();
        System.out.println(evenSum);

        System.out.println("9. Maximum number:");
        numbers.stream().max(Comparator.naturalOrder())
                .ifPresentOrElse(System.out::println, () -> System.out.println("No numbers"));

        System.out.println("10. Sum of squares of even numbers:");
        int sumOfEvenSquares = numbers.stream()
                .filter(number -> number % 2 == 0)
                .mapToInt(number -> number * number)
                .sum();
        System.out.println(sumOfEvenSquares);

        // Section 2: Easy
        System.out.println("11. Distinct numbers:");
        System.out.println(numbers.stream().distinct().collect(Collectors.toList()));

        System.out.println("12. Average of numbers:");
        double average = numbers.stream().mapToInt(Integer::intValue).average().orElse(0.0);
        System.out.println(average);

        System.out.println("13. Ascending and descending order:");
        System.out.println("Ascending: " + numbers.stream().sorted().collect(Collectors.toList()));
        System.out.println("Descending: "
                + numbers.stream().sorted(Comparator.reverseOrder()).collect(Collectors.toList()));

        List<String> names = Arrays.asList("Somnath", "Arjun", "Hanuman", "Ram", "John", "Doe", "Aron");
        System.out.println("14. Strings starting with A:");
        long namesStartingWithA = names.stream().filter(name -> name.startsWith("A")).count();
        System.out.println(namesStartingWithA);

        System.out.println("15. Join strings:");
        System.out.println(names.stream().collect(Collectors.joining(", ")));

        System.out.println("16. Are all numbers positive?");
        System.out.println(numbers.stream().allMatch(number -> number > 0));

        System.out.println("17. Is any number divisible by 3?");
        System.out.println(numbers.stream().anyMatch(number -> number % 3 == 0));

        System.out.println("18. Flatten a list of lists:");
        List<List<Integer>> nestedNumbers = Arrays.asList(
                Arrays.asList(1, 2, 3, 4),
                Arrays.asList(5, 6, 7, 8),
                Arrays.asList(9, 10, 11, 12));
        List<Integer> flattenedNumbers = nestedNumbers.stream()
                .flatMap(List::stream)
                .collect(Collectors.toList());
        System.out.println(flattenedNumbers);

        System.out.println("19. First non-empty string:");
        Arrays.asList("", "  ", "Java", "Streams").stream()
                .filter(value -> !value.trim().isEmpty())
                .findFirst()
                .ifPresentOrElse(System.out::println, () -> System.out.println("No non-empty string"));

        System.out.println("20. Second-highest distinct number:");
        numbers.stream()
                .distinct()
                .sorted(Comparator.reverseOrder())
                .skip(1)
                .findFirst()
                .ifPresentOrElse(System.out::println, () -> System.out.println("No second-highest number"));

        // Section 3: Intermediate A
        System.out.println("21. Employees sorted by salary:");
        employees.stream()
                .sorted(Comparator.comparingDouble(Employee::getSalary))
                .forEach(employee -> System.out.println(employee.getName() + " - " + employee.getSalary()));

        System.out.println("22. Average employee age:");
        double averageAge = employees.stream().mapToInt(Employee::getAge).average().orElse(0.0);
        System.out.println(averageAge);

        System.out.println("23. Partition numbers into even and odd:");
        Map<Boolean, List<Integer>> evenAndOdd = numbers.stream()
                .collect(Collectors.partitioningBy(number -> number % 2 == 0));
        System.out.println("Even: " + evenAndOdd.get(true));
        System.out.println("Odd: " + evenAndOdd.get(false));

        System.out.println("24. Group words by length:");
        Map<Integer, List<String>> wordsByLength = names.stream()
                .collect(Collectors.groupingBy(String::length));
        System.out.println(wordsByLength);

        System.out.println("25. Count occurrences of each number:");
        Map<Integer, Long> numberCounts = numbers.stream()
                .collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));
        System.out.println(numberCounts);

        System.out.println("26. Average salary by department:");
        Map<String, Double> averageSalaryByDepartment = employees.stream()
                .collect(Collectors.groupingBy(
                        Employee::getDepartment,
                        Collectors.averagingDouble(Employee::getSalary)));
        System.out.println(averageSalaryByDepartment);

        // Section 4: Intermediate B
        System.out.println("27. Highest-paid employee in each department:");
        Map<String, Optional<Employee>> highestPaidByDepartment = employees.stream()
                .collect(Collectors.groupingBy(
                        Employee::getDepartment,
                        Collectors.maxBy(Comparator.comparingDouble(Employee::getSalary))));
        highestPaidByDepartment.forEach((department, employee) -> employee.ifPresent(value ->
                System.out.println(department + ": " + value.getName() + " - " + value.getSalary())));

        System.out.println("28. Departments with more than 2 employees:");
        Map<String, Long> employeeCountByDepartment = employees.stream()
                .collect(Collectors.groupingBy(Employee::getDepartment, Collectors.counting()));
        employeeCountByDepartment.entrySet().stream()
                .filter(entry -> entry.getValue() > 2)
                .forEach(entry -> System.out.println(entry.getKey() + ": " + entry.getValue()));

        System.out.println("29. Department with the highest average salary:");
        averageSalaryByDepartment.entrySet().stream()
                .max(Map.Entry.comparingByValue())
                .ifPresentOrElse(
                        entry -> System.out.println(entry.getKey() + ": " + entry.getValue()),
                        () -> System.out.println("No departments"));

        System.out.println("30. Most frequent character(s):");
        String text = "Dhurandar";
        Map<Character, Long> mostFrequentCharacters = text.chars()
                .mapToObj(character -> (char) character)
                .collect(Collectors.collectingAndThen(
                        Collectors.groupingBy(Function.identity(), Collectors.counting()),
                        frequencies -> {
                            if (frequencies.isEmpty()) {
                                return frequencies;
                            }
                            long highestCount = Collections.max(frequencies.values());
                            frequencies.entrySet().removeIf(entry -> entry.getValue() != highestCount);
                            return frequencies;
                        }));
        System.out.println(mostFrequentCharacters);

        System.out.println("31. First non-repeating character:");
        String input = "swiss";
        input.chars()
                .mapToObj(character -> (char) character)
                .filter(character -> input.indexOf(character) == input.lastIndexOf(character))
                .findFirst()
                .ifPresentOrElse(
                        System.out::println,
                        () -> System.out.println("No non-repeating character"));

        // Section 5: Hard, Part 1
        System.out.println("32. Most common first letter in employee names:");
        employees.stream()
                .collect(Collectors.groupingBy(
                        employee -> Character.toLowerCase(employee.getName().charAt(0)),
                        Collectors.counting()))
                .entrySet().stream()
                .max(Map.Entry.comparingByValue())
                .ifPresentOrElse(
                        entry -> System.out.println(entry.getKey() + ": " + entry.getValue()),
                        () -> System.out.println("No employee names"));

        System.out.println("33. Average of each 3-number sliding window:");
        List<Integer> windowNumbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9);
        List<Double> slidingWindowAverages = IntStream.range(0, Math.max(0, windowNumbers.size() - 2))
                .mapToDouble(index -> (windowNumbers.get(index)
                        + windowNumbers.get(index + 1)
                        + windowNumbers.get(index + 2)) / 3.0)
                .boxed()
                .collect(Collectors.toList());
        System.out.println(slidingWindowAverages);

        System.out.println("34. Longest word, ignoring case and punctuation:");
        String sentence = "Hello, world! This is a sample sentence.";
        Arrays.stream(sentence.toLowerCase().split("[^\\p{L}\\p{N}]+"))
                .filter(word -> !word.isEmpty())
                .max(Comparator.comparingInt(String::length))
                .ifPresentOrElse(System.out::println, () -> System.out.println("No words"));

        System.out.println("35. Top 3 most frequent words:");
        String paragraph = "This is a sample paragraph. This paragraph is just a sample.";
        Arrays.stream(paragraph.toLowerCase().split("\\W+"))
                .filter(word -> !word.isEmpty())
                .collect(Collectors.groupingBy(Function.identity(), Collectors.counting()))
                .entrySet().stream()
                .sorted(Map.Entry.<String, Long>comparingByValue()
                        .reversed()
                        .thenComparing(Map.Entry.comparingByKey()))
                .limit(3)
                .forEach(entry -> System.out.println(entry.getKey() + ": " + entry.getValue()));

        System.out.println("36. Reverse each word:");
        String reversedWords = Arrays.stream(paragraph.split("\\s+"))
                .map(word -> new StringBuilder(word).reverse().toString())
                .collect(Collectors.joining(" "));
        System.out.println(reversedWords);

        // Section 6: Hard, Part 2
        System.out.println("37. Highest-spend day and employees involved:");
        List<Transaction> transactions = Arrays.asList(
                new Transaction("Monday", "John", 100.0),
                new Transaction("Monday", "Alice", 200.0),
                new Transaction("Tuesday", "Bob", 150.0),
                new Transaction("Tuesday", "Eve", 300.0),
                new Transaction("Wednesday", "Charlie", 250.0));
        Map<String, Double> totalSpendByDay = transactions.stream()
                .collect(Collectors.groupingBy(
                        Transaction::getDay,
                        Collectors.summingDouble(Transaction::getAmount)));
        totalSpendByDay.entrySet().stream()
                .max(Map.Entry.comparingByValue())
                .ifPresentOrElse(highestSpend -> {
                    List<String> employeesOnHighestSpendDay = transactions.stream()
                            .filter(transaction -> transaction.getDay().equals(highestSpend.getKey()))
                            .map(Transaction::getEmployeeName)
                            .distinct()
                            .collect(Collectors.toList());
                    System.out.println("Day: " + highestSpend.getKey()
                            + ", total: " + highestSpend.getValue()
                            + ", employees: " + employeesOnHighestSpendDay);
                }, () -> System.out.println("No transactions"));

        System.out.println("38. Categorize employees by salary:");
        Map<SalaryCategory, List<Employee>> employeesBySalaryCategory = employees.stream()
                .collect(Collectors.groupingBy(employee -> getSalaryCategory(employee.getSalary())));
        employeesBySalaryCategory.forEach((category, employeesInCategory) ->
                System.out.println(category + ": " + employeesInCategory.stream()
                        .map(Employee::getName)
                        .collect(Collectors.joining(", "))));

        System.out.println("39. Group characters by type:");
        String characters = "Hello World! 123";
        Map<CharacterCategory, List<Character>> charactersByType = characters.chars()
                .mapToObj(character -> (char) character)
                .collect(Collectors.groupingBy(Main::getCharacterCategory));
        System.out.println(charactersByType);

        System.out.println("40. Employees who worked in 3 or more departments:");
        List<Employee> departmentAssignments = Arrays.asList(
                new Employee("John", "IT", 30, 50000),
                new Employee("John", "Finance", 30, 50000),
                new Employee("John", "HR", 30, 50000),
                new Employee("Alice", "IT", 28, 60000),
                new Employee("Alice", "Finance", 28, 60000),
                new Employee("Alice", "HR", 28, 60000),
                new Employee("Bob", "IT", 35, 55000));
        Map<String, Set<String>> departmentsByEmployee = departmentAssignments.stream()
                .collect(Collectors.groupingBy(
                        Employee::getName,
                        Collectors.mapping(Employee::getDepartment, Collectors.toSet())));
        departmentsByEmployee.entrySet().stream()
                .filter(entry -> entry.getValue().size() >= 3)
                .forEach(entry -> System.out.println(entry.getKey() + ": " + entry.getValue()));

        System.out.println("41. Consecutive-word (bigram) frequencies:");
        String[] words = paragraph.toLowerCase().split("\\W+");
        Map<String, Long> bigramFrequencies = IntStream.range(0, Math.max(0, words.length - 1))
                .mapToObj(index -> words[index] + " " + words[index + 1])
                .collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));
        System.out.println(bigramFrequencies);
    }

    private static SalaryCategory getSalaryCategory(double salary) {
        if (salary < 50000) {
            return SalaryCategory.LOW;
        }
        if (salary < 70000) {
            return SalaryCategory.MEDIUM;
        }
        return SalaryCategory.HIGH;
    }

    private static CharacterCategory getCharacterCategory(char character) {
        if (Character.isUpperCase(character)) {
            return CharacterCategory.UPPERCASE;
        }
        if (Character.isLowerCase(character)) {
            return CharacterCategory.LOWERCASE;
        }
        if (Character.isDigit(character)) {
            return CharacterCategory.DIGIT;
        }
        return CharacterCategory.OTHER;
    }
}
