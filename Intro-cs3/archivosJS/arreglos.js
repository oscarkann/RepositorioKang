let miVariable = 34;

let miArreglo = []; //declaracion literal
let miArreglo01 = new Array(); //por instancia

let miArreglo02 = [31,32,33,34]; //son del mismo tipo, puede almacenar mas de un valor-dato
console.log("dato de miArreglo en el indice 0 - "+ miArreglo02[0]);
console.log("dato de miArreglo en el indice 1 - "+ miArreglo02[1]);
console.log("dato de miArreglo en el indice 2 - "+ miArreglo02[2]);
console.log("dato de miArreglo en el indice 3 - "+ miArreglo02[3]);
console.log("el tamaño o numero de elementos de MiArreglo02 es: "+ miArreglo02.length);

let miArreglo03 = ["Hola","que","tal"];
console.log(miArreglo03[0]);
console.log(miArreglo03[1]);
console.log(miArreglo03[2]);
console.log("El tamaño o numero de elementos de miArreglo03 es: "+ miArreglo03.length);

let miArreglo04 = [{nombre: "Hugo"},{apellido: "Fernandez"},{edad: 23}];
console.log("elemento del arreglo de tipo objeto miArreglo04 " + miArreglo04[0].nombre);
console.log("elemento del arreglo de tipo objeto miArreglo04 " + miArreglo04[1].apellido);
console.log("elemento del arreglo de tipo objeto miArreglo04 " + miArreglo04[2].edad);
console.log("El tamaño o numero de elementos de miArreglo04 es: "+ miArreglo04.length);

let nuevoArreglo00 = [3,6,1,4];
console.log("Orden de nuevoArreglo00 con sort: "+ nuevoArreglo00.sort()); // sort acomoda en orden menor a mayor
console.log("Orden de nuevoArreglo00 metodo pop: "+ nuevoArreglo00.pop()); // pop saca el ultimo elemento
console.log("Orden de nuevoArreglo00 metodo push: "+ nuevoArreglo00.push(10)); // push introduce un nuevo elemento 
console.log("Orden de nuevoArreglo00 metodo reverse: "+ nuevoArreglo00.reverse()); // reverse acomoda de mayor a menor

let otroArreglo = ["Hola","que","Tal","Aguachile"]; //Orden es Alfabetico, primero Mayus luego minus
console.log("Orden de otroArreglo con sort: "+ otroArreglo.sort());
console.log("Orden de otroArreglo metodo pop: "+ otroArreglo.pop());
console.log("Orden de otroArreglo metodo push: "+ otroArreglo.push("rosalia","motomami","guayaba")); //se añade al principio
console.log("Orden de otroArreglo metodo reverse: "+ otroArreglo.reverse());

console.log("javascript"[2]); // 0 es j, 1 es a, 2 es v, y asi sucesivamente :P Se llama arreglo de cadena o string
console.log("javascript".length); // numero de elementos (letras de la palabra javascript)

let matriz = [
              [1,2,3],
              [4,5,6],
              [7,8,9]
              ]
console.log("tamaño: " + matriz.length);
console.log(matriz[1][1]) // es 5 porque es FILA 1, COLUMNA 1 (se empiza desde 0)
console.log(matriz[2][1]) // primero fila, luego columna (8)
console.log(matriz[0][2]) // 3