
// if (condition){
//    Bloque codigo
//}

let edad = parseInt(prompt("Escribe tu edad: "));

if (edad <= 17){
    document.write("<h2>tas chiquitin</h2>");
} else if(edad >18){
    document.write("<h2>tas ruco</h2>");
} else if(edad ===18){
    document.write("<h2>tas ruco</h2>");
}else {
    document.write("<h2>Este no es un numero valido</h2>");
}