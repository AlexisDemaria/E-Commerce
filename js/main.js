// Se crea un objeto con diferentes productos
const carrito = []

const productos = [
    {
        id: 1, 
        title: 'Interruptor Termomagnético Siemens', 
        price: 6000,
        img: "../images/IT Siemens.jpg"
    },
    {
        id: 2, 
        title: 'Disyuntor Diferencial Siemens', 
        price: 7500,
        img: "../images/Diferencial Siemens.jpg"
    },
    {   
        id: 3, 
        title: 'Lampara LED Osram', 
        price: 300,
        img: "../images/Lampara 12W Osram.jpg"
    },
    {
        id: 4, 
        title: 'Toma corriente Schneider', 
        price: 100,
        img: "../images/Toma 20A Schneider.PNG"
    },
    {
        id: 5, 
        title: 'Llave punto simple', 
        price: 100,
        img: "../images/Llave tecla Schneider.jpg"
    },
    {
        id: 6, 
        title: 'Bastidor Schneider', 
        price: 200,
        img: "../images/Bastidor Schneider.jpg"
    },
    {
        id: 7, 
        title: 'Marco embellecedor Schneider', 
        price: 150,
        img: "../images/Marco embellecedor Schneider.jpg"
    },
    {
        id: 8, 
        title: 'Rollo cable Prysmian', 
        price: 5000,
        img: "../images/Cable flexible Prysmian 2,5.jpg"
    },
]

// Se usa una funcion donde "repase" cada producto del objeto anterior. Creando una card con imagenes, precios y titulos de cada producto.

productos.forEach((producto) => {
    const idButton = `add-cart${producto.id}`
    document.getElementById('section-card').innerHTML += `<div class="card h-100">
    <img src="${producto.img}">
    <div class="card-body p-4">
        <div class="text-center">
            <h5 class="fw-bolder">${producto.title}</h5>
            <p>$${producto.price}</p>
        </div>
    </div>
    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div class="text-center"><a class="btn btn-outline-dark mt-auto" id="${idButton}" href="#">Añadir al carrito</a></div>
    </div>
    </div>`
} )

// Se usa una funcion para añadir al carrito 

productos.forEach((producto) => {
    const idButton = `add-cart${producto.id}`
    document.getElementById(idButton).addEventListener('click', () => {
        carrito.push(producto)
        console.log(carrito)
    }) 
} )