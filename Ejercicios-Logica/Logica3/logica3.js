let num = prompt("Introduce un número:");

if (isNaN(num)) {
  document.getElementById("resultado").innerHTML = "Error: no has introducido un número válido.";
} else {
  num = parseInt(num);
  let factorial = 1;
  for (let i = 2; i <= num; i++) {
    factorial *= i;
  }
  document.getElementById("resultado").innerHTML = `El factorial de ${num} es ${factorial}.`;
}