public class FinalProgram{

     public  int sumOfOddNumbers(int n){
        int sum = 0;
        for(int i = 1; i <= n; i+=2)
            sum += i;
        return sum;
     }
}