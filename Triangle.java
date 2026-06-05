import java.util.Scanner;
public class Main{
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        int n = sc.nextInt();
        for(int i=1;i<=n;i++)
        {
          for(int j=65;j<65+i;j++)
          {
            System.out.print((char)j);
          }
          System.out.println();
        }
 
    }
}
