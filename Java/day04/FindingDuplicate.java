package day04;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;

// Finding Duplicates: Write a program to find duplicates in an array
public class FindingDuplicate {
    void printDuplicates(ArrayList<Integer> list){
        int n =list.size();
        Set<Integer> duplicates = new HashSet<Integer>();
        for(int i=0; i<n; i++){
            if(duplicates.contains(list.get(i))){
                System.out.println(list.get(i));
            }
            else{
                duplicates.add(list.get(i));
            }
        }  // TC O(n) SC O(n)
    }
    public static void main(String[] args){
        ArrayList<Integer> list = new ArrayList<Integer>();
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(2);
        list.add(5);
        list.add(4);
        list.add(3);
        FindingDuplicate duplicate = new FindingDuplicate();
        duplicate.printDuplicates(list);
        System.out.println("Duplicates in the given array are: ");
    }
}
