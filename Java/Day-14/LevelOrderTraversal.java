


import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Queue;

class TreeNode {
    int val;
    TreeNode left, right;
    
    TreeNode(int val) {
        this.val = val;
        left = right = null;
    }
}

public class LevelOrderTraversal {

    // A binary tree node
    public ArrayList<Integer> levelOrder(TreeNode node) {

        Queue<TreeNode> queue = new LinkedList<>();
        ArrayList<Integer> result = new ArrayList<>();
        if (node == null)
            return result;
        
        queue.add(node); // add the root node to the queue
        
        while (!queue.isEmpty()) {
            int size = queue.size();
            for (int i = 0; i < size; i++) {
                TreeNode temp = queue.poll(); // remove the front node from the queue
                result.add(temp.val); // add its value to the result list
                
                // add its left child if it exists
                if (temp.left != null)
                    queue.add(temp.left);
                
                // add its right child if it exists
                if (temp.right != null)
                    queue.add(temp.right);
            }
        }
        return result;
    }

    public static void main(String[] args) {
        TreeNode node = new TreeNode(4);
        node.left = new TreeNode(2);
        node.right = new TreeNode(7);
        node.left.left = new TreeNode(1);
        node.left.right = new TreeNode(3);
        
        LevelOrderTraversal tree = new LevelOrderTraversal();
        ArrayList<Integer> result = tree.levelOrder(node);
        
        result.forEach(x -> System.out.println(x)); // print the result
    }
}
