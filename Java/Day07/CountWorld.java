public class CountWorld{
    public static int countWords(String str){
        String[] words = str.split("\\s+");
        return str.length();
    }
    public static void main(String[] args){
        String str = "Hello World, This is a test.";
        System.out.println("Number of words: " + countWords(str));
    }
}