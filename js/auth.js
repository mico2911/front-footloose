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
            usuarios.push({
                correo : correo,
                nombre : nombres,
                apellido : apellidos,
                password : password
            })
        }
    }

    console.log(usuarios);
}

function iniciarSesion () {

    console.log(usuarios);
    
    var correo = document.querySelector('.email-input').value;
    var password = document.querySelector('.pwd-input').value;

    if (correo && password) {
        const usuario = usuarios.filter(us => us.correo == correo && us.password == password);

        console.log(usuario);

        if (usuario && usuario.length > 0) {
            console.log('exitoso');
        }
    }
}
  