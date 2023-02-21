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

let stockretro = [
    {
        id: 16, nombre: "Atari 2600", precio: 50000, desc: "Consola de Atari diseñada en el año 1977", desc2: "Viene con dos controles", desc3:"Viene con 6 juegos", img:"./assets/atari.webp", cantidad: 1
    },
    {
        id: 17, nombre: "Game Boy", precio: 200000, desc: "La famosa game boy del año 1989 para llevar a todos lados", desc2: "Viene con baterias", desc3:"Viene con el Zelda", img:"./assets/gameboy.jpg", cantidad: 1
    },
    {
        id: 18, nombre: "NES", precio: 50000, desc: "Una muy buena consola lanzada en 1986 por Nintendo", desc2: "Viene con un control", desc3:"Viene con 3 juegos", img:"./assets/NES.jpg", cantidad: 1
    },
    {
        id: 19, nombre: "Sega Mega drive", precio: 30000, desc: "Consola de sega para jugar con amigos. Año 1988", desc2: "Viene con dos controles", desc3:"Viene con 3 juegos", img:"./assets/sega mega drive.jpg", cantidad: 1
    },
    {
        id: 20, nombre: "Magnavox Odyssey²", precio: 70000, desc: "La primer videoconsola de la historia lanzada en 1972", desc2: "Viene con dos controles", desc3:"Viene con 3 juegos", img:"./assets/magabox.webp", cantidad: 1
    },
    {
        id: 21, nombre: "Sega Mega Cd", precio: 30000, desc: "Una consola más nueva, lanzada en 1991 por Sega", desc2: "Viene con un control", desc3:"Viene con 3 juegos", img:"./assets/segamegacd.jpg", cantidad: 1
    }
]




let carrito = []
// funcion agregar al carrito
function agregarVideojuegoAlCarrito(id) {
    const prod = stockproductos.find(el => el.id === id)
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
    if (!existe) {
        carritoTemp.push(prodCarrito)
    }
    carrito = [...carritoTemp]
    mostrarCarrito()
}

function agregarConsolaAlCarrito(id) {
    const prod = stockconsolas.find(el => el.id === id)
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
    if (!existe) {
        carritoTemp.push(prodCarrito)
    }
    carrito = [...carritoTemp]
    mostrarCarrito()
}

function agregarConsolaRetroAlCarrito(id) {
    const prod = stockretro.find(el => el.id === id)
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
    if (!existe) {
        carritoTemp.push(prodCarrito)
    }
    carrito = [...carritoTemp]
    mostrarCarrito()
}



const contenedor = document.querySelector('#tiendavideojuegos')
const carritoContenedor = document.querySelector('#carritoContenedor')
const vaciarCarrito = document.querySelector('#vaciarCarrito')
const preciototal = document.querySelector('#precioTotal')
const procesarcompra = document.querySelector('#procesarCompra')
const activarFuncion = document.querySelector("#activarFuncion")
const TotalProceso = document.querySelector('#totalProceso')
const formularioCompra = document.querySelector('#procesar-pago')
const buttonForm = document.getElementById('button')
const buttonForm2 = document.getElementById('button2')
const hideForm = document.getElementById('formularioFinal')


if (formularioCompra) {
    formularioCompra.addEventListener('submit', enviarPedido)
}



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
    if (tiendadevidejuegos) {
        div.innerHTML += `
        <div class="producto">
        <div class="card border-info mb-3" style="width: 18rem;">
        <img src="${img}" class="card-img-top" alt="">
        <div class="card-body"> 
        <h5 class="card-title">${nombre}</h5>
        <p class="card-text">${desc}<br> <strong>$${precio}</strong></p>
        <p> Cantidad: ${cantidad} </p>
        <button onclick="agregarVideojuegoAlCarrito(${id})" class="btn btn-primary" id="notiCarrito">Agregar al carrito</button>
        </div>
        </div>
        `
        tiendadevidejuegos.appendChild(div)
    }        
    })



const tiendadeconsolas = document.getElementById("tiendadecontroles")
stockconsolas.forEach((prod) => {
    const { id, nombre, precio, desc, desc2,desc3,img} = prod
    const div = document.createElement("div")
    if (tiendadeconsolas) {
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
        <button onclick="agregarConsolaAlCarrito(${id})" class="btn btn-primary" id="notiCarrito">Agregar al carrito</button>
        </div>
        </div>
        `
        tiendadeconsolas.appendChild(div)
    }
})

const tiendaRetro = document.getElementById("tiendaretro")
stockretro.forEach((prod) =>{
    const {id, nombre, precio, desc, desc2 , desc3, img} = prod
    const div = document.createElement("div")
    if (tiendaRetro) {
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
        <button onclick="agregarConsolaRetroAlCarrito(${id})" class="btn btn-primary" id= "notiCarrito">Agregar al carrito</button>
        </div>
        </div>
        `
        tiendaRetro.appendChild(div)
    }
})











