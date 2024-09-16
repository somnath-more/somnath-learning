import java.util.ArrayList;

class TreeNode {
    int val;
    TreeNode left, right;
    TreeNode(int val) {
        this.val = val;
        left = right = null;
    }
}

public class KthSmallest {

    // Inorder traversal to store elements in sorted order
    public static void inorder(TreeNode node, ArrayList<Integer> nodes) {
        if (node == null)
            return;

        // Traverse the left subtree
        inorder(node.left, nodes);

        // Visit the node
        nodes.add(node.val);

        // Traverse the right subtree
        inorder(node.right, nodes);
    }

    public static int KthSmallest(TreeNode node, int k) {
        // ArrayList to store inorder traversal (sorted values)
        ArrayList<Integer> nodes = new ArrayList<>();

        // Fill the ArrayList with the inorder traversal of the tree
        inorder(node, nodes);

        // Return the (k-1)th element as list indices are zero-based
        return nodes.get(k - 1);
    }

    public static void main(String[] args) {
        // Creating a binary search tree
        TreeNode root = new TreeNode(5);
        root.left = new TreeNode(3);
        root.right = new TreeNode(7);
        root.left.left = new TreeNode(2);
        root.left.right = new TreeNode(4);
        root.right.left = new TreeNode(6);
        root.right.right = new TreeNode(8);

        // Finding the kth smallest element
        int k = 3;
        int kthSmallest = KthSmallest(root, k);
        System.out.println("The " + k + "rd smallest value is: " + kthSmallest);
    }
}
