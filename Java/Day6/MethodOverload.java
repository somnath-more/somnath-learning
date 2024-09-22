public class MethodOverload {
    public int add(int a,int b){
        return a + b;
    }
    public int add(int a,int b,int c){
        return a + b + c;
    }
    public double add(double a, double b){
        return a + b;
    }
    public  String add(String a, String b){
        return a + b;
    }
    public float add(float a, float b){
        return a + b;
    }
    public static void main(String[] args) {
        MethodOverload obj = new MethodOverload();
        System.out.println(obj.add(10, 20));
        System.out.println(obj.add(10.5, 20.7));
        System.out.println(obj.add("10", "20"));
    }
    
}
