package com.ok.clases;

public class CuentaCorriente extends Cuenta {
private float sobregiro;
public CuentaCorriente(float saldo, float tasaAnual) {
    super(saldo, tasaAnual);
    sobregiro = 0;
}

@Override
public void consignar(float cantidad) {
    super.consignar(cantidad);
    if (sobregiro > 0) {
        if (cantidad > sobregiro) {
            sobregiro = 0;
        } else {
            sobregiro -= cantidad;
        }
    }
}

@Override
public void retirar(float cantidad) {
    if (cantidad <= saldo + sobregiro) {
        if (cantidad <= saldo) {
            saldo -= cantidad;
        } else {
            sobregiro -= (cantidad - saldo);
            saldo = 0;
        }
        numRetiros++;
    } else {
        System.out.println("No hay suficiente saldo y sobregiro para retirar.");
    }
}

public void imprimir() {
    super.imprimir();
    System.out.println("Sobregiro: " + sobregiro);
}
}