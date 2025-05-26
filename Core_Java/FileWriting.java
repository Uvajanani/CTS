package Core_Java;
import java.io.*;
import java.util.*;

public class FileWriting {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.print("Enter a string to write to file: ");
        String input = s.nextLine();

        try {
            FileWriter writer = new FileWriter("output.txt");
            writer.write(input);
            writer.close();
            System.out.println("Data has been written to output.txt.");
        } catch (IOException e) {
            System.out.println("An error occurred while writing to the file.");
        }

        s.close();
    }
}
