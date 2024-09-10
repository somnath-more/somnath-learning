import java.util.Arrays;

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public int[][] spiralMatrix(int m, int n, ListNode head) {
       
        int[][] arr = new int [m][n];
        for (int[] row : arr) {
            Arrays.fill(row, -1);
        }

        int top = 0, bottom = m - 1, left = 0, right = n - 1;
       while(top <= bottom && left <= right && head != null ) {
                  // Fill top row (left to right)
                  for (int i = left; i <= right && head != null; i++) {
                    arr[top][i] = head.val;
                    head = head.next;
                }
                top++; // Move the top boundary down
    
             // Fill right column (top to bottom)
                for(int j=top;j<=bottom  && head != null;j++){
                        arr[j][right]=head.val;
                        head=head.next;
                }
                right--; // Move the right boundary left

                for(int j=right;j>=left && head!=nul;j--){
                        arr[bottom][j]=head.val;
                        head=head.next;
                }
                bottom --;

                // Fill left column (bottom to top)
                for(int j=bottom;j>=top && head!=null;j--){
                        arr[j][left]=head.val;
                        head=head.next;
                }
                left++; // Move the left boundary right
          return arr;
           
       }

    }
}