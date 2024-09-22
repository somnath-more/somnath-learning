
public class ExceptionCheck {
  public static void main(String[] args) {
    try {
      String message = null;
      System.out.println(message.length());
    } catch (Exception e) {
      // Handle exception by throwing a CustomException
      System.out.println(e.getMessage());
    } finally {
      System.out.println("finished");
    }
  }
}
