import java.util.Stack;
public class BalanceParenthesis {
    public static boolean checkBalanced(String str) {
        Stack<Character> stack = new Stack<>();
        for (int i = 0; i < str.length(); i++) {
            char c = str.charAt(i);
            if(c == '{' | c == '[' | c == '('){
                stack.push(c);
            }else if( c == '}' || c == ']' || c == ')'){
                if(stack.isEmpty()){
                    return false;
                }
                char top = stack.pop();
                if(c == '}' && top!= '{' || c == ']' && top!= '[' || c == ')' && top!= '('){
                    return false;
                }

            }
        }
        return true;
      
    }
    public static void main(String[] args) {
        String parenthesis="{{())}}";
        System.out.println("Given String parenthesis result: " + parenthesis);
        System.out.println(checkBalanced(parenthesis));
    }
}
