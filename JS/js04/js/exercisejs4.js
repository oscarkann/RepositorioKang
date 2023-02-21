let PeopleBank = ["Sofia", "David", "Juan"];
console.log("Las personas esperando el banco son: " + PeopleBank);

PeopleBank.push("Sara", "Agustin");
console.log("The current queue is: " + PeopleBank);

PeopleBank.splice(2, 0, "Renata");
console.log("The current queue is: " + PeopleBank);

PeopleBank.push("Elena");
console.log("The current queue is: " + PeopleBank);

//EJERCICIO 2

for (var i = 1; i <= 5; i++) {
    var fila = "";
    for (var j = 1; j <= i; j++) {
        fila = fila + "* ";
    }
    console.log(fila);
}

//EJERCICIO 3 - A

let xValue = 99;
while (xValue >= 0) {
    console.log(xValue);
    xValue = xValue - 0.5;
}

//EJERCICIO 3 - B


var yValue = 1;
while (yValue <= 100) {
    if (yValue % 2 !== 0) {
        console.log(yValue);
    }
    yValue++;
}

//EJERCICIO 3 - C

function Numerillos(n) {
    var i = 1;
    while (i <= n) {
        console.log("[" + i + "]");
        i++;
    }
}

Numerillos(6);

//EJERCICIO 3 - D

function sumas(n){
    var i = 1;
    suma=0;
    while (i <= n) {

        suma = suma + i;
        i++;
    }
    console.log("la suma es: "+suma);

}
sumas(5);