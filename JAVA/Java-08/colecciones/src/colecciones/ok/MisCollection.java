package colecciones.ok; // se define el paquete donde se encuentra la clase

import java.util.*; // se importa la clase java.util.* que contiene varias interfaces y clases relacionadas con las colecciones de Java

public class MisCollection {

	// Método principal que se ejecuta cuando se inicia la aplicación
	public static void main(String[] args) {
		MisCollection c = new MisCollection(); // se crea un objeto de la clase MisCollection
		//imprimir(c.listaCollections()); // se llama al método listaCollections para obtener una lista de elementos, y se imprime la lista llamando al método imprimir
		//wrapperClass(); // se llama al método wrapperClass
		//imprimir(c.setCollections());
		mapCollections();
		
	}

	private static void mapCollections() {
		Map miMap = new HashMap();
		
		miMap.put(" un peso", "Josue");
		miMap.put(" dos peso", "Daniel");
		miMap.put(" tres peso", "Uriel");
		miMap.put(" catro peso", "Lizzet");
		miMap.put(" cinco peso", "Hector");
		miMap.put(" sei peso", "Mariana");
		miMap.put(" sete peso", "Oscar");
		
		imprimir(miMap.values());
		imprimir(miMap.keySet());
			

	}
	
	
	
	
	Set setCollections() {
		Set miSet = new HashSet();
		
		System.out.println(" Esta vacio el set? (ANTES) : "+ miSet.isEmpty());
		
		miSet.add("uno");
		miSet.add("dos");
		miSet.add("tres");
		miSet.add("cuatro");
		miSet.add("cinco");
		miSet.add("dos");
		
		int numElementos = miSet.size(); // Se llama al método size() y se almacena su resultado en la variable numElementos
		System.out.println("Tamano del set: "+ numElementos);
		
		System.out.println(" Esta vacio el set? (DESPUES) : "+ miSet.isEmpty());
		
		Object[] miArrayK = miSet.toArray(); // Se llama al método toArray() y se almacena su resultado en el arreglo miArray
		for (int i = 0; i < miArrayK.length; i++) {
			System.out.println("Transformado a Array: "+ miArrayK[i]);
		}
		
		miSet.remove("cinco"); // remueve el string "cinco"
		
		
		return miSet;
	}
	
	
	
	
	// Método que devuelve una lista de elementos
	private List listaCollections() {
		List miLista = new ArrayList(); // se declara una lista vacía utilizando la clase ArrayList
		System.out.println(miLista + " Tamano de la lista antes: "+ miLista.size());
		System.out.println(" Esta vacia?: "+ miLista.isEmpty());
		
		miLista.add(1); // se agrega el valor entero 1 a la lista utilizando el método add
		miLista.add(2); // se agrega el valor entero 2 a la lista utilizando el método add
		miLista.add(3); // se agrega el valor entero 3 a la lista utilizando el método add
		miLista.add(4); // se agrega el valor entero 3 a la lista utilizando el método add
		miLista.add(0, "PATO"); // se agrega el string "PATO" a la lista utilizando el método add
		                       // el 0 al principio hace que se mueva a ese lugar [0, 1, 2, 3 ] en este caso al principio
		
		
		miLista.set(3, miLista); //Lo quita pero lo cambia por "miColection"
		miLista.remove(3); //Lo quita y ya
		
		
		System.out.println(miLista + " Tamano de la lista despues: "+ miLista.size());
		System.out.println(" Esta vacia?: "+ miLista.isEmpty());
		
		boolean e = miLista.contains(2);
		System.out.println("--->  " +e);

		return miLista;

	}

	private static void imprimir(Collection collection) {
		// TODO Auto-generated method stub
		for (Object elementos : collection) {
			System.out.println("elementos"+ elementos);

		}
	}

	static void wrapperClass() {

		byte numeroB = -128;
		System.out.println("Tamano de un byte: " + Byte.SIZE);
		System.out.println("Valor Max: " + Byte.MAX_VALUE);
		System.out.println("Valor Min: " + Byte.MIN_VALUE);
		System.out.println("---> " + numeroB);
		System.out.println("--------------------------");

		int numeroI = -2147483648;
		System.out.println("Tamano de un entero: " + Integer.BYTES);
		System.out.println("Valor Max: " + Integer.SIZE);
		System.out.println("Valor Min: " + Integer.MAX_VALUE);
		System.out.println("Valor Min: " + Integer.MIN_VALUE);
		System.out.println("---> " + numeroI);
		System.out.println("--------------------------");

		long numeroC = -214;
		System.out.println("Tamano de un Long: " + Long.BYTES);
		System.out.println("Valor Max: " + Long.SIZE);
		System.out.println("Valor Min: " + Long.MAX_VALUE);
		System.out.println("Valor Min: " + Long.MIN_VALUE);
		System.out.println("---> " + numeroC);
		System.out.println("--------------------------");

		short numeroK = 5;
		System.out.println("Tamano de un Short: " + Short.BYTES);
		System.out.println("Valor Max: " + Short.SIZE);
		System.out.println("Valor Min: " + Short.MAX_VALUE);
		System.out.println("Valor Min: " + Short.MIN_VALUE);
		System.out.println("---> " + numeroK);
		System.out.println("--------------------------");

		double numeroD = 5;
		System.out.println("Tamano de un Double: " + Double.BYTES);
		System.out.println("Valor Max: " + Double.SIZE);
		System.out.println("Valor Min: " + Double.MAX_VALUE);
		System.out.println("Valor Min: " + Double.MIN_VALUE);
		System.out.println("---> " + numeroD);
		System.out.println("--------------------------");

	}

}

