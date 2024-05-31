cargarUsuarios();

//Validaciones
function iniciarSesion(){
// Obtener datos del formulario
const email = document.getElementById("emailInput").value.trim();
const password = document.getElementById("passwordInput").value.trim();

let hayErrores = false;

//Validar Campos 
//Email

if (email === "") {
    mostrarError("emailInput", "Por favor, ingrese su correo electrónico.");
    hayErrores = true;
} else if (!validarEmail(email)) {
    mostrarError("emailInput", "Por favor, ingrese un correo electrónico válido.");
    hayErrores = true;
}

//Password

if (password === "") {
    mostrarError("passwordInput", "Por favor, ingrese su contraseña.");
    hayErrores = true;
} else if (password.length < 6) {
    mostrarError("passwordInput", "La contraseña debe tener al menos 6 caracteres.");
    hayErrores = true;
}

// Si hay errores, detener la validación
    if (hayErrores) {
        return false;
    }

    // crear objeto datosUsuario 
    const datosUsuario = {
        email: email,
        password:  password
    };
    
    console.log(datosUsuario);
    //Validar datos input con datos de Local storage
    const usuarios = JSON.parse(localStorage.getItem("usuarios"));

    console.log(usuarios);

    // Buscar el usuario
    const user = usuarios.find(u => u.emailU === email && u.passwordU === password);
    
    if (user) {
        // Redirigir según el rol del usuario
        switch (user.rol) {
            case 'administrador':
                window.location.href = '/front-end/vistas/administrador/src/vistas/siderAdministrador.html';
                break;
            case 'cliente':
                window.location.href = '/front-end/vistas/paginaPrincipal/paginaPrincipal.html';
                break;
        }
    } else {
        //alert('Usuario o contraseña incorrectos');
            // Crear la alerta de Bootstrap
    let alertaHTML = `
    <div class="alert alert-danger alert-dismissible fade show" role="alert">
        Usuario o contraseña incorrectos
    </div>
`;
// Agregar la alerta al div
var alertDiv = document.getElementById('alertDiv');
alertDiv.innerHTML = alertaHTML;

setTimeout(function() {
    var alerta = document.querySelector('.alert');
    alertDiv.removeChild(alerta);
}, 2000);
}


    

    limpiarCampos();



}

function limpiarCampos() {
    // Limpiar los valores de los campos y las alertas de error
    document.getElementById("emailInput").value = "";
    document.getElementById("passwordInput").value = "";

 
    const errorElements = document.querySelectorAll(".invalid-feedback");
    errorElements.forEach(element => element.textContent = "");
 
    const inputs = document.querySelectorAll(".is-invalid");
    inputs.forEach(input => input.classList.remove("is-invalid"));
 }

 function mostrarError(inputId, mensaje) {
    // Muestra el mensaje de error debajo del campo de entrada
    const inputElement = document.getElementById(inputId);
    const errorElement = inputElement.nextElementSibling;
    errorElement.textContent = mensaje;
    inputElement.classList.add("is-invalid");
 }

 function validarEmail(email) {
    // Expresión regular para validar el formato de correo electrónico
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
 }

 
 //simulando carga de la tabla usuario


function cargarUsuarios() {
    const usuario1 = {
        idU: "1",
        nombreU: "admin",
        aPaternoU: "admin",
        aMaternoU: "admin",
        emailU: "admin@gmail.com",
        passwordU: "Admin123",
        telefono: "7777654321",
        fotoPerfil: "/ruta/foto",
        rol: "administrador"
    };
    const usuario2 = {
        idU: "2",
        nombreU: "cliente",
        aPaternoU: "cliente",
        aMaternoU: "cliente",
        emailU: "cliente@gmail.com",
        passwordU: "Cliente123",
        telefono: "7771234567",
        fotoPerfil: "/ruta/foto",
        rol: "cliente"
    };
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    if (usuarios.length === 0) {
        usuarios.push(usuario1, usuario2);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
    }
}

