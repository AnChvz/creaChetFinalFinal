function agregarProducto() {
    if (!validarFormulario()) {
        // Si la validación del formulario falla, muestra una alerta y detiene la ejecución.
        return;
    }
    // Obtener los valores de los campos de entrada
    var id = document.getElementById("idp").value;
    var nombre = document.getElementById("namep").value;
    var descripcion = document.getElementById("descripcionp").value;
    var precio = document.getElementById("preciop").value;
    var imagen = document.getElementById("imagenp").value;
    var variacion = document.getElementById("variacionp").value;
    var stock = document.getElementById("stockp").value;
    // Validar que el ID sea único
    var productos = JSON.parse(localStorage.getItem('productos')) || [];
    var idUnico = productos.every(producto => producto.id !== id);
    if (!idUnico) {
        mostrarAlerta("El id debe ser único, ya existe!", "alert-danger");
        return;
    }
    // Crear un objeto con los datos del producto
    var producto = {
        id: id,
        nombre: nombre,
        descripcion: descripcion,
        precio: precio,
        imagen: imagen,
        variacion: variacion,
        stock:stock
    };
    // Guardar el producto en localStorage
    productos.push(producto);
    localStorage.setItem('productos', JSON.stringify(productos));
    limpiar();
    actualizarTabla();
    $('#exampleModal').modal('hide');
}



function validarFormulario() {//Alertas bootstrap
    var datosProducto = obtenerDatos(); // Obtiene los datos del formulario
    // Valida los campos del formulario
    if (datosProducto.id == "") {
        mostrarAlerta("El id es requerido", "alert-danger");
        return false;
    }
    if (datosProducto.nombre == "") {
        mostrarAlerta("El nombre es requerido", "alert-danger");
        return false;
    }

    if (datosProducto.descripcion == "") {
        mostrarAlerta("La descripción es requerida", "alert-danger");
        return false;
    }

    if (datosProducto.precio == "") {
        mostrarAlerta("El precio es requerido", "alert-danger");
        return false;
    }

    if (datosProducto.imagen == "") {
        mostrarAlerta("La imagen es requerida", "alert-danger");
        return false;
    }

    if (datosProducto.variacion == "") {
        mostrarAlerta("La variación es requerida", "alert-danger");
        return false;
    }

    if (datosProducto.stock == "") {
        mostrarAlerta("El stock es requerido", "alert-danger");
        return false;
    }
    
    return true;
}

function obtenerDatos(){
    
    var id = document.getElementById("idp").value;
    var nombre = document.getElementById("namep").value;
    var descripcion = document.getElementById("descripcionp").value;
    var precio = document.getElementById("preciop").value;
    var imagen = document.getElementById("imagenp").value;
    var variacion = document.getElementById("variacionp").value;
    var stock = document.getElementById("stockp").value;

    var datosProducto = {
        id: id,
        nombre: nombre,
        descripcion: descripcion,
        precio: precio,
        imagen: imagen,
        variacion: variacion,
        stock:stock
    };
    return datosProducto
}

function mostrarAlerta(mensaje, tipo) {
    // Crear la estructura de la alerta
    var alerta = document.createElement("div");
    alerta.className = "alert alert-danger text-center " + tipo + " col-6 mx-auto"; // Clases Bootstrap para centrar y limitar el ancho
    alerta.innerText = mensaje;

    // Agregar la alerta al contenedor
    var contenedorAlertas = document.getElementById("contenedorAlertas");
    contenedorAlertas.appendChild(alerta);

    setTimeout(function() {
        alerta.remove();
    }, 2000);
}



function limpiar(){
    document.getElementById("idp").value = '';
    document.getElementById("namep").value = '';
    document.getElementById("descripcionp").value = '';
    document.getElementById("preciop").value = '';
    document.getElementById("imagenp").value = '';
    document.getElementById("variacionp").value = '';
    document.getElementById("stockp").value = '';
}


