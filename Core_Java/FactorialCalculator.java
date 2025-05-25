package Core_Java;
import java.util.Scanner;
public class FactorialCalculator {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.println("Enter a non-negative integer: ");
        int n = s.nextInt();
        int fact = 1;

        for(int i = 1; i <= n; i++) {
            fact *= i;
        }

        System.out.println("Factorial is : " + fact);
        s.close();
    }
}
