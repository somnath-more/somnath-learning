import java.util.Stack;

public class ValidParenthesis{
    public static boolean isValidParenthessis(String s) {
        Stack<Character> stack = new Stack<>();

        for( char c: s.toCharArray()){
            if(c == '(' || c == '{' || c == '['){
                stack.push(c);
            }else if(c == ')' && stack.isEmpty() || c == '}' && stack.isEmpty() || c == ']' && stack.isEmpty()){
                return false;
            } else if(c == ')' && stack.peek() != '(' || c == '}' && stack.peek() != '{' || c == ']' && stack.peek() != '['){
                return false;
            } else{
                stack.pop();
            }
        }
         if (stack.empty()) {
            return true;
         }
         return false;
    }
    public static void main(String[] args) {
        String value= "()(()";
        boolean ans= isValidParenthessis(value);
        System.out.println(ans);
    }
}