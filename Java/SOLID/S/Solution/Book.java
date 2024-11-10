public class Book{
     private String title;
     private String author;
     private double price;

     public Book(String title, String author, double price) {
         this.title = title;
         this.author = author;
         this.price = price;
     }

     public String getTitle() {
         return title;
     }
     public String getAuthor() {
         return author;
     }
     public double getPrice() {
         return price;
     }

     public String setAuthor(String author ){
         if(author == null || author.isEmpty()){
             return "Author is not provided";
         }
         this.author = author;
         return author;
     }
     
     public double setPrice(double price) {
         if(price < 0){
             return -1;
         }
         this.price = price;
         return price;
     }
     public String setTitle(String title){
       return this.title=title;
     }
     
    //  public void displayBookInfo() {
    //      System.out.println("Title: " + title);
    //      System.out.println("Author: " + author);
    //      System.out.println("Price: $" + price);
     
    //  }
}