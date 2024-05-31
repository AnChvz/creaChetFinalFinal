
  const id=getUserIdFromCookie();
    getUsuerById(id);

// Función para obtener y mostrar los datos del usuario por su ID
function getUsuerById() {
    // Obtener el ID del usuario de la cookie de sesión
    const userId = getUserIdFromCookie();

    // Si se encontró el ID del usuario, enviar una solicitud al servidor para obtener los datos del usuario
    if (userId) {
        const url = `http://localhost:8081/api/crea_chet/usuarios/${userId}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                // Mostrar los datos del usuario en el formulario o en cualquier otro lugar necesario
                document.getElementById("name").innerText = data.name;
                document.getElementById("lastname").innerText = data.lastName;
                document.getElementById("middlename").innerText = data.middleName;
                document.getElementById("email").innerText = data.email;
                document.getElementById("password").innerText = data.password;
                document.getElementById("phonenumber").innerText = data.phoneNumber;
            })
            .catch(error => {
                console.error(error);
            });
    } else {
        console.log("No se encontró el ID del usuario en la cookie de sesión");
    }
}

/////////////////////modal//////////////////

function actualizarUsuario() {
console.log(id);

    // Obtener los valores actualizados de los campos de entrada
    
    const nuevoNombreU = document.getElementById("nameUser1").value;
    const nuevoAPaterno = document.getElementById("aPaternoUser1").value;
    const nuevoAMaterno = document.getElementById("aMaternoUser1").value;
    const nuevoEmail = document.getElementById("emailUser1").value;
    const nuevoPassword = document.getElementById("passwordUser1").value;
    const nuevoTelUser = document.getElementById("telUser1").value; // Obtener el teléfono
   
    
    const usuario={
       
        name: nuevoNombreU,
        lastName: nuevoAPaterno,
        middleName: nuevoAMaterno,
        email: nuevoEmail,
        password:  nuevoPassword,
        phoneNumber: nuevoTelUser,
       
    }
    


    const url = `http://localhost:8081/api/crea_chet/usuarios/${id}`;
    fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)

    })
    .then(response => {
        if (response.ok) {
            document.getElementById("name").innerText = usuario.name;
                document.getElementById("lastname").innerText = usuario.lastName;
                document.getElementById("middlename").innerText = usuario.middleName;
                document.getElementById("email").innerText = usuario.email;
                document.getElementById("password").innerText = usuario.password;
                document.getElementById("phonenumber").innerText = usuario.phoneNumber;
            
           
           
        }
    })
    .catch(error => {
        console.error(error);
    });


    $('#exampleModal1').modal('hide');
}


function abrirModalActualizar() {
    $('#exampleModal1').modal('show');
     // Obtener el ID del usuario de la cookie de sesión
     const userId = getUserIdFromCookie();
     if (userId) {
        $('#exampleModal1').modal('show');
        cargarDatosEnFormulario(userId);
    } else {
        console.log("No se encontró el ID del usuario en la cookie de sesión");
    }
    $('#exampleModal1').modal('hide');
}


function cargarDatosEnFormulario(id) {
    console.log('cargarDatosEnFormulario!');
    console.log(id);
    
    const url = `http://localhost:8081/api/crea_chet/usuarios/${id}`;
    fetch(url)
        .then(response => response.json())

        .then(data =>{
            
            document.getElementById("nameUser1").value = data.name;
            document.getElementById("aPaternoUser1").value = data.lastName;
            document.getElementById("aMaternoUser1").value = data.middleName;
            document.getElementById("emailUser1").value = data.email;
            document.getElementById("passwordUser1").value = data.password;
            document.getElementById("telUser1").value = data.phoneNumber;
            
            
        } )
                .catch (error => {
        console.error(error)
    })
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


