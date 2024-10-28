import java.util.Scanner;
public class ReverseString{

    public String reverse(String s){
          StringBuilder sb=new StringBuilder(s);
          return sb.reverse().toString();
    }
    public static void main(String[] args) {
        // String s="somnath";
        Scanner scanner=new Scanner(System.in);
        System.out.println("Enter a string: ");
         String s=scanner.nextLine();
        ReverseString sb=new ReverseString();
        System.out.println("Reversed String: " + sb.reverse(s));
    }
}