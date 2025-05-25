package Core_Java;
public class TypeCasting {
    public static void main(String[] args) {
        // Explicit casting
        double a = 20.4;
        int b = (int) a; 

        // Implicit casting
        int c = 10;
        double d = c; 

        System.out.println("Original double value: " + a);
        System.out.println("After casting to int: " + b);
        System.out.println("Original int value: " + c);
        System.out.println("After casting to double: " + d);
    }
}
