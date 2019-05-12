// ROl 1 = admin
// rol 2 = cliente

function obtenerListaUsuarios(){
    var listaUsuarios = JSON.parse (localStorage.getItem('listaUsuariosLs'));

    if (listaUsuarios == null){
        listaUsuarios =
        [
          // ID , nombre   ,   apellido  , email          , contraseña ,  fecha nac , rol
            ['1', 'Sebastian','Seminara', 'sebas@gmail.com','asd1234','1991-02-11','1'],
            ['2', 'Jorge','Alberto', 'jorge@gmail.com','asd123','1990-02-11','2'],
            ['3', 'Jorge','Alberto', 'prueba@gmail.com','asd123','1990-02-11','2']
        ]
    }
    return listaUsuarios;
} 

function validarCredenciales(pCorreo, pContrasena){
    var listaUsuarios = obtenerListaUsuarios();
    var bAcceso = false;  // se recorre el correo y la contraseña, y si hay similitudes, entonces permitira el acceso
    
    for(var i = 0 ; i < listaUsuarios.length; i++){ //mientras "i" sea menor que la lista de usuarios, entonces se modifica el ciclo y se recorre la matriz
        
        if(pCorreo == listaUsuarios[i][3] && pContrasena == listaUsuarios [i][4]){
            bAcceso = true;
            sessionStorage.setItem('usuarioActivo', listaUsuarios[i][1] + ' ' + listaUsuarios[i][2]);
            sessionStorage.setItem('rolUsuarioActivo', listaUsuarios[i][6]);
        }
    }

    return bAcceso;
}

