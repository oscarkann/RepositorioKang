/*

Que encontramos en el arbol del DOM?

- Node: es la unidad mas basica dentro del documento. Puede ser una etiqueta, un texto dentro de una etiqueta o un comentario, etc.

    <title> NODO
        Manipulacion DOM // Es un nodo, pero es hijo del title
    </title>


- Document: Tambien es un nodo, del tipo documento, es el nodo raiz a partir del cual se desarrollan o generan todos los demas nodos.

- Element: Son todos aquellos definidos por etiquetas <div>, <img>, <h1>, <p>

- Attributes: Nodos que dan informacion asociada al tipo de elemento

- Comentario: Comentarios y otros elementos que estan dentro del HTML, son considerados nodos.

Como leer nodos de mi Document Object Model (DOM)

Metodos tradicionales (que se usan en versiones antiguas de JS)
            

            - document.getElementById (BOTON SUMA)
            - document.getElementByTagName (<button>)
            - document.getElementByClassName (Clase botones)





var elementoID = document.getElementById("botonSuma");
console.log(elementoID);

var elementoEtiqueta = document.getElementsByTagName("button");
console.log(elementoEtiqueta);
console.log("Este es el primer elemento de mi coleccrion de botones", elementoEtiqueta[0]);

var elementoClassName = document.getElementsByClassName("botones")




Metodos recientes

    -document.querySelector(#botonSuma)
    -document.querySelectorAll(.botones)



var unElemento = document.querySelector("#input1")
console.log(unElemento);

var variosElementos = document.querySelectorAll(".botones");
console.log(variosElementos);

*/

//CREACION DE UNA ETIQUETA DEL TIPO IMAGEN
var imagenPerrito = document.createElement("img");

//CREACION ATRIBUTOS A LA ETIQUETA
imagenPerrito.src = "https://www.petdarling.com/wp-content/uploads/2021/01/cachorros.jpg";
imagenPerrito.alt = "Foto de Perrito tierno";
imagenPerrito.style.width = "150px";
imagenPerrito.style.borderRadius = "150px";

//PONER ELEMENTOS O NODOS EN EL HTLM
document.body.append(imagenPerrito);



//ACTUALIZAR NODOS
//1er paso: identificar el nodo que quiero cambiar
// IDENTIFICAR el nodo con un metodo para tomarlo (ger Elemento o QuerySelector y modificarlo con inner.HTML)
//2do paso: Modificar el nodo (inner)


var resultadoQueCambia = document.getElementById("resultado");

resultadoQueCambia.innerHTML = "Saludos, cambie el texto juas juas";








//CREACION DE NODOS

//DE AQUI SACAS LOS NUMEROS
var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");

// AQUI LIGAS BOTONES
var botonSuma = document.getElementById("botonSuma");
var botonResta = document.getElementById("botonResta");
var botonMultiplicacion = document.getElementById("botonMultiplicacion");
var botonDivision = document.getElementById("botonDivision");

// AQUI VA A APARECER EL RESULTADO
var resultado = document.getElementById("resultado");

//CONSTRUIMOS LAS FUNCIONES DE NUESTRA CALCULADORA

function suma(){
    let valor1 = parseInt(input1.value); //numero
    let valor2 = parseInt(input2.value); //numero
    let suma = valor1 + valor2; //calculo la suma
    resultado.innerHTML = suma; //pongo el resultado en su lugar
}

function resta(){
    let valor1 = parseInt(input1.value); //numero
    let valor2 = parseInt(input2.value); //numero
    let resta = valor1 - valor2; //calculo la suma
    resultado.innerHTML = resta; //pongo el resultado en su lugar
}

function multiplicacion(){
    let valor1 = parseInt(input1.value); //numero
    let valor2 = parseInt(input2.value); //numero
    let multiplicacion = valor1 * valor2; //calculo la suma
    resultado.innerHTML = multiplicacion; //pongo el resultado en su lugar
}

function division(){
    let valor1 = parseInt(input1.value); //numero
    let valor2 = parseInt(input2.value); //numero
    let division = valor1 / valor2; //calculo la suma
    resultado.innerHTML = division; //pongo el resultado en su lugar
}


/*
COMO SE CREA UN EVENTO (addEventlistener)

    - node.addEventListener ("evento a escuchar", lo que quiero que haga cuando se escuche)

        - node (nodo donde aterrizo el evento)
        - addEventListener (palabra reservada para usar el evento)
        - evento a escuchar (click, mouseover, etc)
        - Lo que quiero que haga (la llamada de la funcion)

*/

botonSuma.addEventListener("click", suma);
botonResta.addEventListener("click", resta);
botonMultiplicacion.addEventListener("click", multiplicacion);
botonDivision.addEventListener("click", division);
/*

Manipulacion del DOM


    - Metodos para acceder a elementos 

        - document.getElementById
        - document.getElementsByTagName
        - document.getElementosByClassName


    - Metodos para crear elementos  

        - document.createElement(etiqueta)
        - document.createTextNode(texto) - Investigar


    - Metodos para insertar elementos

        - parentElement.append
        - parentElement.insertBefore
        - parentElement.insertAdjacentElement


    - Metodos para modificar elementos

        - node.outerHTML (leer o referenciar el elemento)
        - node.innerHTML (modificar el elemento)


*/

//Paso 1: Definir con que voy a interactuar (almacenado)
const textoAModificar = document.querySelector("#h1")

function cambiarColor(color){
    textoAModificar.style.color = color;
}