// va a recibir los datos de logicaInterfaz y los guarda
var listaPersonas = 
[
    //usuario -- email  --
    // ['Esteban','u1@gmail.com'],
    // ['Usuario2','u2@gmail.com'],
    // ['Usuario3','u3@gmail.com'],
    // ['Usuario4','u4@gmail.com'],

];


function registrarPersonaEnSistema(pNuevoUsuario){

    var listaPersonas = getListaPersonas();

    listaPersonas.push(pNuevoUsuario);
    
    localStorage.setItem('listaPersonasLS', JSON.stringify(listaPersonas)); // 'listaPersonasLS' = "key" dentro de local storage, y "listaPersonas" = "value"

}

function getListaPersonas(){
    var listaPersonasLocal = JSON.parse(localStorage.getItem('listaPersonasLS'));
    if(listaPersonasLocal === null){
        listaPersonasLocal = listaPersonas; 
    } 

    return listaPersonasLocal;
}