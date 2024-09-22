class TreeNode {

    int val;
    TreeNode left, right;
    TreeNode(int item) {
        val = item;
        left = right = null;
    }
}
public class MaximumDepth {
    // Maximum Depth of a Binary Tree: Write a program to find the maximum depth (or height) of a binary tree.
    int maxDepth(TreeNode root) {
        if (root == null) {
            return 0;
        }
        int leftHeight = maxDepth(root.left);
        int rightHeight = maxDepth(root.right);
        return Math.max(leftHeight, rightHeight) + 1;
    }
    public static void main(String[] args) {
        TreeNode root = new TreeNode(3);
        root.left = new TreeNode(9);
        root.right = new TreeNode(20);
        root.right.left = new TreeNode(15);
        root.right.right = new TreeNode(7);
    
        MaximumDepth obj = new MaximumDepth();
        System.out.println("Maximum Depth: " + obj.maxDepth(root));
    }
}
