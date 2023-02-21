fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//.then toma la informacion
//resultado es el nombre de la función que convierte la información en lo que necesites
//por ejemplo .json para transformarlo en formato json;
.then(resultado => resultado.json())
//regularmente cuando tranformas la informacion te devuelve otra promesa 
//a la que debes volver a usar el .then
.then(response =>{
    console.log(response);
})