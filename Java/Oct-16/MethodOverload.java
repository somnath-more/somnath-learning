public class MethodOverload{


    public int add(int a,int b){
        return a+b;
    }

    public double add(double a, double b){
       
        return a+b;
    }
   public float add(float a, float b){
    System.out.println(".()");
    return a+b;
   }
    public static void main(String[] args) {
        MethodOverload m = new MethodOverload();
       System.out.println( m.add(1, 3));
       System.out.println(m.add(1.5, 3.5));
    }
}