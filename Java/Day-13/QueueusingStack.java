import java.util.Queue;
import java.util.*;
public class QueueusingStack {
    
        Stack<Integer> stack1 = new Stack<>();
        Stack<Integer> stack2 = new Stack<>();
        
        public void add(Integer value) {
            stack1.push(value);
            while (!stack2.isEmpty()) {
                stack1.push(stack2.pop());
            }

    
          
        }
        public Integer peek() {
            while (!stack1.isEmpty()) {
                stack2.push(stack1.pop());
            }
            return stack2.peek();
    
        }
        public Integer poll() {
            while (!stack1.isEmpty()) {
                stack2.push(stack1.pop());
            }
            return stack2.pop();
    
    }
    public static void main(String[] args) {
        QueueusingStack queue = new QueueusingStack();
        queue.add(10);
        queue.add(20);
        System.out.println(queue.peek());
        System.out.println(queue.poll());

    }
}
