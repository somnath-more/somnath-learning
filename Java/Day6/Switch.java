import java.util.Scanner;

class Switch {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the day of the week: ");
        String day = sc.next();
        
        switch (day) {
            case "Sun":
                System.out.println("Sunday");
                break;
            case "Mon":
                System.out.println("Monday");
                break;
            case "Tue":
                System.out.println("Tuesday");
                break;
            case "Wed":
                System.out.println("Wednesday");
                break;
            case "Thu":
                System.out.println("Thursday");
                break;
            case "Fri":
                System.out.println("Friday");
                break;
            case "Sat":
                System.out.println("Saturday");
                break;
            default:
                System.out.println("Invalid day: " + day);
                break;
        }
        
        sc.close(); // Close the scanner
    }
}
