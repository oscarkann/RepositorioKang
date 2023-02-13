let lista = [12,5,80,34,7];
lista.sort(
    function(valor1,valor2){
        return valor1 > valor2;
    }
);
console.log(lista);

//SORT
lista.sort();
console.log(lista);


//REVERSE
lista.reverse();
console.log(lista);


//SPLICE
let remover = lista.splice(1,2);
console.log(remover);
console.log(lista);
lista.splice(2,0, 100,200,300);
console.log(lista);


//SHIFT
lista.shift();
console.log(lista);


//POP
lista.pop();
console.log(lista);


//CONCAT
let masE= lista.concat(100, 200, 300);
console.log(masE);


//PUSH
lista.push(100);
console.log(lista);


//JOIN
let msj = lista.join("-");
console.log(msj);


//SLICE
let listaNueva = lista.slice(1, 4);
console.log(listaNueva);


console.log (lista.lenght);
for (let i = 0; i< lista.length; i++){
    console.log("-->"+lista[i]);
}
console.log(lista);
