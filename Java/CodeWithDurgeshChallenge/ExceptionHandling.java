public class ExceptionHandling {
    public static void main(String[] args) {
        try {
            int x=5;
            int y=0;
            int totalDiv = x/y;
            System.out.println(totalDiv);
            
        }catch(ArithmeticException e){
            System.out.println("ArithmeticException Exception caught: " + e);
        }
         catch (Exception e) {
            System.out.println("Exception caught: " + e);

        }
        finally{
            System.out.println("Finally will get execute 100%");
        }
    }
}
