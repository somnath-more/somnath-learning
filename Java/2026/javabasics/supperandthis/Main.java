
class Parent {
    int x = 10;
}

class Main extends Parent {
    int x = 20;

    void show() {
        System.out.println(super.x); // 10
        System.out.println(this.x);  // 20
    }
}