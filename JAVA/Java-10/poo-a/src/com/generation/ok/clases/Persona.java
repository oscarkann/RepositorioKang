package com.generation.ok.clases;

public class Persona {
    String nombre;
    int edad;
    int nss;
    
    
    //ATRIBUTOS
    public Persona () {
    	
    }
    
    
    //CONSTRUCTOR VACIO
    public Persona(String nombre, int edad, int nss) {
        super();
        this.nombre = nombre;
        this.edad = edad;
        this.nss = nss;
    }
    
    //CONSTRUCTOR SOBRECARGADO
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public int getEdad() {
        return edad;
    }
    public void setEdad(int edad) {
        this.edad = edad;
    }
    public int getNss() {
        return nss;
    }
    public void setNss(int nss) {
        this.nss = nss;
    }
    
    
    
}
