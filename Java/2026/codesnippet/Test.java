
import java.util.Arrays;
import java.util.List;

public class Test{
    public static void main(String[] args) {
        System.out.println("Hello");
        // List<Integer> list=Arrays.asList(1,3,4);
        List<Integer> list=List.of(1,2,3); 

        try {
            list.add(2);
        } catch (Exception e) {
            System.out.println("Execption while adding");
        }
        try {
            list.set(1, 2);
        } catch (Exception e) {
            System.out.println("Execption while setting");
        }

    }
}