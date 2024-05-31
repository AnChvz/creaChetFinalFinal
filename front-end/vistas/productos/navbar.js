// Función para verificar si hay una sesión activa
console.log("Verificar")
function verificarSesion() {
    event.preventDefault(); // Previene el comportamiento predeterminado del enlace
    // Obtener el ID del usuario de las cookies
    const userId = getUserIdFromCookie();

    // Verificar si hay un ID de usuario
    if (userId) {

         // Si hay un ID de usuario, obtener información del usuario
         const url = `http://localhost:8081/api/crea_chet/usuarios/${userId}`;
         
        fetch(url)
        .then(response => response.json())
        .then(data => {
        console.log(data.role)
        console.log(data.id)
        if(data.role=="ADMINISTRADOR"){
            window.location.href = '/front-end/vistas/administrador/src/vistas/siderAdministrador.html';
        }else if(data.role=="CLIENTE"){
            window.location.href = '/front-end/vistas/perfil/perfilprueba.html';
        }
    
    
    })


       


    } else {
        // Si no hay un ID de usuario, redirigir a la página de inicio de sesión
        window.location.href = "/front-end/vistas/logIn/logIn.html"; // Cambia "/login.html" por la ruta de tu página de inicio de sesión
    }
}

// Función para obtener el ID del usuario a partir de la cookie de sesión
function getUserIdFromCookie() {
    const cookies = document.cookie.split(';');
    let userId;
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        // Busca la cookie de sesión (por ejemplo, userId)
        if (cookie.startsWith('userId=')) {
            // Obtiene el userId de la cookie
            userId = cookie.substring('userId='.length);
            break; // Detiene el bucle una vez que se encuentra la cookie de sesión
        }
    }
    return userId;
}
