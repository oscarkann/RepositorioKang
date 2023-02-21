//EJERCICIO 1

let Nombresukis = ["Maria", "Antony", "Joy", "Juan"];

//EJERCICIO 1A

Nombresukis.push("Oscar");
console.log("La lista actual es: " + Nombresukis);

//EJERCICIO 1B

function RevisNombreExiste(Nombresukis) {
    return Nombresukis.includes("Maria");
}
//RevisNombreExiste("Maria"); // regresa true
//RevisNombreExiste("Oscar"); // regresa true
//RevisNombreExiste("John"); // regresa false

console.log("Maria se encuentra en la lista? " + RevisNombreExiste("Maria"));

//EJERCICIO 1C

let NuevosNombres = ["Oscar", "Carlos", "Antonio", "Susana", "Joy"];

function EncontrarNombresComunes(nombres1, nombres2) {
    return nombres1.filter(function (nombre) {
        return nombres2.includes(nombre);
    });
}
console.log("Los nombres comunes son: " + EncontrarNombresComunes(Nombresukis, NuevosNombres));

//EJERCICIO 1D

function getLengths(namesuki) {
    let lengths = [];
    for (let bagresuko = 0; bagresuko < namesuki.length; bagresuko++) {
        lengths.push(namesuki[bagresuko].length);
    }
    return lengths;
}

// Call the function to get the lengths of the names in Nombresukis
let nameLengths = getLengths(Nombresukis);

console.log("La cantidad de letras por nombre es: " + nameLengths);

//EJERCICIO 2

/*

false || (true && false) evaluates to false. This is because false OR anything will always evaluate to the value of the other thing, since OR requires at least one of the things to be true.

true || (11 + 12) evaluates to true. This is because true OR anything will always evaluate to true.

(31 + 22) || true evaluates to 53. This is because anything OR true will always evaluate to true, and in this case, the left side of the OR evaluates to a number which is considered true in a boolean context.

true && (1 + 7) evaluates to 8. This is because true AND anything will always evaluate to the other thing, since AND requires both things to be true.

false && (3 + 4) evaluates to false. This is because false AND anything will always evaluate to false.

(1 + 2) && true evaluates to true. This is because both things are considered true in a boolean context, and AND requires both things to be true.

(32 * 4) >= 129 evaluates to true. This is because 32 * 4 is equal to 128, and 128 >= 129 is false, but the not operator negates this to true.

false !== !true evaluates to false. This is because !true evaluates to false, so false !== false is false.

true === 4 evaluates to false. This is because true is a boolean value, and 4 is a number, so they are of different types and cannot be equal.

false === (847 === '847') evaluates to true. This is because 847 === '847' is false, and false === false is true.

false === (887 == '887') evaluates to true. This is because 887 == '887' is true, and false === true is false.

(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false evaluates to true. This is because one of the OR operators must evaluate to true, and in this case, the first OR operator is true because !true is false, the second OR operator is true because !(100 / 5) === 20 is true, and the third OR operator is true because 328 / 4 is equal to 82. Therefore, the entire expression evaluates to true.≈
*/

//EJERCICIO 3

function RangoNumeros(num) {
    function numberRange(num) {
        if (num >= 0 && num <= 25) {  // If the number is between 0 and 25 (inclusive)
            return `${num} is between 0 and 25`;
        } else if (num >= 26 && num <= 100) {  // If the number is between 26 and 100 (inclusive)
            return `${num} is between 26 and 100`;
        } else if (num > 100) {  // If the number is greater than 100
            return `${num} is greater than 100`;
        } else {  // If the number is less than 0
            return `${num} is less than 0`;
        }
    }


    console.log(RangoNumeros(25));   // '25 is between 0 and 25'
    console.log(RangoNumeros(75));   // '75 is between 26 and 100'
    console.log(RangoNumeros(125));  // '125 is greater than 100'
    console.log(RangoNumeros(-25));  // '-25 is less than 0'

