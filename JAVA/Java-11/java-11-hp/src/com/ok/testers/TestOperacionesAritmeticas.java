package com.ok.testers;
import com.ok.clases.*;
public class TestOperacionesAritmeticas {
    public static void main(String[] args) {
        // TODO Auto-generated method stub
        Suma s = new Suma(5,2);
        OperacionesAritmaticas ss = new Suma(10,3);
        Mensajes sss = new Suma();
        
        System.out.println("Suma: "+s.sumar());
        System.out.println("OperacionesAritmeticas: "+ss.sumar());
        s.mensaje();
        sss.mensaje();
    }
}