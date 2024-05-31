//AÑMACEN DE LOS OBJETOS TIPO JSON------------------------------------------------------------------------------------------------------------------------------------------------------
var productos = [
    {
        "id": 1,
        "nombre": "Osito polar",
        "categoria": "Animales",
        "descripcion": "Muñequito suave con forma de oso polar",
        "precio": 100,
        "url_imagen": "/Front-end/assets/imagenesProductos/Oso_Polar-removebg-preview.png",
        "variacion": "Chico",
        "stock": 20
    },
    {
        "id": 2,
        "nombre": "Baby Joda",
        "categoria": "Personajes",
        "descripcion": "Muñequito suave con forma del personaje Baby Jod",
        "precio": 100,
        "url_imagen": "/Front-end/assets/imagenesProductos/Baby_Joda-removebg-preview.png",
        "variacion": "Chico",
        "stock": 15
    },
    {
        "id": 3,
        "nombre": "Bailarina",
        "categoria": "Muñecas",
        "descripcion": "Muñequita con forma de bailarina",
        "precio": 100,
        "url_imagen": "/Front-end/assets/imagenesProductos/Bailarina-removebg.png",
        "variacion": "mediano",
        "stock": 5,
    },
    {
        "id": 4,
        "nombre": "Burrito",
        "categoria": "Animales",
        "descripcion": "Burrito de peluche con bufanda",
        "precio": 100,
        "url_imagen": "/Front-end/assets/imagenesProductos/Burro_Blanco-removebg-preview.png",
        "variacion": "Chico",
        "stock": 3
    },
    {
        "id": 5,
        "nombre": "Camilito",
        "categoria": "Personajes",
        "descripcion": "Muñequito personalizado de nuestro compañero Camilo",
        "precio": 200,
        "url_imagen": "/Front-end/assets/imagenesProductos/Camilo-removebg.png",
        "variacion": "Chico",
        "stock": 1
    },
    {
        "id": 6,
        "nombre": "Dinosaurio",
        "categoria": "Animales",
        "descripcion": "Muñequito en forma de dinosaurio verde",
        "precio": 100,
        "url_imagen": "/Front-end/assets/imagenesProductos/Dinosaurio-removebg-preview.png",
        "variacion": "Mediano",
        "stock": 2
    },
    {
        "id": 7,
        "nombre": "Flor amarilla",
        "categoria": "Flores",
        "descripcion": "Llavero con forma de flor amarilla",
        "precio": 50,
        "url_imagen": "/Front-end/assets/imagenesProductos/Flor_Amarilla-removebg-preview.png",
        "variacion": "Chico",
        "stock": 1
    },
    {
        "id": 8,
        "nombre": "Freddy Mercury",
        "categoria": "Personajes",
        "descripcion": "Muñequito con forma del personaje de Queen",
        "precio": 100,
        "url_imagen": "/Front-end/assets/imagenesProductos/Freddy_M-removebg-preview.png",
        "variacion": "Chico",
        "stock": 1
    },
    {
        "id": 9,
        "nombre": "Frida Khalo",
        "categoria": "Personajes",
        "descripcion": "Muñequito con forma del personaje de Frida Khalo",
        "precio": 100,
        "url_imagen": "/Front-end/assets/imagenesProductos/Frida_Khalo-removebg-preview.png",
        "variacion": "Chico",
        "stock": 5
    },
    {
        "id": 10,
        "nombre": "Gansos",
        "categoria": "Animales",
        "descripcion": "Muñequitos con forma de gansos",
        "precio": 100,
        "url_imagen": "/Front-end/assets/imagenesProductos/Gansos-removebg-preview.png",
        "variacion": "Mediano",
        "stock": 4
    },
    {
        "id": 11,
        "nombre": "Gatito",
        "categoria": "Animales",
        "descripcion": "Muñequitos con forma de gato con bufanda",
        "precio": 100,
        "url_imagen": "/Front-end/assets/imagenesProductos/Gato_Bufanda-removebg-preview.png",
        "variacion": "Mediano",
        "stock": 3
    },
    {
        "id": 12,
        "nombre": "Harry Potter",
        "categoria": "Personajes",
        "descripcion": "Muñequitos de Harry Potter",
        "precio": 100,
        "url_imagen": "/Front-end/assets/imagenesProductos/Harry_P-removebg-preview.png",
        "variacion": "Mediano",
        "stock": 4
    },
    {
        "id": 13,
        "nombre": "Jirafa",
        "categoria": "Animales",
        "descripcion": "Muñequitos con forma de jirafa amarilla",
        "precio": 100,
        "url_imagen": "/Front-end/assets/imagenesProductos/Jirafa-removebg-preview.png",
        "variacion": "Mediano",
        "stock": 4
    },
    {
        "id": 14,
        "nombre": "Monito",
        "categoria": "Animales",
        "descripcion": "Muñequitos con forma de monito color café",
        "precio": 100,
        "url_imagen": "/Front-end/assets/imagenesProductos/Monito-removebg-preview.png",
        "variacion": "Mediano",
        "stock": 4
    },
    {
        "id": 15,
        "nombre": "Mexicana",
        "categoria": "Muñecas",
        "descripcion": "Muñequita vestida de mexicana",
        "precio": 100,
        "url_imagen": "/Front-end/assets/imagenesProductos/Muñeca_Mexicana_Grande-removebg-preview.png",
        "variacion": "Mediano",
        "stock": 4
    },
    {
        "id": 16,
        "nombre": "Marisol",
        "categoria": "Personajes",
        "descripcion": "Muñequita personalizada",
        "precio": 100,
        "url_imagen": "/Front-end/assets/imagenesProductos/Muñeca_Muchacha-removebg-preview.png",
        "variacion": "Mediano",
        "stock": 4
    },
    {
        "id": 17,
        "nombre": "La novia",
        "categoria": "Personajes",
        "descripcion": "Muñequita vestida de novia",
        "precio": 100,
        "url_imagen": "/Front-end/assets/imagenesProductos/Muñeca_Novia-removebg-preview.png",
        "variacion": "Mediano",
        "stock": 4
    },
    {
        "id": 18,
        "nombre": "La diabla",
        "categoria": "Muñecas",
        "descripcion": "Muñequita personalizada",
        "precio": 100,
        "url_imagen": "/Front-end/assets/imagenesProductos/Muñeca_PeloRojo-removebg-preview.png",
        "variacion": "chico",
        "stock": 4
    },
    {
        "id": 19,
        "nombre": "Marianita",
        "categoria": "Muñecas",
        "descripcion": "Muñequita personalizada",
        "precio": 100,
        "url_imagen": "/Front-end/assets/imagenesProductos/Muñeca_RojoAzul-removebg-preview.png",
        "variacion": "chico",
        "stock": 4
    },
    {
        "id": 20,
        "nombre": "El niño",
        "categoria": "Personajes",
        "descripcion": "Muñequito personalizado",
        "precio": 100,
        "url_imagen": "/Front-end/assets/imagenesProductos/Muñeco_Niño-removebg-preview.png",
        "variacion": "Mediano",
        "stock": 4
    },
];
//FIN DE LOS OBJETOS TIPO JSON-------------------------------------------------------------------------------------------------------------------------------------------------------


