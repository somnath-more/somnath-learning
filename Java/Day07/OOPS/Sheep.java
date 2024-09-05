// Inheritance Example
class Animal{
    public void makeSound() {
        System.out.println("Animal makes a sound");
    }
}
public class Sheep extends Animal{
    // Overriding makeSound() method
    public void makeSound() {
        System.out.println("Sheep makes a neigh");
    }
    public static void main(String[] args) {
        Sheep sh = new Sheep();
        sh.makeSound(); // Output: Animal makes a sound
    }
}
