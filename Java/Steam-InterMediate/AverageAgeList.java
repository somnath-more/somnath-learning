
import java.util.Arrays;
import java.util.List;
import java.util.OptionalDouble;



public class AverageAgeList {
   public static void main(String[] args) {
          List<Person> personList=Arrays.asList(
        new Person(1,"Abhi", 53),
        new Person(2,"Babli", 43),
        new Person(3,"Cabli", 33)

    );

   OptionalDouble average= personList.stream().mapToInt(Person::getAge).average();

   System.out.println(average);
    
   }

}
