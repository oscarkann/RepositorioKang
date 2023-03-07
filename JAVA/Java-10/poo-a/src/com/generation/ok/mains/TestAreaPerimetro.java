package com.generation.ok.mains;

import com.generation.ok.clases.AreaPerimetro;
import com.generation.ok.clases.FigurasGeometricas;

public class TestAreaPerimetro {
public static void main(String[] args) {
	
		AreaPerimetro ap= new AreaPerimetro();
		FigurasGeometricas fg = new FigurasGeometricas();
		
		//CUADRADO AREA
		fg.setArea(ap.areaCuadrado(5));
		System.out.println("AREA CUADRADO--> "+fg.getArea());
		
		//CUADRADO PERIMETRO
		fg.setPerimetro(ap.perimetroCuadrado(5));
		System.out.println("PERIMETRO CUADRADO--> "+ fg.getPerimetro());
		
		//TRIANGULO AREA
		fg.setArea(ap.areaTriangulo(5, 5));
		System.out.println("AREA TRIANGULO--> "+fg.getArea());
				
		//TRIANGULO PERIMETRO
		fg.setPerimetro(ap.perimetroTriangulo(5, 5, 5));
		System.out.println("PERIMETRO TRIANGULO--> "+ fg.getPerimetro());
		
		//CIRCULO AREA
		fg.setArea(ap.areaCirculo(5));
		System.out.println("AREA CIRCULO--> "+fg.getArea());
						
		//CIRCULO PERIMETRO
		fg.setPerimetro(ap.perimetroCirculo(5));
		System.out.println("PERIMETRO CIRCULO--> "+ fg.getPerimetro());
	}

}
