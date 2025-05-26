package Core_Java;

import java.util.*;

public class LambdaSort {
    public static void main(String[] args) {
        List<String> names = new ArrayList<>();
        names.add("Uva");
        names.add("Steffi");
        names.add("Partha");

        Collections.sort(names, (s1, s2) -> s1.compareTo(s2));

        System.out.println("Sorted Names:");
        for (String name : names) {
            System.out.println(name);
        }
    }
}
