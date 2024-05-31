function actualizarTablaProductos() {
    const url = "http://localhost:8081/api/crea_chet/producto";

    fetch(url)
        .then(response => response.json())
        .then(data => {
            let tableBody = document.getElementById('#productTable tbody');
            tableBody.innerHTML = ''; // Limpiar el contenido anterior de la tabla
            data.forEach(producto => {
                const row = `
                <tr>
                    <td>${producto.id}</td>
                    <td>${producto.nombre}</td>
                    <td>${producto.descripcion}</td>
                    <td>${producto.precio}</td>
                    <td>${producto.imagen}</td>
                    <td>${producto.variacion}</td>
                    <td>${producto.stock}</td>
                    <td>${producto.categoria}</td>
                    <td><button type="button" class="btn btn-outline-danger" onclick="eliminarProducto('${producto.id}')">Eliminar</button></td>
                    <td><button type="button" class="btn btn-outline-success" onclick="abrirModalActualizarProducto('${producto.id}')">Editar</button></td>
                </tr>
            `;
                tableBody.innerHTML += row;
            })
        })
        .catch(error => {
            console.error(error)
        })
}

function eliminarProducto(id) {
    const url = `http://localhost:8081/api/crea_chet/producto/${id}`;
    fetch(url, {
        method: 'DELETE'
    })
    .then(response => {
        if (response.ok) {
            // Si la eliminación fue exitosa, actualiza la tabla
            actualizarTablaProductos();
            return response.text(); // Si hay algún texto en la respuesta, se devuelve como texto
        } else {
            return response.json().then(data => {
                // Manejar el caso cuando la respuesta no es exitosa
                throw new Error(data.message || 'Error al eliminar el producto');
            });
        }
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
}

function agregarProducto() {
    // Obtener los valores de los campos de entrada
    const id = document.getElementById("idp").value;
    const nombre = document.getElementById("namep").value;
    const descripcion = document.getElementById("descripcionp").value;
    const precio = document.getElementById("preciop").value;
    const imagen = document.getElementById("imagenp").value;
    const variacion = document.getElementById("variacionp").value;
    const stock = document.getElementById("stockp").value;
    const categoria= document.getElementById("categoriap").value;

    // Crear un objeto con los datos del producto
    const producto = {
        id: id,
        nombre: nombre,
        descripcion: descripcion,
        precio: precio,
        imagen: imagen,
        variacion: variacion,
        stock: stock,
        categoria: categoria
    };

    const url="http://localhost:8081/api/crea_chet/producto";
     
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(producto)
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log('Guardado', data)
        actualizarTablaProductos();
        $('#exampleModal').modal('hide');
    })
    .catch(error => {
        console.error(error);
    })
}

function actualizarProducto() {
    // Obtener los valores actualizados de los campos de entrada
    const id = document.getElementById("idp1").value;
    const nombre = document.getElementById("namep1").value;
    const descripcion = document.getElementById("descripcionp1").value;
    const precio = document.getElementById("preciop1").value;
    const imagen = document.getElementById("imagenp1").value;
    const variacion = document.getElementById("variacionp1").value;
    const stock = document.getElementById("stockp1").value;
    const categoria = document.getElementById("categoriap1").value;

    const producto = {
        id: id,
        nombre: nombre,
        descripcion: descripcion,
        precio: precio,
        imagen: imagen,
        variacion: variacion,
        stock: stock,
        categoria: categoria
    }

    const url = `http://localhost:8081/api/crea_chet/producto/${id}`;
    fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(producto)
    })
    .then(response => {
        if (response.ok) {
            actualizarTablaProductos();
        }
    })
    .catch(error => {
        console.error(error);
    });

    $('#exampleModal1').modal('hide');
}

function abrirModalActualizarProducto(id) {
    $('#exampleModal1').modal('show');
    // Cargar los datos del producto en el formulario
    cargarDatosProductoEnFormulario(id);
}

function cargarDatosProductoEnFormulario(id) {
    const url = `http://localhost:8081/api/crea_chet/producto/${id}`;
    fetch(url)
        .then(response => response.json())
        .then(data =>{
            document.getElementById("idp1").value = data.id;
            document.getElementById("namep1").value = data.nombre;
            document.getElementById("descripcionp1").value = data.descripcion;
            document.getElementById("preciop1").value = data.precio;
            document.getElementById("imagenp1").value = data.imagen;
            document.getElementById("variacionp1").value = data.variacion;
            document.getElementById("categoriap1").value = data.categoria;
            
        })
        .catch(error => {
            console.error(error);
        });
}

window.onload = () => {
    actualizarTablaProductos();
};
