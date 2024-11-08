public class DisplayBook {
    private Book book;
    
    public DisplayBook(Book book) {
        this.book = book;
    }
    
    public String displayDetails() {
  
        return "Title: " + book.getTitle() +" "+"Author: " + book.getAuthor()+" "+"Price: $" + book.getPrice();
    
    }
}
