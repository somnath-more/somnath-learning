
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

public class GroupListWordByLength {
    public static void main(String[] args) {
        List<String> list=Arrays.asList("car","Ball","cricket","Soul","Ball");

       Map<Integer,List<String>> mp= list.stream().collect(Collectors.groupingBy(String::length)); 
         System.out.println(mp);

        //  Count Occurence of each String
        Map<String,Long> mp1= list.stream().collect(Collectors.groupingBy(s->s,Collectors.counting()));
        Map<String,Long> mp2= list.stream().collect(Collectors.groupingBy(Function.identity(),Collectors.counting()));

       
        System.out.println(mp1);
        System.out.println(mp2);
    }



        
    
}
