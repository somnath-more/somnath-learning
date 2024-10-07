public class SpiralMatrix {
   public static void spiralPrint(int [][] matrix){
        int rows = matrix.length;
        int cols = matrix[0].length;
        int top = 0, bottom = rows - 1, left = 0, right = cols - 1;
        while(top<=bottom && left<=right){
              for(int i=left;i<=right;i++){
                System.out.print(matrix[top][i] + " ");
            }
            top++;
            for(int i=top;i<=bottom;i++){
                System.out.print(matrix[i][right] + " ");
            }
            right --;
            if(top<=bottom){
                for(int i=right;i>=left;i--){
                    System.out.print(matrix[bottom][i] + " ");
                }
                bottom --;
            }
            if(left<=right){
                for(int i=bottom;i>=top;i--){
                    System.out.print(matrix[i][left] + " ");
                }
                left ++;
            }

        }

    }
    public static void main(String[] args) {
        int [][] matrix ={{1,2,3},{4,5,6},{7,8,9}};
        // System.out.println("the given matrix is: " + matrix);
        // 1 2 3
        // 4 5 6
        // 7 8 9
        for(int[] arr : matrix)
        {
            for(int i : arr)
            {
                System.out.print(i + " ");
            }
            System.out.println();
        }
        spiralPrint(matrix);


    }
}
