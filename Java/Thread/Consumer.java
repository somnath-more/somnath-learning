public class Consumer extends Thread {
    Company company;

    Consumer(Company company) {
        this.company = company;
    }

    public void run() {
        for (int i = 0; i < 10; i++) {
            this.company.consume_item(i);
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }

        }
    }

}
