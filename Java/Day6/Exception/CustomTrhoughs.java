
class CustomException extends Exception {
   
   CustomException(String message){//+
      super(message);
   }
}//-
public class CustomTrhoughs {//-
    public static void main(String args[]){//-
        try{//-
            throw new CustomException("This is a custom exception");//-
        }catch(CustomException e){//-
            System.out.println("Caught custom exception: " + e.getMessage());//-
        }finally{//-
            System.out.println("This block will be executed, regardless of the exception");//-
        }
    } //-
}//+

    

