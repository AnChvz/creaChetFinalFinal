function iniciarSesion(){
    // Obtener datos del formulario
    const email = document.getElementById("emailInput").value.trim();
    const password = document.getElementById("passwordInput").value.trim();

    const url = `http://localhost:8081/api/crea_chet/usuarios/email?email-user=${email}`;

    fetch(url)
       .then(response => response.json())
       .then(data => {
        console.log(data.email);
        console.log(data.password);
        console.log(data.name);
        })
       .catch(error => {
        console.log(error);
        });


}