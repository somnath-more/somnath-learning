import java.util.Scanner;

public class Snippet {
   public static void main(String[] args) {
      Scanner scanner = new Scanner(System.in);
      System.out.println("Enter your choice (1-5): ");
      int choice = scanner.nextInt();

      switch(choice) {
         case 1:
            System.out.println("You chose option 1.");
            // Add actions for case 1
            break;
         case 2:
            System.out.println("You chose option 2.");
            // Add actions for case 2
            break;
         case 3:
            System.out.println("You chose option 3.");
            // Add actions for case 3
            break;
         case 4:
            System.out.println("You chose option 4.");
            // Add actions for case 4
            break;
         case 5:
            System.out.println("You chose option 5.");
            // Add actions for case 5
            break;
         default:
            System.out.println("Invalid choice.");
            break;
      }
      
      scanner.close();
   }
}
