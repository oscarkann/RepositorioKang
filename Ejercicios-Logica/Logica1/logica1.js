// Le pedimos los números al usuario y los guardamos en variables
let num1 = parseInt(prompt("Ingresa el primer número:"));
let num2 = parseInt(prompt("Ingresa el segundo número:"));
let num3 = parseInt(prompt("Ingresa el tercer número:"));

// Comparamos los números para ordenarlos de mayor a menor
let mayor, medio, menor;
if (num1 >= num2 && num1 >= num3) {
    mayor = num1;
    if (num2 >= num3) {
        medio = num2;
        menor = num3;
    } else {
        medio = num3;
        menor = num2;
    }
} else if (num2 >= num1 && num2 >= num3) {
    mayor = num2;
    if (num1 >= num3) {
        medio = num1;
        menor = num3;
    } else {
        medio = num3;
        menor = num1;
    }
} else {
    mayor = num3;
    if (num1 >= num2) {
        medio = num1;
        menor = num2;
    } else {
        medio = num2;
        menor = num1;
    }
}

// Imprimimos los números ordenados de mayor a menor
console.log("Los números ordenados de mayor a menor son:", mayor, medio, menor);

// Imprimimos los números ordenados de menor a mayor
console.log("Los números ordenados de menor a mayor son:", menor, medio, mayor);

// Comparamos los números para ver si son iguales
if (num1 === num2 && num1 === num3) {
    console.log("Los tres números son iguales");
}