package control;

import java.util.Scanner;

public class EstructuraIf {
	Scanner entrada = new Scanner(System.in);
public void controlIf() {
	//TODO Auto-generated method stub
	/*
	 
	 if (condition) {
	 }
	 
	 */
	long nota = 6;
	if (nota > 5) {
		System.out.println("Nota Aprobada " + nota);
	} else {
		System.out.println("Nota Reprobatoria " + nota);
	}
	System.out.println("Continua el control de flujo...");
}
	
public void divisible() {
	System.out.print("Introduzca un 1er Numero: ");
    int dato1 = entrada.nextInt();
    System.out.print("Introduzca un 2do Numero: ");
    int dato2 = entrada.nextInt();
    if (dato1 % dato2 == 0) {
    	System.out.println("El numero " + dato1 + " es divisible con " + dato2 + " compare");	
	} else {
		System.out.println("El numero " + dato1 + " NO es divisible con " + dato2 + " compare");
	}
}

public void compara() {
	System.out.print("Introduzca un 1er Numero: ");
    int valor1 = entrada.nextInt();
    System.out.print("Introduzca un 2do Numero: ");
    int valor2 = entrada.nextInt();
    if (valor1 > valor2) {
    	System.out.println("El numero " + valor1 + " es mayor que " + valor2 + " compare");
	} else if (valor2 > valor1){
		System.out.println("El numero " + valor2 + " es mayor que " + valor1 + " compare");
	} else {
		System.out.println("El numero " + valor2 + " es igual que " + valor1 + " compare");
	}
}

public void anidado() {
	
	System.out.print("Introduzca un Numero: ");
	int mayor1 = entrada.nextInt();
	
	if (mayor1 > 0) {
		System.out.print("Numero positivo " + mayor1);
	} else if (mayor1 < 0){
		System.out.print("Numero negativo " + mayor1);
	} else
		System.out.print("Numero igual a cero ");
}
}
