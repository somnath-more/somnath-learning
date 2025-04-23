import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

class Day41 {
    public static void main(String[] args) {
        List<Integer> list = new ArrayList<>(Arrays.asList(1, 42, 4, 6, 7));

        List<Integer> evenList = list.stream()
                                     .filter(data -> data % 2 == 0)
                                     .collect(Collectors.toList());

        System.out.println(evenList); // Output: [42, 4, 6]
    }
}
