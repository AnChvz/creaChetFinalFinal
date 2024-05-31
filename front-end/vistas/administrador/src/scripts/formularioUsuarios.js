function agregarUsuario() {
    if (!validarFormulario()) {
        // Si la validación del formulario falla, muestra una alerta y detiene la ejecución.
        return;
    }
    // Obtener los valores de los campos de entrada
    const idU = document.getElementById("idUser").value;
    const nombreU = document.getElementById("nameUser").value;
    const aPaterno = document.getElementById("aPaternoUser").value;
    const aMaterno = document.getElementById("aMaternoUser").value;
    const email = document.getElementById("emailUser").value;
    const password = document.getElementById("passwordUser").value;
    const telefono = document.getElementById("telUser").value;
    const fotoPerfil = document.getElementById("fotoUser").value;
    const rol = document.querySelector('input[name="rol"]:checked').value;
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
    limpiar();
    actualizarTabla();
    $('#exampleModal').modal('hide');
}



function validarFormulario() {
    let datosUsuario = obtenerDatos(); // Obtiene los datos del formulario
    // Expresiones regulares para validar campos
    const apellidoRegex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s\']+$/;
    const nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s\']+$/;
    const emailRegex = /^\S+@\S+\.\S+$/;
    // Valida los campos del formulario
    if (datosUsuario.idU == "") {
        mostrarAlerta("El id es requerido", "alert-danger");
        return false;
    }
    if (!apellidoRegex.test(datosUsuario.aPaternoU)) {
        mostrarAlerta("El Apellido Paterno es inválido", "alert-danger");
        return false;
    }
    if (!apellidoRegex.test(datosUsuario.aMaternoU)) {
        mostrarAlerta("El Apellido Materno es inválido", "alert-danger");
        return false;
    }
    if (!nombreRegex.test(datosUsuario.nombreU)) {
        mostrarAlerta("El Nombre es inválido", "alert-danger");
        return false;
    }
    if (!emailRegex.test(datosUsuario.emailU)) {
        mostrarAlerta("El Correo es inválido", "alert-danger");
        return false;
    }
    if (datosUsuario.passwordU == "") {
        mostrarAlerta("La Contraseña es requerida", "alert-danger");
        return false;
    } else {
        let mensajeError = "La Contraseña debe contener:";
        if (!/(?=.*[a-z])/.test(datosUsuario.passwordU)) mensajeError += " al menos una letra minúscula,";
        if (!/(?=.*[A-Z])/.test(datosUsuario.passwordU)) mensajeError += " al menos una letra mayúscula,";
        if (!/(?=.*\d)/.test(datosUsuario.passwordU)) mensajeError += " al menos un número,";
        if (datosUsuario.passwordU.length < 8) mensajeError += " y tener al menos 8 caracteres.";
        if (mensajeError !== "La Contraseña debe contener:") {
            mostrarAlerta(mensajeError, "alert-danger");
            return false;
        }
    }
    return true;
}

