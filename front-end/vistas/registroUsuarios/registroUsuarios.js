function registrarse() {
   
    // Obtener datos del formulario
    const nombre = document.getElementById("nameInput").value.trim();
    const apellidoPaterno = document.getElementById("lastnameInput").value.trim();
    const apellidoMaterno = document.getElementById("lastnameInput2").value.trim();
    const telefono = document.getElementById("phoneInput").value.trim();
    const email = document.getElementById("emailInput").value.trim();
    const password = document.getElementById("passwordInput").value.trim();
    const confirmarPassword = document.getElementById("passwordInput2").value.trim();
 
    let hayErrores = false;
 
    // Validar nombre
    if (nombre === "") {
        mostrarError("nameInput", "Por favor, ingrese su nombre.");
        hayErrores = true;
    }
 
    // Validar apellido paterno
    if (apellidoPaterno === "") {
        mostrarError("lastnameInput", "Por favor, ingrese su apellido paterno.");
        hayErrores = true;
    }
 
    // Validar apellido materno
    if (apellidoMaterno === "") {
        mostrarError("lastnameInput2", "Por favor, ingrese su apellido materno.");
        hayErrores = true;
    }
 
    // Validar teléfono
    if (telefono === "") {
        mostrarError("phoneInput", "Por favor, ingrese su número de teléfono.");
        hayErrores = true;
    }
 
    // Validar correo electrónico
    if (email === "") {
        mostrarError("emailInput", "Por favor, ingrese su correo electrónico.");
        hayErrores = true;
    } else if (!validarEmail(email)) {
        mostrarError("emailInput", "Por favor, ingrese un correo electrónico válido.");
        hayErrores = true;
    }
 
    // Validar contraseña
    if (password === "") {
        mostrarError("passwordInput", "Por favor, ingrese una contraseña.");
        hayErrores = true;
    } else if (password.length < 8) {
        mostrarError("passwordInput", "La contraseña debe tener al menos 8 caracteres.");
        hayErrores = true;
    }
 
    // Validar confirmación de contraseña
    if (confirmarPassword === "") {
        mostrarError("passwordInput2", "Por favor, confirme su contraseña.");
        hayErrores = true;
    } else if (password !== confirmarPassword) {
        mostrarError("passwordInput2", "Las contraseñas no coinciden.");
        hayErrores = true;
    }
 
    // Si hay errores, detener la validación
    if (hayErrores) {
        return;
    }
 
   agregarUsuario();
    
    limpiarCampos();
 
    window.location.href= "/front-end/vistas/logIn/logIn.html";
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
 
 function limpiarCampos() {
    // Limpiar los valores de los campos y las alertas de error
    document.getElementById("nameInput").value = "";
    document.getElementById("lastnameInput").value = "";
    document.getElementById("lastnameInput2").value = "";
    document.getElementById("phoneInput").value = "";
    document.getElementById("emailInput").value = "";
    document.getElementById("passwordInput").value = "";
    document.getElementById("passwordInput2").value = "";
 
    const errorElements = document.querySelectorAll(".invalid-feedback");
    errorElements.forEach(element => element.textContent = "");
 
    const inputs = document.querySelectorAll(".is-invalid");
    inputs.forEach(input => input.classList.remove("is-invalid"));
 }
 
 ///resistrar usuario
 function agregarUsuario() {
     let ultimoId = parseInt(obtenerUltimoId());
     let UtilimoId1=ultimoId+1
     // Obtener los valores de los campos de entrada
     let idU = UtilimoId1.toString();
     const nombreU = document.getElementById("nameInput").value;
     const aPaterno = document.getElementById("lastnameInput").value;
     const aMaterno = document.getElementById("lastnameInput2").value;
     const email = document.getElementById("emailInput").value;
     const password = document.getElementById("passwordInput").value;
     const telefono = document.getElementById("phoneInput").value;
     const fotoPerfil = " ";
     const rol = "cliente";
     // Validar que el ID sea único
     let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
     const idUnico = usuarios.every(usuario => usuario.idU !== idU);
     if (!idUnico) {
         mostrarAlerta("El id debe ser único, ya existe!", "alert-danger");
         return;
     }
     // Crear un objeto con los datos del usuario
     const usuario = {
         idU: idU,
         nombreU: nombreU,
         aPaternoU: aPaterno,
         aMaternoU: aMaterno,
         emailU: email,
         passwordU: password,
         telefono: telefono,
         fotoPerfil: fotoPerfil,
         rol: rol
     };
     // Guardar el usuario en localStorage
     usuarios.push(usuario);
     localStorage.setItem('usuarios', JSON.stringify(usuarios));
 
 }
 
 function obtenerUltimoId() {
     const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
     
     if (usuarios.length === 0) {
         return 0; // Si no hay usuarios guardados, devolver 0 como el último ID
     } else {
         // Ordenar los usuarios por ID de forma descendente y obtener el primer elemento
         const ultimoUsuario = usuarios.sort((a, b) => b.idU - a.idU)[0];
         return ultimoUsuario.idU;
  
     }
 }
 
 /* 
 let ultimoId = parseInt(obtenerUltimoId());
 console.log("Último ID:", ultimoId );
 console.log(typeof(ultimoId));  */
 
 