public class TechGig {
    {
        System.out.println("TechGig Initial block");
    }
    TechGig(){
        System.out.println("TechGig");
    }
    TechGig(String name){
        System.out.println("TechGig: " + name);
    }
    {
        System.out.println("TechGig ending block");
    }
    public static void main(String[] args) {
        TechGig tech = new TechGig();
       TechGig tech2 = new TechGig("TechGig 2");
    }
}
