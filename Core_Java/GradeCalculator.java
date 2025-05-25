package Core_Java;
import java.util.Scanner;
public class GradeCalculator {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.println("Enter your mark: ");
        int mark = s.nextInt();
        char grade;

        if(mark >= 90) {
            grade = 'A';
        } else if(mark >= 80) {
            grade = 'B';
        } else if(mark >= 70) {
            grade = 'C';
        } else if(mark >= 60) {
            grade = 'D';
        } else {
            grade = 'F';
        }

        System.out.println("Your grade is: " + grade);
        s.close();
    }
}
