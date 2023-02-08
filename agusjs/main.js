let stockproductos = [
    {
        id: 1, nombre: "Call of Duty Vanguard", precio: 2400, desc:"El videojuego de disparos en primera persona más conocido del mundo", img: "./assets/cod.jpg", cantidad: 1
    },
    {
        id: 2, nombre: "Fifa 23", precio: 4000, desc:"La nueva entrega del mejor videojuego de futbol vale toda la pena", img: "./assets/fifa.jpg", cantidad: 1
    },
    {
        id: 3, nombre: "Lego Marvel", precio: 2400, desc: "Un juego tranquilo para pasar el tiempo con amigos desbloqueando personajes.", img: "./assets/lego.jpg", cantidad: 1
    },
    {
        id: 4 , nombre: "UFC 4", precio: 2800, desc:"Un videojuego de artes marciales muy conocido. Ideal para luchadores", img: "./assets/UFC-4.webp", cantidad: 1
    },
    {
        id: 5, nombre: "The Last OF Us", precio: 3100, desc: "El mejor juego de zombies con una historia que atrapa a todas las edades.", img: "./assets/the-last-of-us.jpg", cantidad: 1
    },
    {
        id: 6, nombre: "Tom Clancy´s", precio: 4000, desc:"Dos equipos, 5 contra 5, muchos especialistas y mucha estrategia", img: "./assets/six-siege.webp", cantidad: 1
    },
    {
        id:7, nombre: "Assasin´s Creed Valhalla", precio: 4000, desc: "Vikingos, asesinos y acción, todo lo que te trae este juego es asombroso.", img:"./assets/creed.jpg", cantidad: 1
    },
    {
        id: 8, nombre: "Red Dead Redemption 2", precio: 3800, desc:"Si los caballos y las armas te gustan, este es el juego indicado.", img: "./assets/red.jpg", cantidad: 1
    },
    {
        id: 9, nombre: "GTA 5", precio: 3000, desc:"El mitico juego de acción y aventura con muchas misiones divertidas", img: "./assets/gta.jpg", cantidad: 1
    }
    
]


// productos consolas
let stockconsolas =[
    {
        id: 10, nombre: "Control Playstation 4", precio: 17000, desc:"Completamente nuevo para jugar con la consola de Playstation 4", desc2:"Colores negro o blanco", desc3:"Viene con cargador", img: "./assets/control-ps4.jpg", cantidad: 1
    },
    {
        id:11, nombre: "Playstation 4 ", precio: 180000, desc:"La consola más famosa de la historia del gaming nunca puede faltar", desc2: "Viene con un control", desc3:"Viene con el Uncharted 4", img: "./assets/D_NQ_NP_649238-MLA47385331667_092021-V.jpg", cantidad: 1
    },
    {
        id:12, nombre: "Nintendo Switch", precio: 220000, desc:"Una consola para bolsillo y para llevar a todos lados contigo", desc2:"Viene con todos sus cargadores", desc3:"Viene con los dos joysticks", img: "./assets/consola-nintendo-switch-neon-v11.jpg", cantidad: 1
    },
    {
        id: 13, nombre: "Control Xbox One", precio: 17000, desc: "Completamente nuevo para jugar a la Xbox One con amigos", desc2: "Colores negro o blanco", desc3:"Viene con cargador", img: "./assets/control XBOX one.webp", cantidad: 1
    },
    {
        id: 14, nombre:"Xbox One", precio: 210000, desc:"Otro tipo de consola igual de divertida que la PS4 pero más nueva", desc2: "Viene con un control", desc3: "Colores negro o blanco", img: "./assets/xbox-one.jpg", cantidad: 1
    },
    {
        id: 15, nombre: "Consola Arcade", precio: 300000, desc:"La mejor consola para revivir los 80S y 90S. Incluye juegos modernos también", desc2:"Viene con 5000 juegos", desc3:"El diseño se decide en la tienda", img: "./assets/pandora-box.jpg", cantidad: 1
    }
]

