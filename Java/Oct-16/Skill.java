import java.util.*;
import java.util.stream.Collectors;
public class Skill{

    public static void main(String[] args){
        List<List<String>> list = Arrays.asList(
            Arrays.asList("Java", "Python"),
            Arrays.asList("JavaScript", "C++"),
            Arrays.asList("Go", "Rust")
        );

        List<String> result = list.stream().flatMap(listItem-> listItem.stream()).collect(Collectors.toList());
    
        System.out.println(result); // Output will be a flat list of all skills: ["Java", "Python", "JavaScript", "C++", "Go", "Rust"]
        System.out.println( result.stream().filter(x-> x.startsWith("S")).collect(Collectors.toList()));
        
    }
}