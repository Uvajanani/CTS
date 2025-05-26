package Core_Java;

import java.util.*;

public class ArrayList {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        ArrayList<String> list = new ArrayList<>();

        System.out.println("Enter 5 student names:");
        for (int i = 0; i < 5; i++) {
            String name = s.nextLine();
            list.add(name);
        }

        System.out.println("Names in the list:");
        for (String name : list) {
            System.out.println(name);
        }

        s.close();
    }
}
