// Se definen varias constantes que serán utilizadas y actualizadas a lo largo del programa.

const contenedorProductos = document.getElementById('prodContenedor')
const contenedorCarrito = document.getElementById('carroContenedor')
const vaciarCarrito = document.getElementById('vaciarCarro')
const contadorCarrito = document.getElementById('contadorCarrito')
const cantidad = document.getElementById('cantidad')
const cantidadTotal = document.getElementById('cantidadTotal')
const precioTotal = document.getElementById('precioTotal')
let carrito = []

// Se carga y "parsea" el localStorage.

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

// Función para vaciar el carrito y actualizar el mismo. Se agrega una librería.

vaciarCarrito.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
    localStorage.setItem('carrito', JSON.stringify(carrito))
    Swal.fire({
        title: '¡Listo!',
        text: 'Su carro ha sido vaciado correctamente',
        icon: 'success',
        confirmButtonText: 'Aceptar'
    })
})

// Función donde se utiliza fetch para "llamar o buscar" de manera asíncrona, elementos de archivo stock.json, posteriormente se crean 
// cards con las propiedades
// obtenidas del archivo stock.json.

const url = 'js/stock.json'
const stockProductos = async () => {
    const resp = await 
    fetch(url)
    const data = await resp.json()
    .catch((error) => {
        console.error(error)
    })
    data.forEach((producto) => {
        const div = document.createElement('div')
        div.innerHTML =`
            <div class="card h-100">
            <img src="${producto.img}">
            <div class="card-body p-4">
            <div class="text-center">
            <h5 class="fw-bolder">${producto.title}</h5>
            <p>$${producto.price}</p>
            </div>
            </div>
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <button id="agregar${producto.id}" class="btn btn-outline-dark mt-auto">Añadir al carrito<i class="fas fa-shopping-cart"></i></button>`
            contenedorProductos.appendChild(div)
            const button = document.getElementById(`agregar${producto.id}`)
            button.addEventListener('click', () => {
                agregarAlCarrito(producto.id)
            })
    })
}
stockProductos()

// Función agregar al carrito utilizando fetch con el mismo concepto que la función anterior (stockProductos), donde se aumentara la cantidad 
// del producto seleccionado sin repetirlo. Si existe, se actualiza la cantidad, si no esta, se agrega dicho producto. 
// Trabajando con el id, ya que es único de cada producto. Por ultimo, se actualiza el carrito.

const agregarAlCarrito = (prodId) => {
    fetch(url)
    .then(resp => resp.json())
    .then(data => {
        const existe = carrito.some (prod => prod.id === prodId) 
        if (existe){ 
            const prod = carrito.map (prod => {
                if (prod.id === prodId){
                    prod.quantity++
                }
            })
        } else {
            const item = data.find((prod) => prod.id === prodId)
            carrito.push(item)
        }
        actualizarCarrito() 
    })
}

// Función para eliminar un producto del carrito. Buscando el elemento por indice "n" y eliminando el mismos al seleccionarlo. 
// Se actualiza el carrito

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)
    const n = carrito.indexOf(item)
    carrito.splice(n, 1)
    actualizarCarrito()
    localStorage.setItem('carrito', JSON.stringify(carrito)) 
}

// Función que carga el carrito en el modal, mostrando el precio final.

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = "" 
    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <table class="table"><tbody>
        <tr>
        <th scope="row"><span id="cantidad">${prod.quantity}</span></th>
        <td><img src="${prod.img}" style="width:100px"></td>
        <td>${prod.title}</td>
        <td><strong>$${prod.price}</strong></td>
        <td><button onclick="eliminarDelCarrito(${prod.id})" class="btn btn-warning">Eliminar</button></td>
        </tr>
        </tbody>
        </table>
        `
        
        contenedorCarrito.appendChild(div)
        localStorage.setItem('carrito', JSON.stringify(carrito))
    })
    contadorCarrito.innerText = carrito.length
    console.log(carrito)
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.quantity * prod.price, 0)
}