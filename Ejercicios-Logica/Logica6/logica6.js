const texto = prompt("Introduce una palabra o frase:");
let textoAlReves = "";

for (let i = texto.length - 1; i >= 0; i--) {
  textoAlReves += texto[i];
}

console.log(textoAlReves);