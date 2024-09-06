import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class ExampleOne {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<>();
        list.add("Management");
        list.add("Commerce");
        list.add("Science");
        list.add("Seda");

        // Stream operation: Replace 'e' with 'g', concatenate 'Hello', convert to uppercase, then filter strings starting with 'S'
        List<String> list1 = list.stream()
                .map(e -> e.replace("e", "g").concat("Hello").toUpperCase())
                .filter(l -> l.startsWith("S"))
                .collect(Collectors.toList());
        System.out.println(list1); // Output will show filtered strings starting with 'S'

        // Lambda expression for the functional interface
        MyInter my = () -> System.out.println("Hello, I am using a Lambda expression in a functional interface");
        my.sayHello(); // Call the method using lambda expression

        // Lambda expression for sum interface
        SumInter si = (a, b) -> a + b; // Simplified return statement in lambda
        int result = si.sum(4, 6); // Call the sum method with 4 and 6
        System.out.println("Sum: " + result); // Print the result

    }
}

// Functional interface
interface MyInter {
    void sayHello();
}

interface SumInter{
    public abstract int sum(int a,int b);
}