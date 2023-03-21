let tempCelsius;
let tempFarenheit;
let tempKelvin;

do {
  tempCelsius = Number(prompt("Ingrese la temperatura en grados Celsius:"));
} while (isNaN(tempCelsius));

tempFarenheit = (tempCelsius * 9/5) + 32;
tempKelvin = tempCelsius + 273.15;

console.log(`La temperatura en grados Farenheit es ${tempFarenheit.toFixed(2)}°F`);
console.log(`La temperatura en grados Kelvin es ${tempKelvin.toFixed(2)} K`);