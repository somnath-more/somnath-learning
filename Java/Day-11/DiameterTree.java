// Diameter of a Binary Tree: Write a program to calculate the diameter of a binary tree (the longest path between any two nodes).

class TreeNode {

    int val;
    TreeNode left, right;
    TreeNode(int item) {
        val = item;
        left = right = null;
    }
}
public class DiameterTree {

    public static int calculateDiameterOfTree(TreeNode root){
        if (root == null)
            return 0;


        int leftHeight = calculateHeight(root.left);
        int rightHeight = calculateHeight(root.right);
        int leftDiameter = calculateDiameterOfTree(root.left);
        int rightDiameter = calculateDiameterOfTree(root.right);
        return Math.max(leftHeight + rightHeight + 1, Math.max(leftDiameter, rightDiameter));

    }
    public static void main(String[] args) {
        TreeNode root = new TreeNode(9);
        root.left = new TreeNode(3);
        root.right = new TreeNode(20);
        int ans=calculateDiameterOfTree(root);
        System.out.println("The Diameter of a Binary Tree : " + ans);
    }
}