let carrito = []
// recibirStorage()
console.log(carrito);
// funcion agregar al carrito
function agregarVideojuegoAlCarrito(id) {
    // console.log(id);
    console.log("Agregue un videojuego");
    const prod = stockproductos.find(el => el.id === id)
    // console.log(prod);
    const prodCarrito = {
        id: prod.id,
        nombre: prod.nombre,
        precio: prod.precio,
        img: prod.img,
        cantidad: 1
    }


    const carritoTemp = [...carrito]
    carritoTemp.forEach(el => {
        if (el.id === id) {
            el.cantidad++
        }
    })
    if (carrito.length === 0) {
        carritoTemp.push(prodCarrito)
    }
    const existe = carritoTemp.find(el => el.id === id)
    // console.log(existe);
    if (!existe) {
        carritoTemp.push(prodCarrito)
    }
    carrito = [...carritoTemp]
    mostrarCarrito()
}

function agregarConsolaAlCarrito(id) {
    // console.log(id);
    console.log("Agregue una consola");
    const prod = stockconsolas.find(el => el.id === id)
    // console.log(prod);
    const prodCarrito = {
        id: prod.id,
        nombre: prod.nombre,
        precio: prod.precio,
        img: prod.img,
        cantidad: 1
    }


    const carritoTemp = [...carrito]
    carritoTemp.forEach(el => {
        if (el.id === id) {
            el.cantidad++
        }
    })
    if (carrito.length === 0) {
        carritoTemp.push(prodCarrito)
    }
    const existe = carritoTemp.find(el => el.id === id)
    console.log(existe);
    if (!existe) {
        carritoTemp.push(prodCarrito)
    }
    carrito = [...carritoTemp]
    mostrarCarrito()
}

const contenedor = document.querySelector('#tiendavideojuegos') //TODO: DUPLICADO, PROBALEMENTE LO TENEMOS QUE BORRAR
const carritoContenedor = document.querySelector('#carritoContenedor')
const vaciarCarrito = document.querySelector('#vaciarCarrito')
const preciototal = document.querySelector('#precioTotal')
const procesarcompra = document.querySelector('#procesarCompra')
const activarFuncion = document.querySelector("#activarFuncion")

    // if (activarFuncion === true) {
    //     activarFuncion.addEventListener('click', procesarpedido)
    // }
    document.addEventListener('DOMContentLoaded', () =>{
        carrito = JSON.parse(localStorage.getItem('carrito')) || []
        
    //     mostrarCarrito()
    //     mostrarCarrito2()
    //     // document.querySelector('#activarFuncion').click(procesarpedido)
    })  

if (procesarcompra) {
procesarcompra.addEventListener('click',() =>{
    if (carrito.length === 0) {
        swal({
            title: "¡Tu carrito está vacio!",
            text: "Debes comprar algo para seguir la compra",
            icon: "error",
            confirmButtonText: "aceptar"
        })
    }else{
        location.href = "compra.html"
        procesarpedido()
    }
})
if (vaciarCarrito) {
    vaciarCarrito.addEventListener('click', () =>{
        carrito.length= []
        mostrarCarrito()
    })
    }
}
const tiendadevidejuegos = document.getElementById("tiendavideojuegos")
stockproductos.forEach((prod) => {
    const { id, nombre, precio, desc, img, cantidad} = prod
    const div = document.createElement("div")
    // if (tiendadevidejuegos) {
        tiendadevidejuegos.innerHTML += `
        <div class="producto">
        <div class="card border-info mb-3" style="width: 18rem;">
        <img src="${img}" class="card-img-top" alt="">
        <div class="card-body"> 
        <h5 class="card-title">${nombre}</h5>
        <p class="card-text">${desc}<br> <strong>$${precio}</strong></p>
        <p> Cantidad: ${cantidad} </p>
        <button onclick="agregarVideojuegoAlCarrito(${id})" class="btn btn-primary">Agregar al carrito</button>
        </div>
        </div>
        `
        tiendadevidejuegos.appendChild(div)
        
        // <button id="agregar${id}" class="btn btn-primary">Agregar al carrito</button>
        // const boton = document.getElementById(`agregar${id}`)   
        // boton.addEventListener("click", () => {
        //     agregarVideojuegoAlCarrito(id)
        //     console.log(id);
        // })
    // }

})
// const agregarVideojuegoAlCarrito = (id) =>{
//     const existe = carrito.some(prod => prod.id === id)
// if (existe) {
//     const prod = carrito.map(prod =>{
//         if (prod.id === id) {
//             prod.cantidad++
//         }
//     })
// }else{
//     const item1 = stockproductos.find((prod) => prod.id === id)
//     carrito.push(item1)
//     carrito.push(item1)
// }
//     mostrarCarrito()
// }

