let num = prompt("Ingrese un número para generar la serie de Fibonacci:");

if (isNaN(num) || num === null) {
  console.log("Error: Por favor ingrese un número válido.");
} else {
  num = parseInt(num);
  
  let fibArray = [0, 1];
  
  for (let i = 2; i <= num; i++) {
    fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
  }
  
  console.log(`La serie de Fibonacci para el número ${num} es:`);
  console.log(fibArray.slice(0, num + 1));
}