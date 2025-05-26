package Core_Java;

class MyThread extends Thread {
    private String message;

    MyThread(String message) {
        this.message = message;
    }

    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println(message + " - " + i);
            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
                System.out.println("Thread interrupted.");
            }
        }
    }
}

public class Thread {
    public static void main(String[] args) {
        MyThread thread1 = new MyThread("Thread One");
        MyThread thread2 = new MyThread("Thread Two");

        thread1.start();
        thread2.start();
    }
}