let carrito2 = []

const tiendadeconsolas = document.getElementById("tiendadecontroles")
stockconsolas.forEach((prod) => {
    const { id, nombre, precio, desc, desc2,desc3,img} = prod
    const div = document.createElement("div")
    div.innerHTML += `
    <div class="producto">
    <div class="card border-info mb-3" style="width: 18rem;">
    <img src="${img}" class="card-img-top" alt="">
    <div class="card-body">
    <h5 class="card-title">${nombre}</h5>
    <p class="card-text">${desc}</p>
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">${desc2}</li>
    <li class="list-group-item">${desc3}</li>
    <li class="list-group-item"><strong>$${precio}</strong></li>
    </ul>
    <div class="card-body">
    <button onclick="agregarConsolaAlCarrito(${id})" class="btn btn-primary">Agregar al carrito</button>
    </div>
    </div>
    `
    // <button class="btn btn-secondary" id="agregar${id}">Agregar al carrito</button>
    tiendadeconsolas.appendChild(div)

    // const boton1 = document.getElementById(`agregar${id}`)

    // boton1.addEventListener("click", () => {
    //     agregarVideojuegoAlCarrito(id)
    //     console.log(id);
    // })
})


// const agregarVideojuegoAlCarrito = (id) =>{
//     const item2 = stockconsolas.find((prod) => prod.id === id)
//     carrito2.push(item2)
//     console.log(item2)
//     mostrarCarrito2()
// }



















const mostrarCarrito = () => {
    console.log("cumbia");
    console.log(carrito);
    const modalbody = document.querySelector('.modal .modal-body')
    modalbody.innerHTML = ''
    carrito.forEach((prod) => {
        const {id, nombre, img, desc, precio,cantidad} = prod
        modalbody.innerHTML += `
        <div class="modal-contenedor">
        <div>
        <img class ="img-fluid img-carrito" src="${img}"/>
        </div>
        <div>
        <p>Producto:${nombre}</p>
        <p>Precio:${precio}</p>
        <p>Cantidad:${cantidad}</p>
        <button onclick="eliminarproducto(${id})" class="btn btn-danger">Eliminar Producto</button>   
        </div>
        </div>
        `
    })
    if (carrito.length === 0) {
        modalbody.innerHTML = `
        <p class ="text-center text-primary parrafo">No agregaste nada</p> 
        `
    }

    carritoContenedor.textContent = carrito.length

    preciototal.textContent = carrito.reduce((acc,prod) => acc + prod.cantidad * prod.precio, 0)

    guardarstorage()
}


// const mostrarCarrito2 = () => {
//     const modalbody = document.querySelector('.modal .modal-body')
//     modalbody.innerHTML= ''
//     carrito2.forEach((prod) => {
//         const {id, nombre, img, desc, desc2, desc3 , precio} = prod
//         modalbody.innerHTML += `
//         <div class="modal-contenedor">
//         <div>
//         <img class ="img-fluid img-carrito" src="${img}"/>
//         </div>
//         <div>
//         <p>Producto:${nombre}</p>
//         <p>Precio:${precio}</p>
//         <p>${desc2}</p>
//         <p>${desc3}</p>
//         <button onclick="eliminarproducto(${id})" class="btn btn-danger">Eliminar Producto</button>   
//         </div>
//         </div>
//         `
//     })
//     guardarstorage()
// }

function eliminarproducto(id) {
    const juegoid = id
    // const videoid = id
    carrito = carrito.filter((juego) => juego.id !== juegoid)
    // carrito2 = carrito2.filter((video) => video.id !== videoid)
    mostrarCarrito()
    // mostrarCarrito2()
}
function eliminarproducto2(id) {
    const juegoid = id
    carrito2 = carrito2.filter((juego) => juego.id !== juegoid)
    mostrarCarrito2()
}

function guardarstorage() {
    localStorage.setItem("carrito", JSON.stringify(carrito))
}
function recibirStorage() {
    carrito = JSON.parse(localStorage.getItem("carrito"))
}

function procesarpedido() {
    carrito.forEach((prod) =>{
        const listaCompra =document.querySelector('#lista-compra tbody')
        const{ id, nombre,precio, cantidad, img} = prod
        const row = document.createElement('row')
        row.innerHTML += `
        <td>
        <img class= "img-fluid img-carrito" src= "${img}"/>
        </td>
        <td>${nombre}</td>
        <td>${precio}</td>
        <td>${cantidad}</td>
        <td>${precio * cantidad}</td>
        `
        listaCompra.appendChild(row)
    })
}












































