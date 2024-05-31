document.addEventListener('DOMContentLoaded', function() {
    const decrementarBtn = document.getElementById('decrementar');
    const incrementarBtn = document.getElementById('incrementar');
    const numeroSpan = document.getElementById('numero');
    const mismoNumero = document.getElementById("mismo--numero");
  
    let numero = 0;

    function actualizarNumeros() {
        numeroSpan.textContent = numero;
        mismoNumero.textContent = numero;
    }
  
    decrementarBtn.addEventListener('click', function() {
      numero--;
      actualizarNumeros();
    });
  
    incrementarBtn.addEventListener('click', function() {
      numero++;
      actualizarNumeros();
    });

    actualizarNumeros();
  });

document.addEventListener('DOMContentLoaded', function() {
    const decrementarBtn = document.getElementById('decrementar1');
    const incrementarBtn = document.getElementById('incrementar1');
    const numeroSpan = document.getElementById('numero1');
    const mismoNumero = document.getElementById("mismo--numero1");
  
    let numero1 = 0;

    function actualizarNumeros() {
        numeroSpan.textContent = numero1;
        mismoNumero.textContent = numero1;
    }
  
    decrementarBtn.addEventListener('click', function() {
      numero1--;
      actualizarNumeros();
    });
  
    incrementarBtn.addEventListener('click', function() {
      numero1++;
      actualizarNumeros();
    });

    actualizarNumeros();
  });

/* Carrusel de Imagenes */


