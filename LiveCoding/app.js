function dona (noh, bryan){

    let pato = [];
    for (let i = 0; i < noh.length; i++) {
        if (noh[i].length > bryan.length) { 
        pato.push(noh[i]);
        }
    }
    return pato;
}

function guayaba() {

    const naranja = document.querySelector("#naranja").value;
    const kang = ['manzana', 'wanabana', 'guadalajara', 'tunisianWoman', 'BryanAlejandroNohHernandez'];
    console.log(dona(kang, naranja));

}