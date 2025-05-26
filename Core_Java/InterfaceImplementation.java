package Core_Java;
interface Playable {
    void play();  
}

class Guitar implements Playable {
    public void play() {
        System.out.println("Guitar is playing melodious tunes.");
    }
}

class Piano implements Playable {
    public void play() {
        System.out.println("Piano is playing classical music.");
    }
}

public class InterfaceImplementation {
    public static void main(String[] args) {
        Playable guitar = new Guitar();
        Playable piano = new Piano();

        guitar.play();
        piano.play();
    }
}
