
    // Función para cargar el contenido de tabla_productos.html en el contenedor
    function cargarTablaProductos() {
        document.getElementById('contenido').innerHTML = '<iframe src="./formularioProductos.html" style="width:100%; height:100vh; border:none;"></iframe>';
    }
    function cargarTablaUsuarios() {
        document.getElementById('contenido').innerHTML = '<iframe src="./formularioUsuarios.html" style="width:100%; height:100vh; border:none;"></iframe>';
    }

    function cargarPagina(pagina) {
        if (pagina === 'home') {
           paginaActual.textContent = 'Home'
            // Cargar el contenido de home.html en el contenedor
            fetch('./home.html')
                .then(response => response.text())
                .then(html => {
                    document.getElementById('contenido').innerHTML = html;
                })
                .catch(error => console.error('Error:', error));
        } else if (pagina === 'tabla') {
            paginaActual.textContent = 'Productos';
            cargarTablaProductos();
        }  else if (pagina === 'tabla1') {
            paginaActual.textContent = 'Usuarios';
            cargarTablaUsuarios();
        }
                // Cierra el offcanvas al hacer clic en un enlace del menú
        var offcanvas = document.getElementById('offcanvasDarkNavbar');
        var offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvas);
        offcanvasInstance.hide();
    }

    // Cargar la página de inicio al iniciar la página
    cargarPagina('home');

    /////////////////cerrar sesion /////////////////////
// Función para cerrar la sesión del usuario
function cerrarSesion() {
    // Eliminar la cookie de sesión
    document.cookie = 'userId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

    // Redirigir al usuario a la página de inicio de sesión
    window.location.href = "/front-end/vistas/productos/productos.html"; // Cambia "/login.html" por la ruta de tu página de inicio de sesión
}

