public class Emp implements Comparable<Emp> {

    private String name;
    private String phone;
    private Integer empId;

    Emp(String name, String phone, Integer empId) {
        this.name = name;
        this.empId = empId;
        this.phone = phone;
    }

    public String getName() {
        return name;
    }

    public String getPhone() {
        return phone;
    }

    public Integer getEmpId() {
        return empId;
    }

    // public String toString(){
    // return "phone"+phone+ " "
    // }

    @Override
    public int compareTo(Emp o) {
        return this.empId - o.empId; // el bar mai ek hi se use kar sakte ho item
    }

    @Override
    public String toString() {
        return "Emp{" + "name='" + name + '\'' + ", phone='" + phone + '\'' + ", empId=" + empId + '}';
    }

}
