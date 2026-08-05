
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

class ToMap{
    public static void main(String[] args) {
        List<String> list = new ArrayList<>();
        list.add("Java");
        list.add("Python");
        list.add("C++");    

        Map<String, Integer> map = list.stream()
                .collect(Collectors.toMap(Function.identity(), String::length));
        System.out.println(map);
    }
}