function obtenerDatos() {

    const idU = document.getElementById("idUser").value;
    const nombreU = document.getElementById("nameUser").value;
    const aPaterno = document.getElementById("aPaternoUser").value;
    const aMaterno = document.getElementById("aMaternoUser").value;
    const email = document.getElementById("emailUser").value;
    const password = document.getElementById("passwordUser").value;
    const telefono = document.getElementById("telUser").value;
    const fotoPerfil = document.getElementById("fotoUser").value;
    const rol = document.querySelector('input[name="rol"]:checked').value;

    const datosUsuario = {
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
    return datosUsuario;
}

function mostrarAlerta(mensaje, tipo) {
    // Crear la estructura de la alerta
    const alerta = document.createElement("div");
    alerta.className = "alert alert-danger text-center " + tipo + " col-6 mx-auto"; // Clases Bootstrap para centrar y limitar el ancho
    alerta.innerText = mensaje;

    // Agregar la alerta al contenedor
    const contenedorAlertas = document.getElementById("contenedorAlertas");
    contenedorAlertas.appendChild(alerta);

    setTimeout(function () {
        alerta.remove();
    }, 2000);
}



function limpiar() {
    document.getElementById("idUser").value = '';
    document.getElementById("nameUser").value = '';
    document.getElementById("aPaternoUser").value = '';
    document.getElementById("aMaternoUser").value = '';
    document.getElementById("emailUser").value = '';
    document.getElementById("passwordUser").value = '';
    document.getElementById("telUser").value = '';
    document.getElementById("fotoUser").value = '';
    document.getElementById("cliente").checked = true; // Marcar el rol cliente por defecto
}


function actualizarTabla() {
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    let tableBody = document.querySelector('#productTable tbody');
    tableBody.innerHTML = ''; // Limpiar el contenido anterior de la tabla
    usuarios.forEach(usuario => {
        const row = `
            <tr>
                <td>${usuario.idU}</td>
                <td>${usuario.nombreU}</td>
                <td>${usuario.aPaternoU}</td>
                <td>${usuario.aMaternoU}</td>
                <td>${usuario.emailU}</td>
                <td>${usuario.passwordU}</td>
                <td>${usuario.telefono}</td>
                <td>${usuario.fotoPerfil}</td>
                <td>${usuario.rol}</td>
                <td><button type="button" class="btn btn-outline-danger"   onclick="eliminarUsuario('${usuario.idU}')"><i class="bi bi-trash">Eliminar</i></button></td>
             

                <td><button type="button" class="btn btn-outline-success" onclick="abrirModalActualizar('${usuario.idU}')"><i class="bi bi-pencil">Editar</i></button></td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}



function eliminarUsuario(idU) {
    console.log(idU);
    $('#modalEliminar').modal('show');
    // Pasar el id al modal para que esté disponible cuando se hace clic en el botón "Eliminar"
    console.log(idU);
    $('#modalEliminar').data('idU', idU);
    console.log(idU);
}

function eliminarModal(idU) {
    console.log(idU);
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    // Filtrar el usuario a eliminar
    usuarios = usuarios.filter(usuario => usuario.idU !== idU);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    // Actualizar la tabla después de eliminar el usuario
    actualizarTabla();

    $('#modalEliminar').modal('hide');
}

function actualizarUsuario() {

    // Obtener los valores actualizados de los campos de entrada
    const nuevoIdU = document.getElementById("idUser1").value;
    const nuevoNombreU = document.getElementById("nameUser1").value;
    const nuevoAPaterno = document.getElementById("aPaternoUser1").value;
    const nuevoAMaterno = document.getElementById("aMaternoUser1").value;
    const nuevoEmail = document.getElementById("emailUser1").value;
    const nuevoPassword = document.getElementById("passwordUser1").value;
    const nuevoTelUser = document.getElementById("telUser1").value; // Obtener el teléfono
    const nuevaFotoUser = document.getElementById("fotoUser1").value; // Obtener la foto de perfil
    const nuevoRol = document.querySelector('input[name="rol"]:checked').value; // Obtener el rol


    // Verificar si el usuario ya existe en el localStorage
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    let encontrado = false;

    usuarios.forEach(usuario => {
        if (usuario.idU === nuevoIdU) {
            // Actualizar los datos del usuario existente
            usuario.idU = nuevoIdU;
            usuario.nombreU = nuevoNombreU;
            usuario.aPaternoU = nuevoAPaterno;
            usuario.aMaternoU = nuevoAMaterno;
            usuario.emailU = nuevoEmail;
            usuario.passwordU = nuevoPassword;
            usuario.telefono = nuevoTelUser; // Asignar el nuevo teléfono
            usuario.fotoPerfil = nuevaFotoUser; // Asignar la nueva foto de perfil
            usuario.rol = nuevoRol; // Asignar el nuevo rol
            encontrado = true;
        }
    });


    if (!encontrado) {
        mostrarAlerta("Usuario no encontrado", "alert-danger");
    }

    // Guardar los usuarios actualizados en localStorage
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    // Limpiar los campos de entrada después de agregar/actualizar el usuario
    limpiar();
    // Actualizar la tabla de usuarios
    actualizarTabla();

    $('#exampleModal1').modal('hide');
}


function cargarDatosEnFormulario(idU) {
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    let usuario = usuarios.find(usuario => usuario.idU === idU);
    console.log(usuario);

    if (usuario) {
        document.getElementById("idUser1").value = usuario.idU;
        document.getElementById("nameUser1").value = usuario.nombreU;
        document.getElementById("aPaternoUser1").value = usuario.aPaternoU;
        document.getElementById("aMaternoUser1").value = usuario.aMaternoU;
        document.getElementById("emailUser1").value = usuario.emailU;
        document.getElementById("passwordUser1").value = usuario.passwordU;
        document.getElementById("telUser1").value = usuario.telefono;
        document.getElementById("fotoUser1").value = usuario.fotoPerfil;
        if (usuario.rol === "cliente") {
            document.getElementById("cliente1").checked = true;
        } else if (usuario.rol === "administrador") {
            document.getElementById("administrador1").checked = true;
        }
    }
}

// Función para abrir el modal y cargar los datos del usuario para actualizar
function abrirModalActualizar(idU) {

    $('#exampleModal1').modal('show');
    // Cargar los datos del usuario en el formulario
    cargarDatosEnFormulario(idU);
    $('#exampleModal1').modal('hide');
}


function borrarTodo() {
    $('#modalEliminarTodo').modal('show'); // Mostrar el modal de confirmación

    // Manejar la confirmación cuando se hace clic en el botón "Eliminar"
    $('#modalEliminarTodo').click(function () {
        // Eliminar todos los usuarios del localStorage
        localStorage.removeItem('usuarios');
        // Actualizar la tabla de usuarios
        actualizarTabla();
        // Cerrar el modal después de eliminar los usuarios
        $('#modalEliminarTodo').modal('hide');
    });
}



// Llamar a actualizarTabla() cuando se cargue la página
window.onload = () => {
    actualizarTabla();
};