const mostrarCarrito = () => {
    const modalbody = document.querySelector('.modal .modal-body')
    if (modalbody) {
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
}


function eliminarproducto(id) {
    const juegoid = id

    carrito = carrito.filter((juego) => juego.id !== juegoid)
    mostrarCarrito()
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
        const row = document.createElement('tr')
        row.innerHTML += `
        <td>
        <img class= "img-fluid img-carrito" src= "${img}"/>
        </td>
        <td>${nombre}</td>
        <td>${precio}$</td>
        <td>${cantidad}</td>
        <td>${precio * cantidad}$</td>
        `
        listaCompra.appendChild(row)
    })
    TotalProceso.innerText = carrito.reduce((acc,prod) => acc + prod.cantidad * prod.precio, 0)
}



if (activarFuncion) {
    activarFuncion.addEventListener('click',procesarpedido)
}

document.addEventListener('DOMContentLoaded', () =>{
    carrito = JSON.parse(localStorage.getItem('carrito')) || []
    mostrarCarrito()
    if (activarFuncion) {
        document.querySelector('#activarFuncion').click(procesarpedido)
    }
})

// Formulario index

const nombre = document.getElementById("nombre")
const email = document.getElementById("email")
const asunto = document.getElementById("asunto")
const mensaje = document.getElementById("mensaje")
const form = document.getElementById("formulario")
const parrafo = document.getElementById("aviso")
const perfecto = document.getElementById("perfecto")

if (form) {
    form.addEventListener("submit", e=> {
        e.preventDefault()
        let aviso = ""
        let entrar = false
        let validaremail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (nombre.value.length <= 2) {
            aviso += 'El nombre es muy corto <br>'
            entrar = true
        }
        if (!validaremail.test(email.value)) {
            aviso += 'El Email no es valido <br>'
            entrar = true
        }
        if (asunto.value.length <= 3) {
            aviso += 'El asunto es muy corto <br>'
            entrar = true
        }
        if (mensaje.value.length < 6 ) {
            aviso += 'El mensaje es muy corto <br>'
            entrar = true
        }
        if (entrar) {
            parrafo.innerHTML = aviso
        } else{
            perfecto.innerHTML = 'Enviado'
        }
    })
}


//Fomulario Compra
function enviarPedido(e) {
    e.preventDefault()
}
if (buttonForm) {
    buttonForm.addEventListener('click', toggleText)
}

function toggleText() {
    hideForm.classList.toggle('mostrar')
    if (toggleText) {
        buttonForm.classList.toggle('hide')
    }
    if(toggleText)
        buttonForm2.classList.toggle('hide')
}

const nombreyApellido = document.getElementById('nombreyApellido')
const tel = document.getElementById('tel')
const gmail = document.getElementById('gmail')
const numeroTarjeta = document.getElementById('numeroTarjeta')
const cvc = document.getElementById('cvc')
const formCompra = document.getElementById('formCompra')
const advertencia = document.getElementById('warning')
const completado = document.getElementById('completado')
const botonFinal = document.getElementById('botonFinal')





if (formCompra) {
    formCompra.addEventListener("submit", e =>{
        e.preventDefault()
        let warning = ""
        let entrar = false
        let validaremail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (nombreyApellido.value.length <= 2) {
            warning += 'El nombre y apellido es muy corto <br>'
            entrar = true
        }
        if (tel.value.length <= 7) {
            warning += 'El telefono es muy corto <br>'
            entrar = true
        }
        if (!validaremail.test(gmail.value)) {
            warning += 'El email no es valido <br>'
            entrar = true
        }
        if (numeroTarjeta.value.length <= 10) {
            warning += 'El número de tarjeta es muy corto <br>'
            entrar = true
        }
        if (cvc.value.length <= 2 || cvc.length >= 4) {
            warning += 'El cvc no es correcto <br>'
            entrar = true
        }
        if (entrar) {
            advertencia.innerHTML = warning 
        }else{
            completado.innerHTML = 'Enviado'
        }
    })
}


const datosForm = []
if (datosForm) {
    if (botonFinal) {
        botonFinal.addEventListener("click", () =>{
            const nombre = nombreyApellido.value
            const telefono = tel.value
            const email = gmail.value
            const tarjeta = numeroTarjeta.value
            const CVC = cvc.value 
        
        
            const usuarios = {
                nombre,
                telefono,
                email,
                tarjeta,
                CVC
            }
        
            datosForm.push(usuarios)
        
            localStorage.setItem('Datos',JSON.stringify(datosForm))
        })
        
        botonFinal.addEventListener('click', notificationCompra)
        
        function notificationCompra() {
            swal({
                title: "Se confirmo tu pedido",
                text: "Muchas gracias por tu compra te contactaremos por gmail para enviar tu pedido" ,
                icon: "success",
                confirmButtonText: "aceptar"
            })
    }
    }
}
