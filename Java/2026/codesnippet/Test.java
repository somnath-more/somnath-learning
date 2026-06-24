
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class Test{
    public static void main(String[] args) {
        // System.out.println("Hello");
        // List<Integer> list=Arrays.asList(1,3,4);
        // List<Integer> list=List.of(1,2,3); 

        // try {
        //     list.add(2);
        // } catch (Exception e) {
        //     System.out.println("Execption while adding");
        // }
        // try {
        //     list.set(1, 2);
        // } catch (Exception e) {
        //     System.out.println("Execption while setting");
        // }

        List<Colleague> employees=new ArrayList<>();
        employees.add(new Colleague("somnath", 100, 20, "HR"));
        employees.add(new Colleague("Priya", 1234, 28, "Test"));
        Map<Boolean,List<Colleague>> res= employees.stream().collect(Collectors.partitioningBy(col ->col.getSalary()>100));
       res.forEach((key, list) -> {
    System.out.println(key);
    list.forEach(emp -> System.out.println(emp.getName()));
});

       

    }
}