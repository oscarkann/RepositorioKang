//Adivinar este numero
let secreto = 9;
//Aqui van los errores
let errores = [];
// Función que se repite hasta que adivines el numero
function adivinar() {
    // Pide numero al usuario entre 1 y 100 y lo guarda en num
    const num = parseInt(prompt("Ingresa un numero entre 1 - 100"));
    // Comprueba que el numero se encuentra en el rango
    if (num > 0 && num < 100) {
        //Compara si el numero es igual al numero secreto
        if (num === secreto) {
            //Si adivina el numero se cierra la función y te imprime tus errores
            alert(":D")
            console.log("Felicidades, adivinaste el numero secreto");
            //Imprime el array con tus errores
            console.log("Tus errores: " + errores);
        } else {
            //Imprime en pantalla que te equivocaste
            alert("Ups, El numero es incorrecto, vuelve a intentarlo!");
            //Imprime en consola que te equivocaste
            console.log("Ups, El numero es incorrecto, vuelve a intentarlo!");
            //meter numeros incorrectos en el array errores.
            errores.push(num);
            //Volver a llamar a la función hasta que adivines
            return adivinar();
        }
    } else {
        alert("Ingresa un numero valido! entre 1 - 100");
        return adivinar();
    }
}
adivinar();

//CON CLASES

class AdivinarNumero {
    constructor(secreto) {
        this.secreto = secreto;
        this.errores = [];
    }

    adivinar() {
        const num = parseInt(prompt("Ingresa un numero entre 1 - 100"));

        if (this.validarNumero(num)) {
            if (num === this.secreto) {
                alert(":D");
                console.log("Felicidades, adivinaste el numero secreto");
                console.log("Tus errores: " + this.errores.join(", "));
            } else {
                alert("Ups, El numero es incorrecto, vuelve a intentarlo!");
                console.log("Ups, El numero es incorrecto, vuelve a intentarlo!");
                this.errores.push(num);
                this.adivinar();
            }
        } else {
            alert("Ingresa un numero valido! entre 1 - 100");
            this.adivinar();
        }
    }

    validarNumero(num) {
        return Number.isInteger(num) && num > 0 && num < 100;
    }
}

const juego = new AdivinarNumero(9);
juego.adivinar();


/*

//CLASES 2

//clase adivinador


class Adivinador5000{
    constructor (numSec){
        this.intentos=[];
        this.numSecreto = numSec;
        this.intentoActual;
    }
//metodo que compara el numero ingresado con el numero secreto
    comparar(){
        if(this.intentoActual === this.numSecreto){
            alert("Excelente adivinaste el numero "+ this.intentoActual + " despues de estos intentos " + this.intentos);
            return false;
        }
        else{
            alert("Estas equivocado vuelve a intentarlo ");
            return true;
        }
    }

//metodo que solicita el numero y verifique que esté entre 0 y 100
    pideNumero(){
        this.intentoActual = Number(prompt("Introduce un numero del 1-100: "));
        if((this.intentoActual) > 0 && (this.intentoActual<=100)){
            this.intentos.push(this.intentoActual);
        }
        else{
            alert("Error en el ingreso del mumero intentalo otra vez: ");
            this.pideNumero();
       }
    }
}



//Instancia del objeto pasando solo el numero secreto
let adiv = new Adivinador5000(45);

//se hará hasta que se encuentre el numero secreto

do{
    adiv.pideNumero();

}while(adiv.comparar())


//OPCION 2


//El numero secreto sera el 9
let secretNumber = 9 // Generamos un número aleatorio del 1 al 100
let guessedNumbers = []; // Creamos un array para almacenar los números que el usuario ha intentado adivinar

function guessNumber() {
    let guess = prompt("Adivina el número secreto (entre 1 y 100):"); // Pedimos al usuario que ingrese un número

    // Verificamos si el número ingresado es válido
    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert("Por favor, ingrese un número válido entre 1 y 100.");
        return guessNumber(); // Volvemos a llamar a la función para solicitar otro número
    }

    guessedNumbers.push(guess); // Agregamos el número adivinado al array de números intentados

    if (guess == secretNumber) {
        console.log("Felicidades, adivinaste el número secreto.");
        console.log("Números intentados: " + guessedNumbers.join(", "));
    } else {
        console.log("Ups, el número secreto es incorrecto, vuelve a intentarlo.");
        guessNumber(); // Volvemos a llamar a la función para solicitar otro número
    }
}

guessNumber(); // Iniciamos el juego llamando a la función guessNumber()
*/