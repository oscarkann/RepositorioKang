package com.generation.ok.clases;

public class AreaPerimetro {

	public double areaCuadrado(double lado) {
		double area = lado * lado;
		return area;
	}
	
	public double perimetroCuadrado (double lado) {
		double perimetro = lado * 4;
		return perimetro;
	}
	public double areaTriangulo(double base, double altura) {
		
		return (base*altura)/2;
	}
	public double perimetroTriangulo(double ladoA, double ladoB, double ladoC) {
		return (ladoA+ladoB+ladoC);
	}
	public double areaCirculo(double radio) {
		return (radio*radio)*3.14;
	}
	public double perimetroCirculo(double radio) {
		return radio * 3.14 * 2;
	}
}
