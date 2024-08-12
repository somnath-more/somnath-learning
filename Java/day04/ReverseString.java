package day04;
//Reverse a String

import java.util.Scanner;

public class ReverseString{
    public String ReverseFn(String str){
     String ans="";//SC
     for(int i=str.length()-1;i>=0;i--){
         ans+=str.charAt(i);
         
     }
     return ans;
    
    }
    public static void main(String args[]){
     Scanner scanner=new Scanner(System.in);
     System.out.println("Enter a String : ");
     String str=scanner.nextLine();
     ReverseString rs=new ReverseString();
     System.out.println(rs.ReverseFn(str));
    }
 }