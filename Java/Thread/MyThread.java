public class MyThread extends Thread {
    private int number;

    public MyThread(int number) {
        this.number = number;
    }

    public synchronized void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println("Thread " + number + ": " + i);
            try {
                Thread.sleep(500); // Sleep for 500 milliseconds
            } catch (InterruptedException e) {
                System.out.println(e);
            }
        }
    }
}