function registrarse(){
    // Obtener datos del formulario
    const nombre = document.getElementById("nameInput").value.trim();
    const apellidoPaterno = document.getElementById("lastnameInput").value.trim();
    const apellidoMaterno = document.getElementById("lastnameInput2").value.trim();
    const telefono = document.getElementById("phoneInput").value.trim();
    const email = document.getElementById("emailInput").value.trim();
    const password = document.getElementById("passwordInput").value.trim();

    // Crear un objeto con los datos del usuario
    const usuario = {
        name: nombre,
        lastName: apellidoPaterno,
        middleName: apellidoMaterno,
        email: email,
        password: password,
        phoneNumber: telefono,
        role: "CLIENTE"
    };
    console.log(usuario);
    //Comenzar con la llamada de la API
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
        })
        .catch(error => {
            console.error(error);
        })
}