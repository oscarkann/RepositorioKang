package tiposDeDatosYVariables;

public class Java4 {

	public static void main(String[] args) {
		
	int edad = 18;
	boolean tieneLicencia = true;
	if (edad >= 18 && tieneLicencia) {
	    System.out.println("Puede conducir un coche");
	} else {
	    System.out.println("No puede conducir un coche");
	}
	
	String nombre = "Juan";
	String apellido = "Pérez";
	if (nombre.equals("Juan") || apellido.equals("Pérez")) {
	    System.out.println("El usuario es Juan Pérez");
	} else {
	    System.out.println("El usuario no es Juan Pérez");
	}
	
	boolean esVerdadero = true;
	if (!esVerdadero) { //o es true o es false
	    System.out.println("La condición es falsa");
	} else {
	    System.out.println("La condición es verdadera");
	}
	
	
		//Verificar si un número es par y positivo:
	
		int num = 6;
		boolean parYPositivo = true;
		System.out.println(num > 0 && num%2 == 0);

		//Verificar si un número está dentro de un rango específico
		
		int num2 = 10;
		if (num2 >= 11 || num2 < 0) {
		System.out.println("La condición esta fuera del rango");
		} else {
			System.out.println("La condición esta dentro del rango");
		}

		//Verificar si una cadena es igual a otra o no
		
		String cadena1 = "Hola";
		String cadena2 = "Hola";
		
		if (cadena1 == cadena2) {
			System.out.println("es igual");
		} else {
			System.out.println("no es igual");
		}
		
	
}
}


