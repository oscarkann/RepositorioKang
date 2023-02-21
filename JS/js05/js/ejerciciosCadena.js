//EJERCICIO 1

let Unidadestotales = 130;
let GPAacumulativo = 3.0;

//NORMAL
if (GPAacumulativo > 2.0) {
    if (Unidadestotales >= 120) {
        console.log("Puede graduarse!")
    }
}
//OPTIMIZADO
if (GPAacumulativo > 2.0 && Unidadestotales >= 120) {
    console.log("Puede graduarse!");
}

//EJERCICIO 2

let cspCalificacion = 90;
let progCalificacion = 75;

//NORMAL
if (cspCalificacion >= 75) {
    console.log("Eres elegible para la grad!")
    if (progCalificacion >= 75) {
        console.log("Eres elegible para la grad")
    }
}

//OPTIMIZADO
let cspCalificacion1 = 74;
let progCalificacion1 = 75;

if (cspCalificacion1 >= 75 && progCalificacion1 >= 75) {
    console.log("Eres elegible para graduarte!");
} else {
    console.log("Reprobaste chamaco")
}

//EJERCICIO 3

let texto = "Hola Mundo";
let palabras = texto.split(" "); // dividir en palabras

for (let i = 0; i < palabras.length; i++) {
    palabras[i] = palabras[i].split("").join("."); // agregar puntos a cada palabra
}
texto = palabras.join(" "); // unir las palabras en un solo string
console.log(texto); // "H.o.l.a M.u.n.d.o"
