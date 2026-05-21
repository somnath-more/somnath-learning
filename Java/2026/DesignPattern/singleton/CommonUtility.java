public class CommonUtility {
    private static volatile CommonUtility commonUtility;
    private CommonUtility(){}

    public static  CommonUtility getInstance(){
        if (commonUtility == null) {
            synchronized (CommonUtility.class) {
                if (commonUtility == null) {

                   commonUtility=new CommonUtility();
                }
            }
        } 
            return commonUtility;

        
    }
}

