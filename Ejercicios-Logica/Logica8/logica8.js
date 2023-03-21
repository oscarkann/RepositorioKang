// Crear un array vacío para almacenar los números ingresados
let numeros = [];

// Solicitar al usuario que ingrese 10 números por consola y almacenarlos en el array
for (let i = 0; i < 10; i++) {
  let numero = prompt(`Ingresa el número ${i + 1}:`);
  numeros.push(Number(numero)); // Convertir a número y agregar al array
}

// Función para determinar si un número es primo
function esPrimo(numero) {
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return numero !== 1;
}

// Crear un nuevo array para almacenar los números primos
let primos = [];

// Recorrer el array original y mover los números primos al principio
for (let i = 0; i < numeros.length; i++) {
  if (esPrimo(numeros[i])) {
    primos.unshift(numeros[i]);
  } else {
    primos.push(numeros[i]);
  }
}

// Mostrar el array original con índices
console.log("Array original:");
for (let i = 0; i < numeros.length; i++) {
  console.log(`[${i}] => ${numeros[i]}`);
}

// Mostrar el array de números primos al principio con índices
console.log("Array con números primos al principio:");
for (let i = 0; i < primos.length; i++) {
  console.log(`[${i}] => ${primos[i]}`);
}