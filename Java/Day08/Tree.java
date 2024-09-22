public interface BarkInterface {
    public void bark();
}
public class Tree implements BarkInterface{
    public void bark(){
        System.out.println("This is bark Method");
    }
    public static void main(String[] args) {
        Tree node = new Tree();
        node.bark();
    }
}