import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

public class Main {
    public static void main(String[] args) {
        System.out.println("Main");

        Runnable runnable = () -> System.out.println("Thread Started Runnable");

        try {
            FileReader fr = new FileReader("Java\\2026\\javabasics\\masterjava.md");
            System.out.println("Fr: " + fr);
        } catch (FileNotFoundException e) {
            System.out.println("File Not Found Exception: " + e);
        } catch (Exception e) {
            System.out.println("General Exception: " + e);
        }
    }
}