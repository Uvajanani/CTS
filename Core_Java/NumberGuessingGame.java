package Core_Java;
import java.util.*;
public class NumberGuessingGame {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        Random r = new Random();

        int guessingNumber = r.nextInt(100) + 1;
        int userGuess = 0;
        int attempts = 0;
        
        System.out.println("Welcome to the Number Guessing Game!");
        System.out.println("Guess a number between 1 and 100");

        while(userGuess != guessingNumber) {
            System.out.print("Enter your guess: ");
            userGuess = s.nextInt();
            attempts++;

            if (userGuess < guessingNumber) {
                System.out.println("Too low! Try again.");
            } else if (userGuess > guessingNumber) {
                System.out.println("Too high! Try again.");
            } else {
                System.out.println("Correct! You guessed the number in " + attempts + " attempts.");
            }
        }
        s.close();
    }
}
