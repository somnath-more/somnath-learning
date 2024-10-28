import java.util.ArrayList;
import java.util.Collections;

public class SortExample {
    public static void main(String[] args) {
        // ArrayList<Integer> marks = new ArrayList<>();
        // marks.add(12);
        // marks.add(34);
        // marks.add(54);
        // System.out.println(marks);
        // Collections.sort(marks);
        // System.out.println(marks);

        ArrayList<Emp> emps = new ArrayList<>();

        emps.add(new Emp("dachin", "912131413", 1));
        emps.add(new Emp("somnath", "90842309", 3));
        emps.add(new Emp("monya", "90842309", 4));
        System.out.println(emps);
        Collections.sort(emps);
        // comparrable
    }
}