//PARA EL HEADER-------------------------------------------------------------------------------------------------------------------------------------------------------------------
//FUNCIÓN PARA EL QUERY, PARA EL TAMAÑO DE PANTALLAS
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.toggle-menu');
    const menuContent = document.querySelector('.menu-content');

    toggleButton.addEventListener('click', function() {
        menuContent.style.display = menuContent.style.display === 'none' || menuContent.style.display === '' ? 'block' : 'none';
    });
});



//PARA LO MAS NUEVO----------------------------------------------------------------------------------------------------------------------------------------------------------------

// Función para generar las tarjetas de productos
function generarTarjetas(productos) {
    var containerProductos = document.getElementById("product-container");
    containerProductos.innerHTML = ""; // Limpiar el contenedor antes de agregar nuevas tarjetas

    // Generar tarjeta para cada producto
    productos.forEach(function (producto) {
        var card = document.createElement("div");
        card.classList.add("product-card");
        card.innerHTML = `
            <img src="${producto.url_imagen}" alt="${producto.nombre}">
            <h3 id="card-productoNombre">${producto.nombre}</h3>
            <p>Precio: $ ${producto.precio}</p>
            <button id="btn-comprarLoMasNuevo">Comprar</button>
            <button id="btn-detallesLoMasNuevo">Detalles</button>
        `;
        containerProductos.appendChild(card);
    });
}

// Invertir el orden del arreglo de productos para mostrar los más recientes primero
productos.reverse();

// Mostrar los primeros productos al cargar la página
generarTarjetas(productos.slice(0, 4));

// Manejar eventos de botones de navegación
var currentPage = 0;
var productsPerPage = 4;

document.getElementById("prev-button").addEventListener("click", function () {
    if (currentPage > 0) {
        currentPage--;
        generarTarjetas(productos.slice(currentPage * productsPerPage, (currentPage + 1) * productsPerPage));
    }
});

document.getElementById("next-button").addEventListener("click", function () {
    if ((currentPage + 1) * productsPerPage < productos.length) {
        currentPage++;
        generarTarjetas(productos.slice(currentPage * productsPerPage, (currentPage + 1) * productsPerPage));
    }
});
//FIN DE LO MAS NUEVO -----------------------------------------------------------------------------------------------------------------------------------------------------------------




