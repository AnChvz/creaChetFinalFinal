function registrarse() {
    const nombre = document.getElementById("nameInput").value.trim();
    const apellidoPaterno = document.getElementById("lastnameInput").value.trim();
    const apellidoMaterno = document.getElementById("lastnameInput2").value.trim();
    const telefono = document.getElementById("phoneInput").value.trim();
    const email = document.getElementById("emailInput").value.trim();
    const password = document.getElementById("passwordInput").value.trim();
    const confirmarPassword = document.getElementById("passwordInput2").value.trim();

    // Validar campos
    const errores = validarCampos(nombre, apellidoPaterno, apellidoMaterno, telefono, email, password, confirmarPassword);

    if (errores.length > 0) {
        errores.forEach(error => mostrarError(error.inputId, error.mensaje));
        return;
    }

    // Agregar usuario 
    // Crear un objeto con los datos del usuario
    const usuario = {
        name: nombre,
        lastName: apellidoPaterno,
        middleName: apellidoMaterno,
        email: email,
        password: password,
        phoneNumber: telefono,
        role: "CLIENTE"
    };
    console.log(usuario);
    //Comenzar con la llamada de la API
    const url="http://localhost:8081/api/crea_chet/usuarios";
   
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    })
        .then(response => {
            window.location.href= "/front-end/vistas/logIn/logIn.html";
            return response.json();
        })
        .then(data => {
            console.log('Guardado', data)
        })
        .catch(error => {
            console.error(error);
        })

    limpiarCampos();
    
}

function validarCampos(nombre, apellidoPaterno, apellidoMaterno, telefono, email, password, confirmarPassword) {
    const errores = [];

    if (nombre === "") {
        errores.push({ inputId: "nameInput", mensaje: "Ingrese su nombre." });
    }

    if (apellidoPaterno === "") {
        errores.push({ inputId: "lastnameInput", mensaje: "Ingrese su apellido paterno." });
    }

    if (apellidoMaterno === "") {
        errores.push({ inputId: "lastnameInput2", mensaje: "Ingrese su apellido materno." });
    }

    if (telefono === "") {
        errores.push({ inputId: "phoneInput", mensaje: "Ingrese su número de teléfono." });
    }else if (telefono.length!=10) {
        errores.push({ inputId: "telefonoInput", mensaje: "Necesario 10 números" });
        document.getElementById("telefonoInput").value = "";
    }

    if (email === "") {
        errores.push({ inputId: "emailInput", mensaje: "Ingrese su correo." });
    } else if (!validarEmail(email)) {
        errores.push({ inputId: "emailInput", mensaje: "Ingrese un correo válido." });
        document.getElementById("emailInput").value = "";
    }

    if (password === "") {
        errores.push({ inputId: "passwordInput", mensaje: "Ingrese una contraseña." });
    } else if (password.length < 8) {
        errores.push({ inputId: "passwordInput", mensaje: "Tener al menos 8 caracteres." });
        document.getElementById("passwordInput").value = "";
    }

    if (confirmarPassword === "") {
        errores.push({ inputId: "passwordInput2", mensaje: "Confirme su contraseña." });
    } else if (password !== confirmarPassword) {
        errores.push({ inputId: "passwordInput2", mensaje: "Las contraseñas no coinciden." });
        document.getElementById("passwordInput").value = "";
        document.getElementById("passwordInput2").value = "";
    }

    return errores;
}

function mostrarError(inputId, mensaje) {
    const inputElement = document.getElementById(inputId);
    const errorElement = inputElement.nextElementSibling;
    errorElement.textContent = mensaje;
    inputElement.classList.add("is-invalid");
}

function validarEmail(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
}

function limpiarCampos() {
    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => {
        input.value = "";
        input.classList.remove("is-invalid");
    });

    const errorElements = document.querySelectorAll(".invalid-feedback");
    errorElements.forEach(element => element.textContent = "");
}
