let hora = Number(prompt("Indique la hora "));

if (hora >=6 && hora <=11){
    document.write("Buenos Días");
} else if (hora >= 12 && hora <=18){
    document.write("Buenas Tardes");
} else if (hora >= 19 && hora <=23){
    document.write("Buenas Noches");
} else if (hora >= 0 && hora <=5){
    document.write("Deja Momir");
} else {
    document.write("Eso no existe mijo");
}