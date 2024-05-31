document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('addressForm');
    const codigoPostalInput = document.getElementById('inputCodigoPostal');
    const codigoPostalError = document.getElementById('codigoPostalError');
    const indicacionesInput = document.getElementById('inputIndicaciones');
    const caracteresRestantes = document.getElementById('caracteresRestantes');

    // Evento para validar el código postal
    codigoPostalInput.addEventListener('input', function() {
        const value = codigoPostalInput.value;

        // Comprobar si el valor contiene solo números y tiene una longitud de 5 caracteres
        const isValid = /^[0-9]{5}$/.test(value);

        if (!isValid) {
            codigoPostalInput.classList.add('is-invalid');
            codigoPostalError.textContent = 'El código postal debe contener exactamente 5 dígitos numéricos.';
        } else {
            codigoPostalInput.classList.remove('is-invalid');
            codigoPostalError.textContent = '';
        }
    });

    // Evento para contar los caracteres restantes
    indicacionesInput.addEventListener('input', function() {
        const maxLength = indicacionesInput.getAttribute('maxlength');
        const currentLength = indicacionesInput.value.length;
        caracteresRestantes.textContent = maxLength - currentLength;
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const requiredFields = [
            'inputNombre',
            'inputApellidos',
            'inputCodigoPostal',
            'inputEstado',
            'inputMunAlc',
            'inputColonia',
            'inputCalle',
            'inputNumExt',
            'inputTelefono'
        ];

        let isValid = true;

        requiredFields.forEach(function(fieldId) {
            const field = document.getElementById(fieldId);
            const errorContainer = field.nextElementSibling;

            if (!field.value.trim()) {
                field.classList.add('is-invalid');
                if (errorContainer && errorContainer.classList.contains('invalid-feedback')) {
                    errorContainer.textContent = 'Este campo es obligatorio';
                }
                isValid = false;
            } else {
                field.classList.remove('is-invalid');
                if (errorContainer && errorContainer.classList.contains('invalid-feedback')) {
                    errorContainer.textContent = '';
                }
            }
        });

        if (!isValid) {
            return;
        }

        // Captura los valores del formulario
        const direccion = {
            nombre: document.getElementById('inputNombre').value,
            apellidos: document.getElementById('inputApellidos').value,
            codigoPostal: document.getElementById('inputCodigoPostal').value,
            estado: document.getElementById('inputEstado').value,
            municipioAlcaldia: document.getElementById('inputMunAlc').value,
            colonia: document.getElementById('inputColonia').value,
            calle: document.getElementById('inputCalle').value,
            numeroExt: document.getElementById('inputNumExt').value,
            numeroIntDep: document.getElementById('inputNumIntDep').value,
            entreCalles: {
                calle1: document.getElementById('inputCalle1').value,
                calle2: document.getElementById('inputCalle2').value
            },
            telefono: document.getElementById('inputTelefono').value,
            indicaciones: document.getElementById('inputIndicaciones').value
        };

        // Muestra los datos capturados en la página
        mostrarDatos(direccion);
    });

    // Función para mostrar los datos en la página
    function mostrarDatos(direccion) {
        const datosDireccion = document.getElementById('datosDireccion');
        datosDireccion.innerHTML = `
            <h2>Datos de la dirección</h2>
            <p><strong>Nombre:</strong> ${direccion.nombre}</p>
            <p><strong>Apellidos:</strong> ${direccion.apellidos}</p>
            <p><strong>Código Postal:</strong> ${direccion.codigoPostal}</p>
            <p><strong>Estado:</strong> ${direccion.estado}</p>
            <p><strong>Municipio/Alcaldía:</strong> ${direccion.municipioAlcaldia}</p>
            <p><strong>Colonia:</strong> ${direccion.colonia}</p>
            <p><strong>Calle:</strong> ${direccion.calle}</p>
            <p><strong>Número Exterior:</strong> ${direccion.numeroExt}</p>
            <p><strong>Número Interior/Departamento:</strong> ${direccion.numeroIntDep}</p>
            <p><strong>Entre Calles:</strong> ${direccion.entreCalles.calle1} y ${direccion.entreCalles.calle2}</p>
            <p><strong>Teléfono de Contacto:</strong> ${direccion.telefono}</p>
            <p><strong>Indicaciones:</strong> ${direccion.indicaciones}</p>
        `;
    }
});
