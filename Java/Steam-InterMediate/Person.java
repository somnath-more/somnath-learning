
public class Person {
        int id;
    String name;
    int age;
    public Person(int id,String name,int age){
        this.id=id;
        this.name=name;
        this.age=age;
    }
    // GETTER AND SETTER
    public int getId(){
        return id;
    }
    public void setId(int id){
        this.id=id;
    }
    public String getName(){
        return name;
    }
    public void setName(String name){
        this.name=name;
    }
    public int getAge(){
        return age;
    }
    public void setAge(int age){
        this.age=age;
    }
    public String toString(){
        return "[id="+id+",name="+name+",age="+age+"]";
    } 
}
