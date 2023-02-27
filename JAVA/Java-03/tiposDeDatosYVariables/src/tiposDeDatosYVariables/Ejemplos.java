package tiposDeDatosYVariables;

public class Ejemplos {


/*
En este ejemplo, se tiene una variable numero de tipo int que contiene el valor 7. La variable esPositivoYMenorQue10 utiliza los operadores lógicos && (AND) para evaluar si el número es mayor que cero y menor que 10. Como ambas condiciones se cumplen, la respuesta es true.

¿Es un número par o múltiplo de 3?

java
*/

int numero = 9;
boolean esParOMultiploDe3 = numero % 2 == 0 || numero % 3 == 0;
System.out.println(esParOMultiploDe3); // salida: true

/*
En este ejemplo, se tiene una variable numero de tipo int que contiene el valor 9. La variable esParOMultiploDe3 utiliza los operadores lógicos || (OR) para evaluar si el número es par o múltiplo de 3. Para determinar si es par, se utiliza el operador % (módulo) para obtener el resto de la división entre el número y 2. Si el resto es cero, significa que el número es par. Para determinar si es múltiplo de 3, se utiliza el operador % para obtener el resto de la división entre el número y 3. Si el resto es cero, significa que el número es múltiplo de 3. Como el número 9 es múltiplo de 3, la respuesta es true.

¿Es un número negativo o igual a cero?

java

*/

int numero2 = 0;
boolean esNegativoOIgualACero = numero2 <= 0;
System.out.println(esNegativoOIgualACero); // salida: true

/*
En este ejemplo, se tiene una variable numero de tipo int que contiene el valor 0. La variable esNegativoOIgualACero utiliza el operador lógico <= (menor o igual que) para evaluar si el número es negativo o igual a cero. Como el número es igual a cero, la respuesta es true.
*/
}