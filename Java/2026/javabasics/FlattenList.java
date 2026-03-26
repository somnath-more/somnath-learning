import java.util.List;

public class FlattenList{

    public static void main(String[] args) {
        List<List<Integer>> arr=List.of(List.of(1,2,3,4,5),List.of(1,2,3,4,5),List.of(1,2,3,4,5));




        List<Integer> arrayList=arr.stream().flatMap(List::stream).toList();
        for(Integer i:arrayList){
            System.out.print(i +" ");
        }
    }

}