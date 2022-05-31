const 
//variables globales
clase = document.getElementById("clase"),
container = document.getElementById("container"),
nombre = document.getElementById("nombre"),
apellido = document.getElementById("apellido"),
provincia = document.getElementById("provincia"),
ciudad = document.getElementById("ciudad"),
submit = document.getElementById("submit"),
mensaje = document.getElementById("mensaje");

//bienvenida y presentacion de proyecto
clase.innerHTML = `
<h3>Clase 6: Storage y JSON & Workshop I</h3>
<p>¡Bienvenido/a! Somos una inmobiliaria online que ofrece la oportunidad de agilizar la busqueda de tu proximo departamento a alquilar. <br>
¿Como funciona nuestra pagina? Muy facil. Completas el breve formulario que se encuentra debajo y seleccionas la opcion<br>
que desees en el boton "mas info" que contiene cada opcion. 
<strong>¡Y listo!</strong> 
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
</svg>
<br>
Se imprimira un comprobante con tus datos, los datos del departamento que seleccionaste y un 10% de descuento en tus honorarios. <br>
<strong>Esperamos que sea tan simple como nos propusimos que sea.</strong> 
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-laughing" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M12.331 9.5a1 1 0 0 1 0 1A4.998 4.998 0 0 1 8 13a4.998 4.998 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5zM7 6.5c0 .828-.448 0-1 0s-1 .828-1 0S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 0-1 0s-1 .828-1 0S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>
<br>
¡Gracias y que tengas un buen dia!</p>
`;

//arreglo contenedor de propiedades
const propiedades = [
    {
        nombre: "Avellaneda 24572",
        id: 1,
        precio: 57000,
        contrato: 17000,
        honorarios: 7000,
        imagen: "./src/img/1.jpg"
    },
    {
        nombre: "Belgrano 65654",
        id: 2,
        precio: 58500,
        contrato: 18500,
        honorarios: 8500,
        imagen: "./src/img/2.jpg"
    },
    {
        nombre: "Mitre 1252",
        id: 3,
        precio: 60000,
        contrato: 20000,
        honorarios: 10000,
        imagen: "./src/img/3.jpg"
    },
    {
        nombre: "Rodriguez 2782",
        id: 4,
        precio: 64500,
        contrato: 24500,
        honorarios: 14500,
        imagen: "./src/img/4.jpg"
    },
    {
        nombre: "Sarmiento 99812",
        id: 5,
        precio: 66000,
        contrato: 26000,
        honorarios: 16000,
        imagen: "./src/img/5.jpg"
    },
    {
        nombre: "Colon 56235",
        id: 6,
        precio: 67500,
        contrato: 27500,
        honorarios: 17500,
        imagen: "./src/img/6.jpg"
    }
];

//variable en la cual mas adelante ingresaremos la opcion
//que el usuario haya elegido mediante metodo forEach
const propiedadSeleccionada = [];

//funcion que recorrer el arreglo de propiedades
submit.addEventListener("click", () => {
    if (nombre.value == "" || apellido.value == "" || provincia.value == "" || ciudad.value == "") {
        mensaje.innerHTML = `
        <div class="alert alert-danger" role="alert">
            ¡Ha ocurrido un error! Vuelve a intentarlo, si el error persiste recarga las pagina.
        </div>`
    } else {
        propiedades.forEach((el) => {
            //por cada vuelta pinta un departamento distinto
            container.innerHTML += `
            <br>
                <div class="card" style="width: 18rem;">
                    <img src=${el.imagen} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">${el.nombre}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div class="col-12">
                            <button id=${el.id} type="button" class="btn btn-success">Mas Info</button>
                        </div>
                    </div>
                </div>`
        })
        //tomamos el boton "mas info" el cual representa la 
        //seleccion del usuario
        propiedades.forEach((select) => {
            document.getElementById(`${select.id}`).addEventListener("click", () => {
                //como respuesta pasamos una funcion que tome
                //como parametro la seleccion del usuario
                seleccion(select)   
            })
        }) 
    }
})
        
//creamos la funcion llamada anteriormente y
//tomamos la seleccion del usuario
const seleccion = (select)  => {
    //le decimos a la funcion que no puede exisitir mas 
    //de una seleccion con el metodo some
    let existe = propiedadSeleccionada.some((el)=> el == el)
    if(!existe){
        //si al clickear no existe agrega la propiedad
        select.cantidad = 1;
        propiedadSeleccionada.push(select)
        container.innerHTML = `
        <div class="card" style="width: 25rem;">
            <img src=${select.imagen} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">${select.nombre}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div class="col-12">
                    <h5 class="card-title">Precio mensual: $${select.precio}</h5>
                    <h5 class="card-title">Valor de Contrato: $${select.contrato}</h5>
                    <h5 class="card-title">Honorarios: $${select.honorarios}</h5>
                    <button id=${select.id} type="button" class="btn btn-success">Aceptar y Continuar</button>
                </div>
            </div>
        </div>`
        //tomamos nuevamente la propiedad seleccionada y la almacenamos
        //en el localStorage
        document.getElementById(`${select.id}`).addEventListener("click", () => {
            const seleccionUsuario = JSON.stringify(select);
            localStorage.setItem(`${nombre.value} ${apellido.value}`, seleccionUsuario);
            mensaje.innerHTML = `
            <div class="alert alert-success" role="alert">
            <h4 class="alert-heading">¡Muchas Gracias por tu reserva!</h4>
            <p>${nombre.value} haz obtenido un 10% de descuento como bonificacion en el pago de tus honorarios en caso de que lleves adelante la transaccion</p>
            <hr>
            <p class="mb-0"> ¡Te esperamos pronto!</p>
          </div>`
        })
    } else {
        //si al clickear ya existe una propiedad seleccionada no permite que se agregue mas opciones
        alert("ya seleccionaste una propiedad");
    }
}