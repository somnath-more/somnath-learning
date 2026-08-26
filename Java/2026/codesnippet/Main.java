import java.util.Set;
import java.util.HashSet;
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

        System.out.println(s1==s2); // true
        System.out.println(s1.equals(s2)); // true

        System.out.println(s1==s3);
        System.out.println(s1.equals(s3)); // true
        Set<List<Integer>> st=new HashSet<>();
        st.add(List.of(1,2,3));
        st.add(List.of(1,2,3));
        st.add(List.of(1,2,3));
        System.out.println(st.size());

        // 
        List<String> list=new ArrayList<>();
        list.add("apple");
        list.add("banana");
        list.add("banana");
        list.add("kel");

        Map<String, Long> map=list.stream().sorted().collect(Collectors.groupingBy(Function.identity(),Collectors.counting()));

        System.out.println(map);

    }
}
