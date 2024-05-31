
function actualizarTabla() {
    const url = "http://localhost:8081/api/crea_chet/usuarios";

    fetch(url)
        .then(response => response.json())

        .then(data => {
            let tableBody = document.querySelector('#productTable tbody');
            tableBody.innerHTML = ''; // Limpiar el contenido anterior de la tabla
            data.forEach(usuario => {
                const row = `
                <tr>
                    <td>${usuario.id}</td>
                    <td>${usuario.name}</td>
                    <td>${usuario.lastName}</td>
                    <td>${usuario.middleName}</td>
                    <td>${usuario.email}</td>
                    <td>${usuario.password}</td>
                    <td>${usuario.phoneNumber}</td>
                    <td>${usuario.profileImage}</td>
                    <td>${usuario.role}</td>
                    <td><button type="button" class="btn btn-outline-danger"   onclick="eliminarUsuario('${usuario.id}')"><i class="bi bi-trash">Eliminar</i></button></td>             
    
                    <td><button type="button" class="btn btn-outline-success" onclick="abrirModalActualizar('${usuario.id}')"><i class="bi bi-pencil">Editar</i></button></td>
                </tr>

            `;
                tableBody.innerHTML += row;
            })
        })
                .catch (error => {
        console.error(error)
    })
};
//eliminar id boton tabla
// Función para eliminar usuario por ID
function eliminarUsuario(id) {
    const url = `http://localhost:8081/api/crea_chet/usuarios/${id}`;
    fetch(url, {
        method: 'DELETE'
    })
    .then(response => {
        if (response.ok) {
            // Si la eliminación fue exitosa, actualiza la tabla
            actualizarTabla();
            return response.text(); // Si hay algún texto en la respuesta, se devuelve como texto
        } else {
            return response.json().then(data => {
                // Manejar el caso cuando la respuesta no es exitosa
                throw new Error(data.message || 'Error al eliminar el usuario');
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
//Boton Agregar usuario
function agregarUsuario() {
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

   // Crear un objeto con los datos del usuario
   const usuario = {
    id: idU,
    name: nombreU,
    lastName: aPaterno,
    middleName: aMaterno,
    email: email,
    password: password,
    phoneNumber: telefono,
    profileImage: fotoPerfil,
    role: rol
};
//Método post 
const url="http://localhost:8081/api/crea_chet/usuarios";
   
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    })
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log('Guardado', data)
            actualizarTabla();
            $('#exampleModal').modal('hide');
        })
        .catch(error => {
            console.error(error);
        })

    
   

}



//cargar la pagina 
window.onload = () => {
    actualizarTabla();
};