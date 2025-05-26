package Core_Java;
import java.util.Scanner;
public class TryCatch {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);

        System.out.print("Enter the numerator: ");
        int numerator = s.nextInt();

        System.out.print("Enter the denominator: ");
        int denominator = s.nextInt();

        try {
            int result = numerator / denominator;
            System.out.println("Result: " + result);
        } catch (ArithmeticException e) {
            System.out.println("Error: Cannot divide by zero.");
        }

        s.close();
    }
}
