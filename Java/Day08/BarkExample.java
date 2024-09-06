abstract class AbstractDEmo {

    abstract protected void bark();
}
public class BarkExample extends AbstractDEmo{
    protected void bark(){
        System.out.println("This is bark Anbstract Example");
    }
    public static void main(String[] args) {
        BarkExample barkExample = new BarkExample();
        barkExample.bark();
    }
}