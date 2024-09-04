public class Filter{
    public static void main(String[] args){
         ArrayList<String> list = new ArrayList<String>();
         list.add("Apple");
         list.add("Banana");
         list.add("Cherry");
         list.add("Mango");

         list.add("Mushrooms");
          

        list.forEach((l) -> System.out.println(l));

         System.out.println("Filtered List Starts With M:");
        List<String> filteredList= list.stream().filter(l->l.startsWith("M")).collect(Collectors.toList());
        filteredList.forEach( l -> System.out.println("Filtered : " + l));
         
    }
} 