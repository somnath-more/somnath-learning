public class ReverseString {
    public static void main(String[] args) {
         StringBuilder input = new StringBuilder();
         input.append("Hello, World!");
 
         String reversed =input.reverse().toString();
      
         System.out.println("Reversed String: " + reversed);

    }
}
