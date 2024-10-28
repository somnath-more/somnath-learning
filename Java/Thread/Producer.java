public class Producer extends Thread {
    Company company;

    Producer(Company company) {
        this.company = company;
    }

    public void run() {
        for (int i = 0; i < 10; i++) {
            company.produce_item(i);
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            
        }
    }
}
