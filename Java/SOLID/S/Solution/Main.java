
public class Main {

    public static void main(String[] args) {
        Book book = new Book("John", "Think", 200);
        // book.displayBookInfo();
        // book.setAuthor("John Doe");
        // book.setTitle("Think Like a Monk");
        // book.setPrice(200);

        DisplayBook display = new DisplayBook(book);
        String ans = display.displayDetails();
        System.out.println(ans);
    }
}