// // Cuantos productos quiere llevarse
// function catalogo() {
// do{ 
//     cantidadproducto1 = parseInt(prompt("Ingrese cuantos juegos de COD quiere llevarse"))
//     cantidadproducto2 = parseInt(prompt("Ingrese cuantos juegos de Fifa 23 quiere llevarse"))
//     cantidadproducto3 = parseInt(prompt("Ingrese cuantos juegos de Lego Marvel quiere llevarse"))
//     cantidadproducto4 = parseInt(prompt("Ingrese cuantos juegos de UFC 4 quiere levarse"))
//     cantidadproducto5 = parseInt(prompt("Ingrese cuantos juegos de The Last of Us quiere llevarse"))
//     cantidadproducto6 = parseInt(prompt("Ingrese cuantos juegos de R6 quiere llevarse"))
//     cantidadproducto7 = parseInt(prompt("Ingrese cuantos juegos de Assasin´s Creed quiere llevarse"))
//     cantidadproducto8 = parseInt(prompt("Ingrese cuantos juegos de Red Dead Redemption 2 quiere llevarse"))
//     cantidadproducto9 = parseInt(prompt("Ingrese cuantos juegos de GTA quiere llevarse"))
// }while (cantidadproducto1 == 0 && cantidadproducto2 == 0 && cantidadproducto3 == 0 && cantidadproducto4 == 0 && cantidadproducto5 == 0 && cantidadproducto6 == 0 && cantidadproducto7 == 0 && cantidadproducto8 == 0 && cantidadproducto9 == 0) {
//     if(cantidadproducto1 == 0 && cantidadproducto2 == 0 && cantidadproducto3 == 0 && cantidadproducto4 == 0 && cantidadproducto5 == 0 && cantidadproducto6 == 0 && cantidadproducto7 == 0 && cantidadproducto8 == 0 && cantidadproducto9 == 0){
//         alert(" No selecciono ningun articulo ")
//                 }
//         }
//     }catalogo()


// let total1 = 0
// function sumar() {
//     total1 = (cantidadproducto1 * costoproducto1) + (cantidadproducto2 * costoproducto2) + (cantidadproducto3 * costoproducto3) + (cantidadproducto4 * costoproducto4) + (cantidadproducto5 * costoproducto5) + (cantidadproducto6 * costoproducto6) + (cantidadproducto7 * costoproducto7) + (cantidadproducto8 * costoproducto8) + (cantidadproducto9 * costoproducto9)
//     alert(" Tu costo total es de " + total1 )
// }
// sumar()
// console.log(total1)


// class Producto{
//     constructor(nombre,precio,){
//         this.nombre = nombre
//         this.precio = parseInt(precio)
//     }
//     enviar(){
//         this.precio = this.precio + 210
//     }
//     pago(){
//         this.precio = this.precio - 500
//     }
// }
// const productos = []
// productos.push(new Producto( " COD ", 2400))
// productos.push(new Producto( " Fifa 23 ", 4000))
// productos.push(new Producto( " Lego marvel ", 2400))
// productos.push(new Producto( " UFC ", 2800,))
// productos.push(new Producto( " The Last of Us ", 3100))
// productos.push(new Producto( " R6 ", 4000))
// productos.push(new Producto( " Assasin´s Creed", 4000))
// productos.push(new Producto( " Red Dead Redemption 2", 3800))
// productos.push(new Producto( "GTA", 3000))

// console.log(productos)
// // Filtro
// const PreciosBaratos = productos.filter((el) => el.precio > 3000)
// console.log(PreciosBaratos)
// const PreciosCaros = productos.filter((el) => el.precio < 3100)
// console.log(PreciosCaros)
// // Costo de los productos de consolas y controles

// let prod1 = 17.000
// let prod2 = 180.000
// let prod3 = 220.000
// let prod4 = 17.000
// let prod5 = 210.000
// let prod6 = 300.000

// let total2


// const prods = [{
//     prod: "Control Playstation 4",
//     precio: 17000
//     },
//     {
//         prod: "Playstation 4",
//         precio: 180000
//     },
//     {
//         prod: "Nintendo Switch",
//         precio: 220000
//     },
//     {
//         prod: "Control Xbox One",
//         precio: 17000
//     },
//     {
//         prod: "Xbox One",
//         precio: 210000
//     },
//     {
//         prod: "Consola Arcade",
//         precio: 300000
//     }
// ]



