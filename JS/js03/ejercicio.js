//CON IF

let dia = Number (prompt ("Indica el día"));
if (dia === 1) {
document.write ("Lunes");
} else if (dia === 2) {
document.write ("Martes");
} else if (dia === 3) {
document.write ("Miercoles");
} else if (dia === 4) {
document.write("Jueves");
} else if (dia === 5) {
document.write("Viernes");
} else if (dia === 6) {
document.write ("Sabado");
} else if (dia === 0) {
document.write ("Domingo");
} else {
document. write ("Número de día invalido");
}


// CON &&

let numeroDia = parseInt(prompt("Escribe el Numero correspondiente al dia de la semana donde 0 es Domingo y Sabado 6: "));
let diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

if (numeroDia >= 0 && numeroDia <= 6) {
    document.write(diasSemana[numeroDia]);
} else {
    document.write("Inválido");
}

//CON SWITCH
let diaNúmero = parseInt(prompt("Escribe el Numero correspondiente al dia de la semana donde 0 es Domingo y Sabado 6: "));

switch (diaNúmero) {
    case 0:
        document.write("Domingo");
        break;
    case 1:
        document.write("Lunes");
        break;
    case 2:
        document.write("Martes");
        break;
    case 3:
        document.write("Miércoles");
        break;
    case 4:
        document.write("Jueves");
        break;
    case 5:
        document.write("Viernes");
        break;
    case 6:
        document.write("Sábado");
        break;
    default:
        document.write("Número de día inválido, selecciona un numero del 1 al 6");
}

// EXPLICACION DE && y ||

let q = false;
let p = true;
if (q || p) {console.log("true")};
if (q && p) {console.log("false")};

