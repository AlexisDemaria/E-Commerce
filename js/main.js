alert('¡Bienvenido! Complete sus datos para ser registrado.')

// Se solicitan datos personales al usuario que va a cargar los datos.

const nom = prompt('Ingresar su Nombre')
const dni = prompt('Ingresar su D.N.I')
const edad = prompt('Ingresar su Edad')
const calle = prompt('Ingresar Calle donde vive')

// Se crea una funcion con dichos datos tomados anteriormente.

let usuario = []
function cargarUsuario(nom, dni, edad, calle){
    usuario.push(nom, dni, edad, calle)
    return usuario
} 

cargarUsuario(nom, dni, edad, calle)
console.log(usuario)

alert('Los productos disponibles son: Termica, Toma corriente, Llave, Bastidor, Embellecedor, Disyuntor Diferencial, Cable y Caja')

// Se crea un objeto con diferentes productos

const productos = [
    {id: 0, desc: 'Termica', precio: 5000, cant: 10},
    {id: 1, desc: 'Disyuntor Diferencial', precio: 7000, cant: 15},
    {id: 2, desc: 'Cable', precio: 4000, cant: 100},
    {id: 3, desc: 'Caja', precio: 500, cant: 20},
    {id: 4, desc: 'Toma corriente', precio: 30, cant: 55},
    {id: 5, desc: 'LLave', precio: 25, cant: 40},
    {id: 6, desc: 'Bastidor', precio: 50, cant: 60},
    {id: 7, desc: 'Embellecedor', precio: 25, cant: 60},
]

// Se pide al usuario que buscar y que precio filtrar.

let buscar = prompt('Articulo a buscar')
let filtrar = prompt('Indicar menor precio a filtrar')
const buscarProducto = productos.find((el) => el.desc === buscar)   
const filtrarPrecio = productos.filter((el) => el.precio <= filtrar)

// Se muestra lo buscado y filtrado por consola. Me gustaria que lo diga por alert pero no se como.

console.log(buscarProducto)
console.log(filtrarPrecio)