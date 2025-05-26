package Core_Java;

import java.util.*;
import java.util.stream.Collectors;

record Person(String name, int age) {}

public class RecordExample {
    public static void main(String[] args) {
        List<Person> people = List.of(
            new Person("Uva", 20),
            new Person("Steffi", 17),
            new Person("Partha", 30)
        );

        List<Person> adults = people.stream().filter(p -> p.age() >= 18).collect(Collectors.toList());
        System.out.println("\nAdults (age >= 18):");
        adults.forEach(System.out::println);
    }
}
