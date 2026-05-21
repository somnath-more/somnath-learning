
//     public void run(){
//         System.out.println("Thread Started");
//     }
   
// }

import java.io.FileReader;

public class Main{
    public static void main(String[] args) {
        System.out.println("Main");

        // ThreadBasics threadBasics=new ThreadBasics();
        // threadBasics.start();
        Runnable runnable=()->System.out.println("Thread Started Runnable");
        try {
                   FileReader fr = new FileReader("file.txt");
                   System.out.println("Fr"+fr);

        } catch (Exception e) {
               System.out.println("Exception : "+e);
        }
    }
}
