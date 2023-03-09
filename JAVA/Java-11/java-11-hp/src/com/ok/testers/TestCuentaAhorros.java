package com.ok.testers;

import com.ok.clases.CuentaAhorros;
import com.ok.clases.CuentaCorriente;

public class TestCuentaAhorros {

		public static void main(String[] args) {
		CuentaAhorros cuentaAhorros = new CuentaAhorros(15000, 2.5f, false);
		cuentaAhorros.consignar(2000);
		cuentaAhorros.retirar(5000);
		cuentaAhorros.extractoMensual();
		cuentaAhorros.imprimir();
		CuentaCorriente cuentaCorriente = new CuentaCorriente(5000, 3.0f);
	    cuentaCorriente.consignar(1000);
	    cuentaCorriente.retirar(8000);
	    cuentaCorriente.consignar(5000);
	    cuentaCorriente.extractoMensual();
	    cuentaCorriente.imprimir();
	}
}