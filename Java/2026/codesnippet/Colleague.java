class Colleague{
    String name;
    int salary;
    int age;
    String department;

    public Colleague(String name, int salary, int age, String department) {
        this.name = name;
        this.salary = salary;
        this.age = age;
        this.department = department;
    }

    public int getAge() {
        return age;
    }

    public String getDepartment() {
        return department;
    }

    public int getSalary() {
        return salary;
    }

    public String getName() {
        return name;
    }
    

    
}