function actualizarTabla() {
    var productos = JSON.parse(localStorage.getItem('productos')) || [];
    const tableBody = document.querySelector('#productTable tbody');
    tableBody.innerHTML = ''; // Limpiar el contenido anterior de la tabla
    productos.forEach(producto => {
        const row = `
            <tr>
                <td>${producto.id}</td>
                <td>${producto.nombre}</td>
                <td>${producto.descripcion}</td>
                <td>${producto.precio}</td>
                <td>${producto.imagen}</td>
                <td>${producto.variacion}</td>
                <td>${producto.stock}</td>
                <td><button type="button" class="btn btn-outline-danger"   onclick="eliminarProducto('${producto.id}')"><i class="bi bi-trash">Eliminar</i></button></td>
             

                <td><button type="button" class="btn btn-outline-success" onclick="abrirModalActualizar('${producto.id}')"><i class="bi bi-pencil">Editar</i></button></td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}


    
function eliminarProducto(id) {
    $('#modalEliminar').modal('show');
    // Pasar el id al modal para que esté disponible cuando se hace clic en el botón "Eliminar"
    $('#modalEliminar').data('id', id);
}

function eliminarModal(id){
    console.log(id)
    var productos = JSON.parse(localStorage.getItem('productos')) || [];
    // Filtrar el producto a eliminar
    productos = productos.filter(producto => producto.id !== id);
    localStorage.setItem('productos', JSON.stringify(productos));
    // Actualizar la tabla después de eliminar el producto
    actualizarTabla();

    $('#modalEliminar').modal('hide');
}

function actualizarProducto(){

    // Obtener los valores actualizados de los campos de entrada
    var nuevoId = document.getElementById("idp1").value;
    var nuevoNombre = document.getElementById("namep1").value;
    var nuevoDescripcion = document.getElementById("descripcionp1").value;
    var nuevoPrecio = document.getElementById("preciop1").value;
    var nuevoImagen = document.getElementById("imagenp1").value;
    var nuevoVariacion = document.getElementById("variacionp1").value;
    var nuevoStock = document.getElementById("stockp1").value;

    // Verificar si el producto ya existe en el localStorage
    var productos = JSON.parse(localStorage.getItem('productos')) || [];
    var encontrado = false;
    
    productos.forEach(producto => {
        if (producto.id === nuevoId) {
            // Actualizar los datos del producto existente
            producto.id = nuevoId;
            producto.nombre = nuevoNombre;
            producto.descripcion = nuevoDescripcion;
            producto.precio = nuevoPrecio;
            producto.imagen = nuevoImagen;
            producto.variacion = nuevoVariacion;
            producto.stock = nuevoStock;
            encontrado = true;
        }
    });

    if (!encontrado) {
        mostrarAlerta("Producto no encontrado", "alert-danger");
    }

    // Guardar los productos actualizados en localStorage
    localStorage.setItem('productos', JSON.stringify(productos));

    // Limpiar los campos de entrada después de agregar/actualizar el producto
    limpiar();
    // Actualizar la tabla de productos
    actualizarTabla();

    $('#exampleModal1').modal('hide');
}


function cargarDatosEnFormulario(id) {
    var productos = JSON.parse(localStorage.getItem('productos')) || [];
    var producto = productos.find(producto => producto.id === id);
    
    if (producto) {
        document.getElementById("idp1").value = producto.id;
        document.getElementById("namep1").value = producto.nombre;
        document.getElementById("descripcionp1").value = producto.descripcion;
        document.getElementById("preciop1").value = producto.precio;
        document.getElementById("imagenp1").value= producto.imagen;
        document.getElementById("variacionp1").value= producto.variacion;
        document.getElementById("stockp1").value= producto.stock;
    }
}

// Función para abrir el modal y cargar los datos del producto para actualizar
function abrirModalActualizar(id) {
    
    $('#exampleModal1').modal('show');
    // Cargar los datos del producto en el formulario
    cargarDatosEnFormulario(id);
    $('#exampleModal1').modal('hide');
}


function borrarTodo() {
    $('#modalEliminarTodo').modal('show'); // Mostrar el modal de confirmación

    // Manejar la confirmación cuando se hace clic en el botón "Eliminar"
    $('#modalEliminarTodo').click(function() {
        // Eliminar todos los productos del localStorage
        localStorage.removeItem('productos');
        // Actualizar la tabla de productos
        actualizarTabla();
        // Cerrar el modal después de eliminar los productos
        $('#modalEliminarTodo').modal('hide');
    });
}


// Llamar a actualizarTabla() cuando se cargue la página
window.onload = () => {
    actualizarTabla();
};