// Función para mostrar los productos de manera aleatoria según las categorías seleccionadas
function mostrarProductos() {
    // Obtener categorías seleccionadas
    const checkboxes = document.querySelectorAll('.checkbox');
    const categoriasSeleccionadas = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);

    // Filtrar productos si hay al menos una categoría seleccionada
    let productosFiltrados = productos;
    if (categoriasSeleccionadas.length > 0) {
        productosFiltrados = productos.filter(producto => categoriasSeleccionadas.includes(producto.categoria));
    }

    // Mezclar aleatoriamente los productos filtrados
    productosFiltrados = shuffleArray(productosFiltrados);

    // Mostrar los productos en el contenedor
    const productosContainer = document.getElementById('productos-container');
    productosContainer.innerHTML = ''; 

    // Crear una fila para envolver las tarjetas
    let row;
    productosFiltrados.forEach((producto, index) => {
        // Crear una tarjeta para cada producto
        const card = document.createElement('div');
        card.classList.add('card', 'col-md-3', 'mb-3');
        card.style.maxWidth = '18rem';

        // Crear la imagen del producto
        const imagen = document.createElement('img');
        imagen.src = producto.url_imagen;
        imagen.classList.add('card-img-top');
        imagen.alt = producto.nombre;

        // Crear el cuerpo de la tarjeta
        const cuerpo = document.createElement('div');
        cuerpo.classList.add('card-body');
        cuerpo.style.display = 'grid';
        cuerpo.style.gridTemplateRows = 'auto 1fr auto auto';

        // Crear el título (nombre del producto)
        const titulo = document.createElement('h5');
        titulo.classList.add('card-title');
        titulo.textContent = producto.nombre;

        // Crear la descripción del producto
        const descripcion = document.createElement('p');
        descripcion.classList.add('card-text');
        descripcion.textContent = producto.descripcion;
        descripcion.style.maxHeight = '80px';
        descripcion.style.overflow = 'hidden'; 
        descripcion.style.textOverflow = 'ellipsis';

        // Crear el precio del producto
        const precio = document.createElement('p');
        precio.classList.add('card-text');
        precio.textContent = `Precio: $${producto.precio}`;
        precio.style.alignSelf = 'end';

        // Crear el contenedor para los botones
        const botonContainer = document.createElement('div');
        botonContainer.style.display = 'flex';
        botonContainer.style.justifyContent = 'space-between'; 

        // Crear botón de comprar
        const botonComprar = document.createElement('button');
        botonComprar.classList.add('btn', 'btn-comprar');
        botonComprar.textContent = 'Comprar';

        // Crear botón de detalles
        const botonDetalles = document.createElement('button');
        botonDetalles.classList.add('btn', 'btn-detalles');
        botonDetalles.textContent = 'Detalles';

        // Agregar botones al contenedor
        botonContainer.appendChild(botonComprar);
        botonContainer.appendChild(botonDetalles);

        // Agregar contenedor de botones al cuerpo de la tarjeta
        cuerpo.appendChild(titulo);
        cuerpo.appendChild(descripcion);
        cuerpo.appendChild(precio);
        cuerpo.appendChild(botonContainer); 


        card.appendChild(imagen);
        card.appendChild(cuerpo);

        // Agregar la tarjeta a la fila
        if (index % 4 === 0) {
            row = document.createElement('div');
            row.classList.add('row', 'mb-3');
        }
        row.appendChild(card);
        productosContainer.appendChild(row);

    });
}

// Función para mezclar aleatoriamente un array (algoritmo de Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Ejecutar la función al cargar la página y cada vez que cambie el estado de las casillas de verificación
document.addEventListener('DOMContentLoaded', function () {
    // Desactivar todas las casillas de verificación al cargar la página
    document.querySelectorAll('.checkbox').forEach(checkbox => checkbox.checked = false);
    // Mostrar todos los productos al cargar la página
    mostrarProductos();
});

document.querySelectorAll('.checkbox').forEach(checkbox => checkbox.addEventListener('change', mostrarProductos));




//-------------------------------------------------------------------BOTÓN PARA IR ARRIBA--------------------------------------------------------------------------------
// Obtener el botón de ir arriba
var btnIrArriba = document.getElementById("btnIrArriba");

// Función para ir al inicio de la página
function irArriba() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Vincular evento de clic al botón
btnIrArriba.addEventListener("click", irArriba);

window.onscroll = function () { scrollFunction(); };

function scrollFunction() {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var windowHeight = window.innerHeight;

    // Calcular la posición en la página donde el botón debe detenerse
    var stopScrollPosition = document.body.offsetHeight - windowHeight - btnIrArriba.offsetHeight - 20; // 20 es un margen para el footer OJOOO

    // Mostrar u ocultar el botón basado en la posición del scroll
    if (scrollTop > 20) {
        btnIrArriba.classList.add("mostrar");
    } else {
        btnIrArriba.classList.remove("mostrar");
    }

    // Detener el botón si la posición del scroll supera la posición de detención
    if (scrollTop > stopScrollPosition) {
        btnIrArriba.style.position = 'absolute';
        btnIrArriba.style.bottom = '20px'; 
    } else {
        btnIrArriba.style.position = 'fixed';
        btnIrArriba.style.bottom = '20px';
    }
}



