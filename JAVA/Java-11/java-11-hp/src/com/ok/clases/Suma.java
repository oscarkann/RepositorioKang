package com.ok.clases;
public class Suma implements OperacionesAritmaticas, Mensajes{
private double a;
private double b;
    public Suma() {
}
    public Suma(double a, double b) {
    this.a = a;
    this.b = b;
}
    @Override
    public double sumar() {
        // TODO Auto-generated method stub
        return a+b;
    }
    @Override
    public double restar() {
        // TODO Auto-generated method stub
        return 0;
    }
    @Override
    public void mensaje() {
        // TODO Auto-generated method stub
        System.out.println("Hola soy una suma. ");
    }
}