//////////////////////////////////////////////////////////////
//  Función para cargar contenido de archivos html externos //
//////////////////////////////////////////////////////////////

// Función para cargar contenido de archivos html
function cargarContenido(rutaArchivo, contenedor) {
    // Crear un objeto XML Http Request
    var xhr = new XMLHttpRequest();
    // Configurar http request [http request]
    xhr.open('GET', rutaArchivo, true);
    // Definir la función de respuesta y validar estatus [http status = 200 'OK']
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // Insertar la respuesta en el contenedor
                document.querySelector(contenedor).innerHTML = xhr.responseText;
            } else {
                console.error('Error al cargar página');
            }
        }
    };
    xhr.send();
}


//////////////////////////////////////////////////////
//                  fakeDB                          //
//////////////////////////////////////////////////////
const pedidosList = [
{
    name: "Muñeco Racata",
    status: "En camino",
    imageUrl: "/Front-End/resources/products/product2.png",
    description: "Muñeco de peluche con ojos que te miran fijamente como si supieran tus secretos más oscuros maldito puerco.",
    date: "16/Mayo/2024"
},
{
    name: "Muñeco placoson",
    status: "entregado",
    imageUrl: "/Front-End/resources/products/product1.jpg",
    description: "Muñequito de peluche super placoso, detalles hechos a mano por una artesana sordomuda, que se picó el dedo con la aguja por lo menos 14 veces.",
    date: "10/Abril/2024"
},
{
    name: "Muñeco facherito",
    status: "En camino",
    imageUrl: "/Front-End/resources/products/product2.png",
    description: "Muñeco de peluche con ojos que te miran fijamente como si supieran tus secretos más oscuros maldito puerco.",
    date: "20/Mayo/2024"
},
{
    name: "Muñeco perron",
    status: "entregado",
    imageUrl: "/Front-End/resources/products/product1.jpg",
    description: "Muñequito de peluche super placoso, detalles hechos a mano por una artesana sordomuda, que se picó el dedo con la aguja por lo menos 14 veces.",
    date: "10/Abril/2024"
}
];

const articulosList = [
    {
        name: "Muñeco Racata",
        productId: 001,
        imageUrl: "/Front-End/resources/products/product2.png",
        description: "Muñeco de peluche con ojos que te miran fijamente como si supieran tus secretos más oscuros maldito puerco.",
        price: 599
    },
    {
        name: "Muñeco placoson",
        productId: 002,
        imageUrl: "/Front-End/resources/products/product1.jpg",
        description: "Muñequito de peluche super placoso, detalles hechos a mano por una artesana sordomuda, que se picó el dedo con la aguja por lo menos 14 veces.",
        price: 699
    },
    {
        name: "Muñeco facherito",
        productId: 003,
        imageUrl: "/Front-End/resources/products/product2.png",
        description: "Peluche 'Pandita Lamentoso' ¡Abraza la tristeza! Este adorable osito está diseñado para hacerte sentir peor que antes.",
        price: 460
    },
    {
        name: "Muñeco perron",
        productId: 004,
        imageUrl: "/Front-End/resources/products/product1.jpg",
        description: "Peluche de osito, tan suave como la traición de tu mejor amigo, con una sonrisa que oculta su deseo de bajarte la novia.",
        price: 500
    },
    {
        name: "Muñeco Sucusu",
        productId: 005,
        imageUrl: "/Front-End/resources/products/product2.png",
        description: "Parece un inofensivo peluche, pero cuando menos lo esperas, comienza a esconder tus llaves.",
        price: 599
    },
    {
        name: "Muñeco Ay ay ay",
        productId: 006,
        imageUrl: "/Front-End/resources/products/product1.jpg",
        description: "Este peluche es como un reloj, se adapta a cualquier muñeca.",
        price: 699
    },
    {
        name: "Muñeco Hand Made",
        productId: 007,
        imageUrl: "/Front-End/resources/products/product2.png",
        description: "Apoco no es el mejor articulo que has visto en tu vida campeón.",
        price: 649
    },
    {
        name: "Muñeco de coleccion",
        productId: 010,
        imageUrl: "/Front-End/resources/products/product1.jpg",
        description: "Mas valioso que el mismísimo que tu certificado de la prepa.",
        price: 899
    }
    ];


