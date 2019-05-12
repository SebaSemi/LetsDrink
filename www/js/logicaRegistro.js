document.querySelector('.divError').classList.add('ocultar');

document.querySelector('#btnRegistrarPersona').addEventListener('click', registrar, redireccion);
mostrarDatos();


function registrar() {

    var bExisteError = validar(),
        aNuevaPersona = [],
        sEmail = '',
        sNombre = '';
        sContrasena ='';

    if (bExisteError === false) { //cuando no exista error, se pueda registrar
        sEmail = document.querySelector('#txtEmail').value;
        sNombre = document.querySelector('#txtNombre').value;

        aNuevaPersona.push(sNombre, sEmail);
        registrarPersonaEnSistema(aNuevaPersona);
        redireccion();
        mostrarDatos();
 
        
    } else {   // si hay error, deberia mostrar el divError
        document.querySelector('.divError').classList.remove('ocultar');
        document.querySelector('.divError').classList.add('mostrar');
    }

}

function mostrarDatos() {
    var personas = getListaPersonas(); // la lista de personas que retorna la "listaRegistro", va a pasar a la "logicaRegistro"  y se va a almacenar en la variable local 'personas'.
    tbody = document.querySelector('#tblPersonas tbody');


    tbody.innerHTML = '';

    for (var i = 0; i < personas.length; i++) {
        var fila = document.createElement('tr'), //nos crea un elemento HTML usando solo la etiqueta
            celdaCedula = document.createElement('td'),
            celdaNombre = document.createElement('td');

        celdaCedula.innerHTML = personas[i][0];
        celdaNombre.innerHTML = personas[i][1];

        fila.appendChild(celdaCedula);
        fila.appendChild(celdaNombre);

        tbody.appendChild(fila);
    }
}

function validar() {
    var bError = false,
        inputsTexto = document.querySelectorAll('input[type=text], input[type=password]');
    for (var i = 0; i < inputsTexto.length; i++) {
        if (inputsTexto[i].required == true && inputsTexto[i].value.length === 0) { //el usuario no escribio nada
            inputsTexto[i].classList.add('error');
            bError = true;
            
        } else {
            inputsTexto[i].classList.remove('error');
        }
    }
    return bError;
}

function redireccion(){
    window.open("cliente.html", "_self");
}