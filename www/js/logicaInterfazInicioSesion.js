document.querySelector('#btnIngresar').addEventListener('click',iniciarSesion);


function iniciarSesion(){ //Cuando se le da click al boton "ingresar", entonces se llama a esta funcion
    var sCorreo = "";
    var sContrasena = "";
    var bAcceso = false; // esta variable almacena el resultado de lo que la funcion "validarCredenciales" me devuelva cuando envio el correo y contraseña

    sCorreo = document.querySelector('#txtCorreo').value;
    sContrasena = document.querySelector('#txtContrasena').value;

    bAcceso = validarCredenciales(sCorreo, sContrasena); // "bAcceso" Va a tener el resultado de la funcion "validarCredenciales" cuando se le pasa el correo y lacontraseña como parametros, de los campos que se leen
    if (bAcceso == true){
        ingresar();
    }
}

function ingresar(){ 
        var rol = sessionStorage.getItem('rolUsuarioActivo');

        switch(rol){
        case '1': //en el caso en que el rol sea 1 (es decir adminnistrador), entonces se redirecciona a la pagina del admin
            window.location.href = 'welcome.html';
        break;

        case '2': 
            window.location.href = 'cliente.html';
        break;

        default:
            window.location.href = 'iniciarsesion.html';
        break
    }

}