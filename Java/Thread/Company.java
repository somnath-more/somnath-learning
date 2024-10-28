public class Company extends Thread {
    int n;
    boolean f = false;

    synchronized public void produce_item(int n) {
        while (f) { // If an item has already been produced, wait
            try {
                wait();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        this.n = n;
        f = true; // If the item has been produced
        notify(); // Notify the waiting thread to continue
        System.out.println("Pruduced : " + this.n);
    }

    synchronized public int consume_item(int n) {
        while (!f) { // If no item is produced, wait
            try {
                wait();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        System.out.println("Consumed: " + this.n);
        f = false; // If the item has been consumed
        notify(); // Notify the waiting thread to continue
        return this.n;
    }
}