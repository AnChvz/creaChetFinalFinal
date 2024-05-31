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