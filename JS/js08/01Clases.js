class Persona {

    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get nombre() {
        return this._nombre;
    }

    set apellido(apellido) {
        this._apellido = apellido;
    }

    get apellido() {
        return this._apellido;
    }
    nombreCompleto(){
        return this._nombre + ' ' + this.apellido;
    }

    //SOBREESCRIBIR EL METODO DE LA CLASE PADRE OBJECT
    toString(){
        return this.nombreCompleto();
    }

}

class Empleado extends Persona {
    constructor(nombre, apellido, departamento) {
        super(nombre, apellido);
        this._departamento = departamento;
    }
    set departamento(departamento) {
        this._departamento = departamento;
    }
    get departamento() {
        return this._departamento;
    }

    //SOBREESCRITURA
    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento;
    }
}


let persona1 = new Persona('Arturo', 'Chavez');
console.log(persona1);

console.log(persona1.nombreCompleto());

let empleado1 = new Empleado('Maria', 'Guajes', 'Salchichoneria');
console.log(empleado1);
console.log(empleado1.nombreCompleto());
console.log(empleado1.toString());

/*
//METODO 4
let persona4 = new Persona('Karen', 'Jimenez');

persona4.nombre = 'Lady';
console.log(persona4.nombre);

persona4.apellido = 'Gaga';
console.log(persona4.apellido);



//METODO 3
let persona3 = new Persona('Karen', 'Jimenez');
console.log(persona3.nombre);

//METODO 2
let persona1 = new Persona('Oscar', 'Kang');
console.log(persona1);
console.log(persona1.nombre);
console.log(persona1.apellido);

//METODO 1
let persona2 = new Persona('Horacio', 'Padilla');
console.log(persona2);

*/