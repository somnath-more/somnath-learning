import java.util.Scanner;
public class Table{
    public static void printTable(int rows, int columns) {
         for (int i = 1; i <= rows; i++) {
             for (int j = 1; j <= columns; j++) {
                 System.out.printf("%d * %d = %d%n", i, j, i * j);
             }
             System.out.println();
         }
 
    }
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the number of rows: ");
        int rows = scanner.nextInt();
        System.out.print("Enter the number of columns: ");
        int columns = scanner.nextInt();
        printTable(rows, columns);
        // Print the table

        scanner.close();
    }
}