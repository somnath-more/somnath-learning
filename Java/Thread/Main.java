// There are two main ways to create a thread in Java:

// By extending the Thread class.
// By implementing the Runnable interface.
// public class MyThread extends Thread {
//     public static void main(String[] args) {
//         MyThread thread = new MyThread();
//       thread.start();
//       System.out.println("This code is outside of the thread");
//     }
//     public void  run() {
//       System.out.println("This code is running in a thread");
//     }
//   }

//   2 . I want create many thread

public class Main {
    public static void main(String[] args) {
        MyThread thread1 = new MyThread(1);
        MyThread thread2 = new MyThread(2);
        // thread1.start();
        // thread2.start();

        // use of join method
        // System.out.println("Will Start first Thread");
        // thread1.start();
        // try {
        // thread1.join(); // wait until thread COMPLETED complete.
        // } catch (Exception e) {
        // // TODO: handle exception
        // e.printStackTrace();
        // }
        // System.out.println("Will Start Second Thread");

        // thread2.start();

        // use of syncrhonized keyword

        // Counter counter = new Counter();

        // Thread t3 = new Thread(() -> {
        // for (int i = 0; i < 10; i++) {
        // System.out.println("I am thread 1");
        // counter.increment();
        // }
        // });

        // Thread t4 = new Thread(() -> {
        // for (int i = 0; i < 10; i++) {
        // System.out.println("I am thread 2");
        // counter.increment();
        // }
        // });

        // t3.start();
        // t4.start();

        // try {
        // t3.join();
        // t4.join();
        // } catch (Exception e) {
        // // TODO: handle exception
        // e.printStackTrace();
        // }

        // System.out.println("Count: " + counter.count); // Now correctly prints 2000

        // Race Conditions
        // Using wait(), notify(), and notifyAll()
        // Deadlocks: When two or more threads are blocked forever because each is
        // waiting for the other to release a resource.

        // wait(): Tells the current thread to release the lock and go into a waiting
        // state until another thread calls notify() or notifyAll().
        // notify(): Wakes up one thread waiting on the object’s lock.
        // notifyAll(): Wakes up all threads waiting on the object’s lock.

        // Threads can be in three states: RUNNABLE, BLOCKED, and WAITING.
        // Message msg = new Message();

        // Thread writer = new Thread(() -> {
        // try {
        // msg.writeMessage("Hello from writer");
        // } catch (InterruptedException ex) {
        // }
        // });
        // Thread reader = new Thread(() -> msg.readMessage());

        // reader.start();
        // writer.start();

        Company company = new Company();
        Producer p = new Producer(company);
        Consumer c = new Consumer(company);
        p.start();
        c.start();
        Thread th = Thread.currentThread();
        System.out.println("Main Thread: " + th.getName()); // prints Main Thread
        System.out.println("Main Thread ID: " + th.getId()); // prints thread ID
        System.out.println("Main Thread Priority: " + th.getPriority()); // prints thread priority
        System.out.println("Main Thread IsDaemon: " + th.isDaemon()); // prints true if thread is daemon
        System.out.println("Main Thread IsAlive: " + th.isAlive()); // prints true if thread is alive
        // th.join(); // waits until this thread completes
        

       // prints stack trace of the thread

    }
}