//////////////////////////////////////////////////////
//   Función para generar las tarjetas de pedidos   //
//////////////////////////////////////////////////////

function mostrarPedidos(pedidosList, entregados) {

    const contenedor = document.querySelector('.pedidos');
    contenedor.innerHTML = '';

    // Filtrar la lista de pedidos según el estado de la variable entregados
    const pedidosFiltrados = entregados ? pedidosList.filter(pedido => pedido.status === 'entregado') : pedidosList;
  
    pedidosFiltrados.forEach(pedido => {
    // Crear la estructura de la tarjeta de pedido
    const cardHTML = `
    <div class="card">
        <div class="imagen-left">
            <img src="${pedido.imageUrl}" alt="${pedido.name}">
        </div>
        <div class="contenido">
            <div class="info">
                <h2>${pedido.name}</h2>
                <p>${pedido.description}</p>
                <p>Entrega: ${pedido.date}</p>
            </div>
        </div>
    </div>
    `;

    // Agregar la tarjeta al contenedor
    contenedor.innerHTML += cardHTML;
});
};

///////////////////////////////////////////////////////
// Bandera para aplicar y quitar filtro de entregado //
///////////////////////////////////////////////////////

let entregados = false;
// Botón para mostrar todos los pedidos
const botonFalse = document.querySelector('#cambiarEstadoFalse');
botonFalse.addEventListener('click', () => {
    entregados = false; // Establecer entregados en false
    mostrarPedidos(pedidosList, entregados); // Mostrar todos los pedidos
});

// Botón para mostrar solo los pedidos entregados
const botonTrue = document.querySelector('#cambiarEstadoTrue');
botonTrue.addEventListener('click', () => {
    entregados = true; // Establecer entregados en true
    mostrarPedidos(pedidosList, entregados); // Mostrar solo los pedidos entregados
});

/////////////////////////////////////////////////////////////////////////////
// Función para asignar el estatus seleccionado al ultimo boton presionado //
/////////////////////////////////////////////////////////////////////////////

function selectButton(button) {
    // Obtener todos los botones
    var buttons = document.querySelectorAll('.my-button');

    // Remover la clase 'selected' de todos los botones
    buttons.forEach(function(btn) {
        btn.classList.remove('selected');
    });

    // Agregar la clase 'selected' al botón clickeado
    button.classList.add('selected');
}

//////////////////////////////////////////////////////
//  Función para generar las tarjetas de articulos  //
//////////////////////////////////////////////////////

function mostrarArticulosRandom(articulosList) {
    // Mezclar la lista de artículos en un orden aleatorio
    const articulosRandom = shuffleArray(articulosList);
    if (articulosRandom.length>12) {
        const articulosRandom = articulosRandom.slice(0,11)
    }
    
    const contenedor = document.querySelector('.relatedItems');
    contenedor.innerHTML = '';

    // Iterar sobre los artículos mezclados y construir las tarjetas HTML
    articulosRandom.forEach(articulo => {
        // Crear la estructura de la tarjeta
        const cardHTML = `
        <div class="relatedCard">
            <div class="imagen-top">
                <img src="${articulo.imageUrl}" alt="${articulo.name}">
            </div>
            <div class="relatedItemContent">
                <div class="relatedItemInfo">
                    <h2>${articulo.name}</h2>
                    <p>${articulo.description}</p>
                    <p>Precio: ${articulo.price}</p>
                </div>
            </div>
        </div>
        `;

        // Agregar la tarjeta al contenedor
        contenedor.innerHTML += cardHTML;
    });
}

// Función para mezclar un array en un orden aleatorio
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

//////////////////////////////////////////////////////////////////////
//  Llamar a la función mostrarPedidos cuando se cargue la página   //
//////////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function() {
    mostrarPedidos(pedidosList, entregados);
    mostrarArticulosRandom(articulosList);
});