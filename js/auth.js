var usuarios = [
    {
      "correo": "juan.perez@example.com",
      "nombre": "Juan",
      "apellido": "Perez",
      "password": "12345"
    },
    {
      "correo": "ana.martinez@example.com",
      "nombre": "Ana",
      "apellido": "Martinez",
      "password": "abcde"
    },
    {
      "correo": "luis.gomez@example.com",
      "nombre": "Luis",
      "apellido": "Gomez",
      "password": "password123"
    }
];

function registrarse () {
    var correo = document.querySelector('.correo-input').value;
    var nombres = document.querySelector('.nombres-input').value;
    var apellidos = document.querySelector('.apellidos-input').value;
    var password = document.querySelector('.password-input').value;

    if (correo && nombres && apellidos && password) {
        const usuario = usuarios.filter(us => us.correo == correo);

        console.log(usuario);

        if (usuario && usuario.length > 0) {
            console.log('correo registrado');
        } else {
            var usuariosLocalStorage = localStorage.getItem("usuarios");
            var usuariosArray        = usuariosLocalStorage ? JSON.parse(usuariosLocalStorage) : usuarios;

            usuariosArray.push({
                correo : correo,
                nombre : nombres,
                apellido : apellidos,
                password : password
            })

            localStorage.setItem('usuarios', JSON.stringify(usuariosArray));
        }
    }
}

function iniciarSesion () {
    var correo = document.querySelector('.email-input').value;
    var password = document.querySelector('.pwd-input').value;

    if (correo && password) {
        var usuariosLocalStorage = localStorage.getItem("usuarios");
        var usuariosArray        = usuariosLocalStorage ? JSON.parse(usuariosLocalStorage) : usuarios;
        const usuario = usuariosArray.filter(us => us.correo == correo && us.password == password);

        if (usuario && usuario.length > 0) {
            localStorage.setItem('autenticado', true);
        }
    }
}
  