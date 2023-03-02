package ciclos.principal;
import ciclos.forwhiledo.UsoFor;
import ciclos.forwhiledo.UsoWhile;
import ciclos.control.DoSwitch;
import ciclos.forwhiledo.CicloDo;
public class Test {
    public static void main(String[] args) {
        
    	UsoWhile uw = new UsoWhile();
        // uw.cicloW();
        // uw.centinelaW();
        // uw.banderaW();
        
        UsoFor uf = new UsoFor();
        // uf.cicloFor();
        // uf.letrasfor();
        
        CicloDo cd = new CicloDo();
        // cd.digitosDo();
        
        DoSwitch ds = new DoSwitch();
        ds.controlador();
        
    }
}