import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
public class SortEmployeesBySalary {
    public static void main(String[] args) {
        // List<Employee> employees=new ArrayList<>();
        // employees.add(new Employee(1,"sachin",100000));
        // employees.add(new Employee(2,"rahul",90000));
        // employees.add(new Employee(3, "virat", 80000));
        // employees.add(new Employee(4,"rohit",110000));

        List<Employee> employees=Arrays.asList(
            new Employee(1, "sachin", 100000,"Master"),
            new Employee(2, "rahul", 90000,"Bowler"),
            new Employee(3, "virat", 80000,"Bat"),
            new Employee(4, "rohit", 110000,"Bat")
        );

        //  List<Employee> sortedEmployees =employees.stream().sorted((a,b)->a.salary-b.salary).toList();
         List<Employee> sortedEmployees =employees.stream().sorted(Comparator.comparing(Employee::getSalary)).toList();
         System.out.println(sortedEmployees);
             List<Employee> sortedEmployeesReverOrder =employees.stream().sorted(Comparator.comparing(Employee::getSalary).reversed()).toList();
         System.out.println(sortedEmployeesReverOrder.size());
         System.out.println(sortedEmployeesReverOrder);
        //  GROUP EMPLOYESS BY DEPARTMENT,AVARAGE TO THEIR SALALRY
        Map<String,Double> mp1=employees.stream().collect(Collectors.groupingBy(Employee::getDepartment,Collectors.averagingDouble(Employee::getSalary)));
        System.out.println(mp1);



         


    }
}
