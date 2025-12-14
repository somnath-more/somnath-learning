public class Employee{
    int id;
    String name;
    double salary;
    String department;
    public Employee(int id,String name,double salary,String department){
        this.id=id;
        this.name=name;
        this.salary=salary;
        this.department=department;
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
    public double getSalary(){
        return salary;
    }
    public void setSalary(double salary){
        this.salary=salary;
    }
    public String getDepartment(){
        return department;
    }
    public void setDepartment(String department){
        this.department=department;
    }
    public String toString(){
        return "[id="+id+",name="+name+",salary="+salary+",department="+department+"]";
    }
    
}