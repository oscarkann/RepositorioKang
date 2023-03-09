package com.ok.clases;

public class Cuenta {
    protected float saldo;
    protected int numConsignaciones;
    protected int numRetiros;
    protected float tasaAnual;
    protected float comisionMensual;

    public Cuenta(float saldo, float tasaAnual) {
        this.saldo = saldo;
        this.tasaAnual = tasaAnual;
    }

    public void consignar(float cantidad) {
        saldo += cantidad;
        numConsignaciones++;
    }

    public void retirar(float cantidad) {
        if (cantidad <= saldo) {
            saldo -= cantidad;
            numRetiros++;
        } else {
            System.out.println("Error: no se puede retirar más de lo que hay en la cuenta.");
        }
    }

    public void calcularInteresMensual() {
        float interes = saldo * tasaAnual / 12;
        saldo += interes;
    }

    public void extractoMensual() {
        saldo -= comisionMensual;
        calcularInteresMensual();
        numRetiros = 0;
        numConsignaciones = 0;
    }

    public void imprimir() {
        System.out.println("Saldo: " + saldo);
        System.out.println("Número de consignaciones: " + numConsignaciones);
        System.out.println("Número de retiros: " + numRetiros);
        System.out.println("Tasa anual: " + tasaAnual);
        System.out.println("Comisión mensual: " + comisionMensual);
    }
}
