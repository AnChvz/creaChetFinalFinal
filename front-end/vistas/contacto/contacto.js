//Mando a llamar a mis nodos padres
const botonEnviar = document.getElementById("Button--Enviar");//Boton enviar
const botonLimpiar = document.getElementById("Button--Limpiar");
const mensaje1 = document.getElementById("m1");//Lugar donde aparecera el msj para el primer campo(Asunto)
const mensaje2 = document.getElementById("m2");//Lugar donde aparecera el msj para el segundo campo(Nombre)
const mensaje3 = document.getElementById("m3");//Lugar donde aparecera el msj para el cuarto campo(Mensaje)
const mensaje4 = document.getElementById("m4");//Lugar donde aparecera el msj que indica que el formulario se envio exitosamente
const mensaje5 = document.getElementById("mensajeValidación");//Lugar donde aparecera el msj para el tercer campo(email)

//--------Eventos-----------------//

//Comienza nuestro Callback, con el evento click para nuestro boton enviar 
botonEnviar.addEventListener("click", (event) => {
    //Aqui llamo el valor de los nodos padre para porsteiormente poder comparar su valor con las condiciones
    const SubjectInput = document.getElementById("Input--Subject").value;
    const UserInput = document.getElementById("Input--User").value;
    const MenInput = document.getElementById("Input--Menssage").value;
    const Email=document.getElementById("Input--Email").value;

    //Aqui guardo el return de la funcion que evalua los campos de nombre,asunto y mensaje
    //Nota:Para los campos (asunto,nombre,mensaje) utilice la misma funcion por que solo debiamos evaluar que el campo no estuviera vacio.
    //En el caso del email eran otras condiciones, por lo tanto tiene su propia funcion.
    const campo1Valido = validarCampos(SubjectInput, mensaje1);
    const campo2Valido = validarCampos(UserInput, mensaje2);
    const campo3Valido = validarCampos(MenInput, mensaje3);
    //Aqui guardo el return de la funcion que evalua el campo de email
    const campo4Valido = validarCorreoElectronico(Email,mensaje5);

    //En este if comparo los return de mi funcion y el valor de mi input.
    if (!campo1Valido || !campo2Valido || !campo3Valido || !campo4Valido ) {
        event.preventDefault();//Si mis campos estan vacios entonces este metodo evitara que mi boton pueda enviar el formulario a la direccion indicada
    }
});

//Este evento es para limpiar los campos

botonLimpiar.addEventListener("click",function() {
    //Se manda a llamar directamente el valor de los campos para vejarlos vacios directamente.
    // document.getElementById("Input--Subject").value="";
    // document.getElementById("Input--User").value="";
    document.getElementById("Input--Menssage").value="";
    // Email=document.getElementById("Input--Email").value="";
    document.getElementById("mensajeValidación").value = "";
    document.getElementById("m1").value = "";
    document.getElementById("m2").value = "";
    document.getElementById("m3").value = "";
    document.getElementById("m4").value = "";

    
    
});

//Este evento es para mandar los datos a email
document.getElementById("Formulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío predeterminado del formulario

    // Obtener los valores de los campos del formulario
    const subject = document.getElementById("Input--Subject").value;
    const name = document.getElementById("Input--User").value;
    const email = document.getElementById("Input--Email").value;
    const message = document.getElementById("Input--Menssage").value;

    // Enviar los datos del formulario a través de EmailJS(Tenemos numero de msj limitados)
    emailjs.send('service_25030vg', 'template_8c92y4g', {//Estos datos los obtenemos de nuestra cuenta
        from_name: name,
        from_email: email,
        subject: subject,
        message: message
        
    }).then(function(response) {
        console.log("Correo electrónico enviado:", response);
        mensaje4.textContent = "Envío de Mensaje Exitoso";
        // Limpiar el formulario después de enviar el correo electrónico
        document.getElementById("Formulario").reset();
        setTimeout(function() {
            document.getElementById("m4").textContent = "";
        }, 1500);

    }, function(error) {
        console.error("Error al enviar el correo electrónico:", error);
        mensaje4.textContent = "Hubo un error en el Envío";
        setTimeout(function() {
            document.getElementById("m4").textContent = "";
        }, 1500);
        
        
        
    });
    
});









//-----------Funciones---------------------------//
//Esta funcion evalua que los cmapos de mis inputs tengan texto, e indica si es necesario enviar un mensaje de advertencia o si es necesario quitarlo
function validarCampos(input, msj) {
    //Establezco el mensaje que quiero que muestre 
    const mensajeError = "Llena el campo";
    //trim() es un método que elimina los espacios en blanco al principio y al final de una cadena
    if (!input.trim()) {//Compara los valores del input, es decir si esta vacio, me manda el mensaje de error y un false 
        msj.textContent = mensajeError;
        return false;
    } else {
        msj.textContent = ""; // Si esta lleno el input, no manda mensaje. 
        return true;
    }
}
//Esta funcion evalua que el campo de email sea valido 
function validarCorreoElectronico(correo,msj) {
     //Establezco el mensaje que quiero que muestre 
    const mensajeError2 = "El correo no es válido";
    //Establezco con Regex que tipo de texto es valido ()@dominio.()
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValido.test(correo)==true){
        msj.textContent = ""; // Limpia el mensaje de error
        return true;
    }else{
        msj.textContent = mensajeError2;//Crea el mensaje en msj.
        return false;

    }
}
    
