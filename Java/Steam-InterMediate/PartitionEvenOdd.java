
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class PartitionEvenOdd {
    public static void main(String[] args) {
        List<Integer> list=new ArrayList<>();
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);
        list.add(5);
      Map<Boolean,List<Integer>> partitionedMap= list.stream().collect(Collectors.partitioningBy((l)->l%2==0));

      System.out.println("Even Numbers :"+partitionedMap.get(true));
      System.out.println("Odd Numbers :"+partitionedMap.get(false));

        
    }
}
