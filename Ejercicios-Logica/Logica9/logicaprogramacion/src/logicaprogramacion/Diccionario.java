package logicaprogramacion;

import java.util.HashMap;
import java.util.Scanner;

public class Diccionario {
    public static void main(String[] args) {
        // Crear el diccionario
        HashMap<String, String> diccionario = new HashMap<>();
        diccionario.put("hola", "hello");
        diccionario.put("adios", "goodbye");
        diccionario.put("casa", "house");
        diccionario.put("perro", "dog");
        diccionario.put("gato", "cat");
        diccionario.put("arbol", "tree");
        diccionario.put("libro", "book");
        diccionario.put("coche", "car");
        diccionario.put("telefono", "phone");
        diccionario.put("computadora", "computer");
        diccionario.put("amigo", "friend");
        diccionario.put("familia", "family");
        diccionario.put("comida", "food");
        diccionario.put("ropa", "clothes");
        diccionario.put("jugar", "play");
        diccionario.put("trabajar", "work");
        diccionario.put("aprender", "learn");
        diccionario.put("estudiar", "study");
        diccionario.put("viajar", "travel");
        diccionario.put("dormir", "sleep");

        // Solicitar al usuario una palabra en español
        Scanner scanner = new Scanner(System.in);
        System.out.print("Ingrese una palabra en español: ");
        String palabra = scanner.nextLine();

        // Buscar la palabra en el diccionario y imprimir su traducción si se encuentra
        String traduccion = diccionario.get(palabra);
        if (traduccion != null) {
            System.out.println("La traducción de \"" + palabra + "\" es \"" + traduccion + "\".");
        } else {
            System.out.println("La palabra \"" + palabra + "\" no se encuentra en el diccionario.");
        }
    }
}