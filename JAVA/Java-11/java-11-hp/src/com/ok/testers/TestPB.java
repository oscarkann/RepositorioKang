package com.ok.testers;

import com.ok.clases.AlumnoB;
import com.ok.clases.PersonaP;

public class TestPB {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		AlumnoB a = new AlumnoB(123, 8.5, "Armando", 20);
		
		System.out.println(a.getNombre());
		System.out.println(a.getPromedio());
		System.out.println(a.toString());
		a.mostrarDatos();

		PersonaP p = new PersonaP("Maria", 18);
		System.out.println(p.toString());
	}

}
