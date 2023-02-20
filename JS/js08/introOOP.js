let persona = {
    nombre : 'Oscar',
    apellido : 'Kang',
    nombreCompleto : function (){
        return 'el nombre completo es ' + this.nombre + ' ' + this.apellido; 
    }
}

console.log(persona);
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.nombreCompleto());