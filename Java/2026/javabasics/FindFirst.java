
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;
public class FindFirst {
    public static void main(String[] args) {
        // List<Integer> numbers = Arrays.asList(10, 20, 30, 40, 50);
        // numbers.stream().filter(n -> n > 35).findFirst().ifPresent(n -> System.out.println("The first number greater than 25 is: " + n));   
        // String str = "Hello, World!";
        // char firstChar = str.charAt(0);
        // System.out.println("The first character is: " + firstChar);
        List<String> stringList=List.of("Somnath","More","bkjvjkvjk");
        // System.out.println(stringList);
       List<String> newString= stringList.stream().sorted(Comparator.comparing(String::length).reversed()).skip(1).limit(1).collect(Collectors.toList());
    //    System.out.println(newString);
       List<Integer> list1=Arrays.asList(1,2,3,4,5);
       List<Integer> list2=Arrays.asList(6,7,8,9,10);

       List<Integer> resultList=Stream.concat(list1.stream(),list2.stream()).collect(Collectors.toList());
    //    System.out.println(resultList);
       Stream<Integer> streamList=Stream.of(1,2,3,4);
    //    System.out.println(streamList);
    //    streamList.forEach(System.out::println);
 
    //    Iterate Stream Static Method
    Stream.iterate(1,n->n+2 ).limit(5).forEach(System.out::println);

    // add All methods
    List<Integer> list=new ArrayList<>();
    list.addAll(list1);
    list.addAll(list2);
   //  System.out.println(list);

   try{
      System.out.println("Try");
      // System.exit(20);

   }finally{
      System.out.println("Finally");
   }

    




    }
}