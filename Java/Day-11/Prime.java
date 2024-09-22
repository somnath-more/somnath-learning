class Prime{
    public static boolean isPrime(int num){
        // int cnt=0;
        for(int i=2;i<num;i++){
            if(num%i==0){
                return false;
            }
        }
        return true;
    }
    public static void main(String[] args){
        int num = 6;
        boolean isPrime = isPrime(num);
        if(isPrime){
            System.out.println(num + " is a prime number.");
        } else {
            System.out.println(num + " is not a prime number.");
        }
    }

}