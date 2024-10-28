class Message {
    private String message;
  

    public synchronized void writeMessage(String msg) throws InterruptedException {
        message = msg;
        try {
            Thread.sleep(7000);
        } catch (Exception e) {
            // TODO: handle exception
        }
        notify(); // Notify waiting threads
    }

    public synchronized void readMessage() {
        while (message == null) {
            try {
                wait(); // Wait for a message to be written
            } catch (InterruptedException e) {
                System.out.println(e);
            }
        }
        System.out.println("Message: " + message);
    }
}