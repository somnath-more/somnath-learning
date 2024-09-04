import java.util.*;

public class ExceptionPoc {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter the value of a and b: ");
        int a=scanner.nextInt();
        int b=scanner.nextInt();
        System.out.println(a+" "+b);
        try {
            int result = a / b;
           
            if(result <=0){
                throw new Exception("Result is less than or equal to zero");
            }else{
                System.out.println("Result: "+result);  
            }
        }catch(ArithmeticException e) {
            System.out.println("Error: Division by zero");
            System.out.println(e.getStackTrace());

        }
         catch (Exception e) {
            // TODO: handle exception
            System.out.println("Error: Common Error detected");
            System.out.println(e.getMessage());
        }
    }
}
