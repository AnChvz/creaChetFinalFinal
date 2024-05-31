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
}

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


////////////////////////////////////////////////////////////////
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
    const nuevoRol = document.querySelector('input[name="rol1"]:checked').value; // Obtener el rol
    
    const usuario={
        id: nuevoIdU,
        name: nuevoNombreU,
        lastName: nuevoAPaterno,
        middleName: nuevoAMaterno,
        email: nuevoEmail,
        password:  nuevoPassword,
        phoneNumber: nuevoTelUser,
        profileImage: nuevaFotoUser,
        role: nuevoRol
    }


    const url = `http://localhost:8081/api/crea_chet/usuarios/${nuevoIdU}`;
    fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)

    })
    .then(response => {
        if (response.ok) {
           
            
            actualizarTabla();
           
        }
    })
    .catch(error => {
        console.error(error);
    });


    $('#exampleModal1').modal('hide');
}


function abrirModalActualizar(id) {

    $('#exampleModal1').modal('show');
    // Cargar los datos del usuario en el formulario
    cargarDatosEnFormulario(id);
    $('#exampleModal1').modal('hide');
}


function cargarDatosEnFormulario(id) {
    const url = `http://localhost:8081/api/crea_chet/usuarios/${id}`;
    fetch(url)
        .then(response => response.json())

        .then(data =>{
            document.getElementById("idUser1").value = data.id;
            document.getElementById("nameUser1").value = data.name;
            document.getElementById("aPaternoUser1").value = data.lastName;
            document.getElementById("aMaternoUser1").value = data.middleName;
            document.getElementById("emailUser1").value = data.email;
            document.getElementById("passwordUser1").value = data.password;
            document.getElementById("telUser1").value = data.phoneNumber;
            document.getElementById("fotoUser1").value = data.profileImage;
            if (data.role === "CLIENTE") {
                document.getElementById("cliente1").checked = true;
            } else if (data.role === "ADMINISTRADOR") {
                document.getElementById("administrador1").checked = true;
            }
        } )
                .catch (error => {
        console.error(error)
    })
}


window.onload = () => {
    actualizarTabla();
};

