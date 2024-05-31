document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('form-tarjeta');
    var numTarjeta = document.getElementById('InputNumTarjeta');
    var nombre = document.getElementById('InputName');
    var fecha = document.getElementById('InputFecha');
    var cvv = document.getElementById('InputCVV');

    form.addEventListener('submit', function (event) {
        // Inicializa la validez del formulario
        var isValid = true;

        // Validación del número de tarjeta
        if (!/^\d{16}$/.test(numTarjeta.value)) {
            numTarjeta.classList.add('is-invalid');
            isValid = false;
        } else {
            numTarjeta.classList.remove('is-invalid');
            numTarjeta.classList.add('is-valid');
        }

        // Validación del nombre
        if (nombre.value.trim() === '') {
            nombre.classList.add('is-invalid');
            isValid = false;
        } else {
            nombre.classList.remove('is-invalid');
            nombre.classList.add('is-valid');
        }

        // Validación de la fecha
        if (!/^\d{2}\/\d{2}$/.test(fecha.value)) {
            fecha.classList.add('is-invalid');
            isValid = false;
        } else {
            fecha.classList.remove('is-invalid');
            fecha.classList.add('is-valid');
        }

        // Validación del CVV
        if (!/^\d{3,4}$/.test(cvv.value)) {
            cvv.classList.add('is-invalid');
            isValid = false;
        } else {
            cvv.classList.remove('is-invalid');
            cvv.classList.add('is-valid');
        }

        // Si el formulario no es válido, evita el envío
        if (!isValid) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            alert('Formulario válido y enviado.');
        }
    });
});

document.getElementById('BotonRegresar').addEventListener('click', function() {
    window.location.href = "/front-end/vistas/formasPago/formasPago.html";
});

document.getElementById('InputNumTarjeta').addEventListener('input', function() {
    // Obtener el valor del campo de número de tarjeta
    var numTarjeta = this.value;
    
    // Dividir el número de tarjeta en grupos de cuatro dígitos
    var grupos = numTarjeta.match(/.{1,4}/g) || []; // Expresión regular para dividir en grupos de cuatro dígitos

    // Actualizar el contenido de las divisiones en la sección de clave
    var claveDivs = document.querySelectorAll('#Clave div');
    for (var i = 0; i < claveDivs.length; i++) {
        if (i < grupos.length) {
            claveDivs[i].textContent = grupos[i];
        } else {
            claveDivs[i].textContent = '*';
        }
    }
});
document.getElementById('InputName').addEventListener('input', function() {
    // Obtener el valor del campo de nombre
    var nombreCompleto = this.value;
    
    // Actualizar la sección de datos con el nombre
    var datosDivs = document.querySelectorAll('#Datos div');
    datosDivs[0].textContent = nombreCompleto;
});


document.getElementById('InputFecha').addEventListener('input', function() {
    // Obtener el valor del campo de fecha
    var fecha = this.value;
    
    // Actualizar la sección de datos con la fecha
    var datosDivs = document.querySelectorAll('#Datos div');
    datosDivs[1].textContent = fecha;
});
