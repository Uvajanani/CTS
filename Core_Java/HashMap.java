package Core_Java;

import java.util.*;

public class HashMap {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        HashMap<Integer, String> student = new HashMap<>();

        System.out.println("Enter the number of students: ");
        int n = s.nextInt();

        for (int i = 0; i < n; i++) {
            System.out.println("Enter student ID: ");
            int id = s.nextInt();
            System.out.println("Enter student name: ");
            String name = s.nextLine();
            student.put(id, name);
        }

        System.out.println("Enter a student ID to search: ");
        int searchId = s.nextInt();

        if (student.containsKey(searchId)) {
            System.out.println("Student Name: " + student.get(searchId));
        } else {
            System.out.println("Student ID not found.");
        }

        s.close();
    }
}
