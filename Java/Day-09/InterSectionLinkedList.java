class ListNode {
    int val;
    ListNode next;
    ListNode(int x) {
        val = x;
        next = null;
    }
}

public class InterSectionLinkedList {
    // Method to find the intersection node
    public static ListNode findIntersection(ListNode headA, ListNode headB) {
        if (headA == null || headB == null) return null;

        // Two pointers for each list
        ListNode pointerA = headA;
        ListNode pointerB = headB;

        // Traverse both lists, reset pointers when they reach the end
        while (pointerA != pointerB) {
            // If pointerA reaches the end, move it to the start of list B
            pointerA = (pointerA == null) ? headB : pointerA.next;

            // If pointerB reaches the end, move it to the start of list A
            pointerB = (pointerB == null) ? headA : pointerB.next;
        }

        // If they meet at some node, that's the intersection node
        // If no intersection, they will both be null at the end
        return pointerA;
    }

    public static void main(String[] args) {
        // Creating linked lists with an intersection point

        // List 1: 1 -> 2 -> 3
        ListNode headA = new ListNode(1);
        headA.next = new ListNode(2);
        headA.next.next = new ListNode(3);

        // List 2: 4 -> 5 -> (intersects at 3)
        ListNode headB = new ListNode(4);
        headB.next = new ListNode(5);
        headB.next.next = headA.next.next; // Intersection point at node 3

        // Finding the intersection point
        ListNode intersectionNode = findIntersection(headA, headB);

        if (intersectionNode != null) {
            System.out.println("Intersection point: " + intersectionNode.val);
        } else {
            System.out.println("No intersection point found");
        }
    }
}
