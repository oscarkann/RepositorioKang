package com.ok.clases;
public class Cuadrado extends FigurasGeometricas{
    double lado;
    
    
    public Cuadrado(double lado) {
        super();
        this.lado = lado;
    }
    @Override
    public double areas() {
        // TODO Auto-generated method stub
        return (lado*lado);
    }
    public double getLado() {
        return lado;
    }
    public void setLado(double lado) {
        this.lado = lado;
    }
}