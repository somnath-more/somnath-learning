
class Palindrome {

    public boolean isPalindrome(String s) {
        //  create string to charArray
        char[] c = s.toCharArray();

        int start = 0;
        int end = s.length() - 1;
        while (start < end) {
            if (s.charAt(start) != s.charAt(end)) {
                return false;
            }
            start++;
            end--;
        }
        return true;
    }

    public static void main(String[] args) {
        Palindrome p = new Palindrome();
        System.out.println(p.isPalindrome("madam")); // true
    }
}
