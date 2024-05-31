function iniciarSesion() {
    // Obtener datos del formulario
    const email = document.getElementById("emailInput").value.trim();
    const password = document.getElementById("passwordInput").value.trim();
    let hayErrores = false;
    hayErrores = validarCampos(email, password);
    if (hayErrores) {
      return;
    }
    // Validar si el usuario existe
    const url = `http://localhost:8081/api/crea_chet/usuarios/email?email-user=${email}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        // Comprobar si se encontró el usuario
        if (data && data.password === password) {
          console.log("Inicio de sesión exitoso");
          // Establecer el ID del usuario en una cookie de sesión
          document.cookie = `userId=${data.id}; expires=${getCookieExpirationDate()}; path=/`;

          // Redirigir según el rol del usuario
          switch (data.role) {
            case 'ADMINISTRADOR':
              window.location.href = '/front-end/vistas/administrador/src/vistas/siderAdministrador.html';
              break;
            case 'CLIENTE':
              window.location.href = '/front-end/vistas/paginaPrincipal/paginaPrincipal.html';
              break;
            default:
              // Si el rol no es reconocido, redirigir a una página de inicio general
              window.location.href = '/front-end/vistas/productos/productos.html';
              break;
          }
        } else {
          console.log("Error: La contraseña es incorrecta");
          // Crear la alerta de Bootstrap
          let alertaHTML = `
                 <div class="alert alert-danger alert-dismissible fade show" role="alert">
                     Usuario o contraseña incorrectos
                 </div>
             `;
          // Agregar la alerta al div
          var alertDiv = document.getElementById('alertDiv');
          alertDiv.innerHTML = alertaHTML;
          limpiarCampos();

          // Remover la alerta después de 2 segundos
          setTimeout(function () {
            var alerta = document.querySelector('.alert');
            alertDiv.removeChild(alerta);
          }, 2000);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  // Función para obtener la fecha de vencimiento de la cookie
  function getCookieExpirationDate() {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 1); // Cookie válida por 1 día
    return expirationDate.toUTCString();
  }

  // Funciones para validaciones 
  function validarCampos(email, password) {
    let hayErrores = false;
    if (email === "") {
      mostrarError("emailInput", "Ingrese su correo.");
      hayErrores = true;
    } else if (!validarEmail(email)) {
      mostrarError("emailInput", "Correo no válido.");
      document.getElementById("emailInput").value = "";
    
      hayErrores = true;
    }
    if (password === "") {
      mostrarError("passwordInput", "Ingrese su contraseña.");
      hayErrores = true;
    } else if (password.length < 8) {
      mostrarError("passwordInput", "Contraseña no valida.");
      document.getElementById("passwordInput").value = "";
      hayErrores = true;
    }
    return hayErrores;
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