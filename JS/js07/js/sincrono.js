// JavaScript sincrono

alert("cohorte 23");
console.log("Hola, buen dia");
alert("Dia del gatito");
console.log("Adios");

/*
setTimeout(

    function () {
        console.log("Hola mundo, con retraso");
    }, 0)

console.log("sorpresa");
*/

const myCallback = () => console.log("Hola mundo con retraso");
setTimeout(myCallback);

console.log("sorpresa");

