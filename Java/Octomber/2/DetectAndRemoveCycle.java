public class DetectAndRemoveCycle(){
      class Node{

      }

public static void main(String[] args) {
       Node head = new Node(1);
    head.next = new Node(2);
    head.next.next = new Node(3);rggo
    head.next.next.next = new Node(4);
    head.next.next.next.next = new Node(5);
    head.next.next.next.next.next = head.next.next;

    detectAndRemoveCycle(head);
}
 
}