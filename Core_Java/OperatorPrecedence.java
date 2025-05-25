package Core_Java;

public class OperatorPrecedence {
    public static void main(String[] args) {
        int result = 10 + 5 * 2;
        System.out.println(("Result: " + result));
    }
}

// Explanation
// Multiplication (*) and Division (/) have higher precedence than Addition (+) and Subtraction (-).
// When operators have the same precedence, Java evaluates from left to right.
// eg: result = 10 + 5 * 2
// At first 5 * 2 = 10 is calculated
// 10 + 10 = 20