// total2 = 0
// function consolas() {
// while (true){
//     let opcion = parseInt(prompt( " ¿Que consola o control desea comprar? Elige un número:(Si no desea nada presione 0) \n\
//     1-Control playstation 4 \n\
//     2-Playstation 4 \n\
//     3-Nintendo Switch \n\
//     4-Control Xbox One \n\
//     5-Xbox One \n\
//     6-Consola Arcade"))
//     if (opcion >= 1 && opcion <= 6) {
//         let cantidad = parseInt(prompt(`Cuantos ${prods[opcion - 1].prod} desea comprar`))
//         let subtotal = cantidad * prods[opcion - 1].precio
//         total2 += subtotal
//         alert( "Tu costo total es de " + (total2 + total1))
//         break;
//     }else if (opcion == 0){
//         break;
//     }
// }
// }
// consolas()

// let totalfinal1 = (total1 + total2)
// console.log(totalfinal1)
// console.log(prods)



// // // Medios de pago
// let total3 = 0
// let envio
// do {
//     envio = prompt(" ¿Lo retiras en tienda? Habra una suma de 210$ si lo llevamos a su domicilio (Si/No) ")
//     if (envio != "si" && envio != "SI" && envio != "Sí" && envio != "NO" && envio != "No" && envio != "no") {
//         alert( " No pusiste lo especificado ")
//     }else{
//         if (envio == "si" || envio == "SI" || envio == "Si" ) {
//             totalfinal1 = totalfinal1
//         }else{
//             totalfinal1 = totalfinal1 + 210
//             for (const producto of productos) {
//                 producto.enviar()
//             }
//         }
//     }
// } while (envio != "si" && envio != "SI" && envio != "Si" && envio != "NO" && envio != "No" && envio != "no");

// console.log(envio)

// let pagar
// do{
//     pagar = prompt( " ¿Pagas en efectivo? Hay un descuento de 500$ en efectivo (Si/No) ")
//     if (pagar != "si" && pagar != "SI" && pagar != "Sí" && pagar != "NO" && pagar != "No" && pagar != "no" ) {
//         alert(" No pusiste lo especificado ")
//     }else{
//         if (pagar == "si" || pagar == "SI" || pagar == "Si" ) {
//             totalfinal1 = totalfinal1 - 500
//         }else{
//             totalfinal1 = totalfinal1
//             for (const producto of productos) {
//                 producto.pago()
//             }
//         }
//     }
// }while(pagar != "si" && pagar != "SI" && pagar != "Si" && pagar != "NO" && pagar != "No" && pagar != "no")

// console.log (pagar)
// console.log(totalfinal1)
// alert(" tu nuevo costo es de " + totalfinal1)

// Agregar productos al carrito
// let boton = document.getElementById("Btncarrito")
// boton.addEventListener("click", respuestaclick)
// function respuestaclick() {
//     console.log("Respuesta click")
// }
// let boton1 = document.getElementById("prueba")
// boton.addEventListener("click",nose)
// function nose(){
//     console.log("nose")
// }






/* <> */
// // Formulario index

// const nombre = document.getElementById("nombre")
// const email = document.getElementById("email")
// const asunto = document.getElementById("asunto")
// const mensaje = document.getElementById("mensaje")
// const form = document.getElementById("formulario")
// const parrafo = document.getElementById("aviso")

// form.addEventListener("submit", e=> {
//     e.preventDefault()
//     let aviso = ""
//     let entrar = false
//     let validaremail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
//     if (nombre.value.length <= 2) {
//         aviso += 'El nombre es muy corto <br>'
//         entrar = true
//     }
//     if (!validaremail.test(email.value)) {
//         aviso += 'El Email no es valido <br>'
//         entrar = true
//     }
//     if (asunto.value.length <= 3) {
//         aviso += 'El asunto es muy corto <br>'
//         entrar = true
//     }
//     if (mensaje.value.length < 6 ) {
//         aviso += 'El mensaje es muy corto <br>'
//         entrar = true
//     }
//     if (entrar) {
//         parrafo.innerHTML = aviso
//     } else{
//         parrafo.innerHTML = 'Enviado'
//     }
// })
