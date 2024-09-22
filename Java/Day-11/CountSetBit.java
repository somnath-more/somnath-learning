// Count Set Bits: Write a program to count the number of set bits (1s) in the binary representation of a number.
public class CountSetBit {
    public static int countSetBits(int number) {
        int count=0;
        while(number !=0){
            count+=number &1;
            number >>=1;  // right shift by 1 bit to get the next bit.

        }
        return count;
    }
    public static void main(String[] args) {
        int number = 2;
        int count = countSetBits(number);
        System.out.println("Answer is : "+count);
    }
}
