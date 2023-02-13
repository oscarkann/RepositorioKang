let miVariable = 5;
let miArrayii = [2,3,4,5,6,];
//let miArray = new Array();

console.log("miArray" + miArrayii[0]);
console.log("miArray" + miArrayii[1]);

let miArray1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(miArray1[0][1]);
console.log(miArray1[0][2]);
console.log(miArray1[2][1]);
console.log(miArray1[1][2]);
console.log(miArray1[1][0]);

console.log("todo el indice " + miArray1[0]);
console.log("todo el indice " + miArray1[1]);
console.log("todo el indice " + miArray1[2]);

/************************************* CICLO for **************************************/

for (let i; i < 10; 1++) { //es un numero entre 0 y 10 (rango) + el imcremento
    console.log("imprimiendo i " + i)
}


let miArray = [2, 3, 4, 5, 6,];

for (let i = 0; i <= 5; 1++) {
    console.log("imprimiendo miArray -> " + miArray);
}

let miArrayo1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let matrizR= [
    [],[],[]
]

for (let i = 0; 1 < 3; i++) {
    for (let j = 0; j < 3; j++) {
        matrizR[i][j]= miArrayo1[i][j] * miArrayo1[i][j];
    }
    console.log("asies  "+ matrizR);
}

console.log(matrizR);







for (let i = 0; 1 < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log("imprimiendo la matriz1 -> " + miArrayo1[i][j]);
    }
}

/**************************** while **********************************/

let contador = 0;
while(contador <= 10){
    console.log(contador);
    contador++;
}