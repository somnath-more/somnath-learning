import java.util.ArrayList;
import java.util.stream.Collector;
import java.util.stream.Collectors;

public class StreamDetail {
    
    public static String StreamMethods(ArrayList<String> names) {
        String ans=names.stream().filter(name -> name.startsWith("A")).collect(Collectors.joining(", ")) ;
        return ans;

    }
    public static void main(String[] args) {
        String country="America";
      ArrayList<String> countryName = new ArrayList<String>();
        countryName.add( country );
        countryName.add( "Canada" );
        countryName.add( "United Kingdom" );
        countryName.add( "Germany" );
        countryName.add( "France" );
        countryName.add( "Spain" );
      
        // countryName.stream().count();
// Filter names based of Start A 
        System.out.println("Countries starting with A: "+StreamMethods(countryName));
        // Filter names based of length greater than 5
        System.out.println("Countries with length greater than 5: "+countryName.stream().filter(name -> name.length() > 5).collect(Collectors.toList()));
        // Sorting in descending order
        System.out.println("Countries sorted in descending order: "+countryName.stream().sorted(String::compareTo).collect(Collectors.toList()));
     

        //  counting the number of countries
        System.out.println("Countrie count: "+countryName.stream().count());

        System.out.println("Countrie count: "+countryName.stream().equals(countryName));

        System.out.println("Countrie count: "+countryName.stream().findFirst());
        System.out.println("Countries:");
        countryName.stream().forEach(System.out::println);

    }
}
