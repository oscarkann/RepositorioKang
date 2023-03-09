package com.ok.clases;

public class CuentaAhorros extends Cuenta {
    private boolean cuentaActiva;

    public CuentaAhorros(float saldo, float tasaAnual, boolean cuentaActiva) {
        super(saldo, tasaAnual);
        this.cuentaActiva = cuentaActiva;
    }

    @Override
    public void consignar(float cantidad) {
        if (cuentaActiva) {
            super.consignar(cantidad);
        } else {
            System.out.println("Error: la cuenta de ahorros está inactiva.");
        }
    }

    @Override
    public void retirar(float cantidad) {
        if (cuentaActiva) {
            super.retirar(cantidad);
        } else {
            System.out.println("Error: la cuenta de ahorros está inactiva.");
        }
    }

    @Override
    public void extractoMensual() {
        if (numRetiros > 4) {
            comisionMensual += (numRetiros - 4) * 1000;
        }
        if (saldo < 10000) {
            cuentaActiva = false;
        } else {
            cuentaActiva = true;
        }
        super.extractoMensual();
    }

    public void imprimir() {
        super.imprimir();
        System.out.println("Cuenta activa: " + cuentaActiva);
        System.out.println("Número total de transacciones: " + (numConsignaciones + numRetiros));
    }
}
