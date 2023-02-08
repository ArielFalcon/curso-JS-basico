const h1 = document.querySelector("h1") //es una funcion que recibe como argumento un string con el nombre de la etiqueta y devuelve la primera coincidencia. Se utiliza los mismos patrones que en CSS para especificar clases, id etc
const parrafito = document.getElementsByClassName("parrafito") // para seleccionar una clase 
const input1  = document.querySelector("#calculo1")
const input2  = document.querySelector("#calculo2")
const btn = document.querySelector("#btnCalcular")
const btn2 = document.querySelector("#btn2")
const pid = document.getElementById("pid")
const p = document.querySelectorAll("p") // selecciona todos los elementos que tengan la etiqueta <p> en un array, asi sea de un solo elemento.
const pResult = document.getElementById("result")
const form = document.querySelector("#formulario")

console.log({
    h1,
    parrafito, 
    p,
    input1,
    pid
}); // pasa los argumentos del console.log como un objeto y trae todos en el mismo console.log

console.log(input1.value) // para leer los valores que el usuario imprime en los inputs, es un evento tipo change y se activa al perder el foco, es decir con blur

// ESCRIBIR EN EL HTML CON JS

h1.innerHTML = "Titulo <br> nuevo" // Cambia el contenido de h1 e interpreta las etiquetas como codigo html, imprimre Titulo nuevo en dos lineas diferentes, por el <br>
h1.innerText = "Titulo <br> nuevo" // Cambia el contenido del h1 e interpreta todo como texto plano, imprime Titulo <br> nuevo
h1.getAttribute("pantalla") // Accede al atributo especificado de la etiqueta seleccionada, en este caso h1
h1.setAttribute("pantalla", "Nuevo Valor") // Recibe dos argumentos, el atributo y su nuevo valor.
h1.classList.add("rojo")// añade clases al elemento con el nombre expecificado
h1.classList.remove("rojo") // elimina la clase expecificada en el caso de que exista
h1.classList.toggle("OnOff") // Añade o  elimina la clase espeficada en caso de que exista o no. Si existe la elimina, si no existe la añade
h1.classList.contains("rojo") // Devuelve un valor booleano en caso de que exista o no esa clase en el elemento. Útil para condicionales

input1.value = "1234" // Establece un valor por defecto para el input. No necesita usar metodos como getAttribute 

const img = document.createElement("img") // crear un elemento html desde js
img.src = "./img.png" // modifica el atributo src para poenr la url de la imagen que queremos mostrar. Importante poner la extension 

pid.append(img) // el metodo append agrega el elemento despues del contenido que ya tiene el parrafo. Si se utiliza innerHTML se borra el contenido anterior y se sustituye por el indicado 

// ESCUCHANDO EVENTOS
function onBtnClick(event){ // event es el parametro que añade por defecto a los callbacks el metodo addEventListener, para trabajar con ese evento se pasa como parametro de la funcion que sera llamada
    console.log({event}) // console.log del evento como un objeto para ver sus propiedades
    event.preventDefault() // llama al metodo del evento que detiene los procesos automaticos del mismo, en este caso el evento es "submit" y su proceso automatico es entre otros el de recargar la pagina. LA MANERA MAS PRACTICA ES ESPECIFICANDO EL TIPO DE BOTON EN EL HTML con un type="button" propiedad de la etiqueta <button/>
    console.log("Escuchando el click desde una funcion en JS")
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value)
    pResult.innerText = "Resultado: " + sumaInputs
} // funcion para pasar por el onclick de html en el boton y que se ejecute al escuchar el click 

btn2.addEventListener("click", () => pResult.innerText = "Hola desde addEvenListener") // recibe dos argumentos: el evento a escuchar, en este caso el click (como string siempre) y la funcion SIN PARENTESIS a ejecutar. Se puede definir la funcion en el mismo espacio del parametro

form.addEventListener("submit", onBtnClick)

/* 
Tipos de eventos:
blur (onblur)
Se desata un evento onblur cuando un elemento pierde el foco de la aplicación.

click (onclick)
Se produce cuando se da una pulsación o clic al botón

dragdrop (ondragdrop)
Se produce cuando un usuario suelta algo que había arrastrado sobre la página web.

error (onerror)
Se produce cuando no se puede cargar un documento o una imagen y esta queda rota.

focus (onfocus)
El evento onfocus es lo contrario de onblur.

keydown (onkeydown)
Este evento se produce en el instante que un usuario presiona una tecla, independientemente que la suelte o no

keyup (onkeyup)
Se produce cuando el usuario deja de apretar una tecla.

keypress (onkeypress)
Ocurre un evento onkeypress cuando el usuario deja pulsada una tecla un tiempo determinado.

load (onload)
Este evento se desata cuando la página, o en Javascript 1.1 las imágenes, ha terminado de cargarse.

mousedown (onmousedown)
Se produce el evento onmousedown cuando el usuario pulsa sobre un elemento de la página. onmousedown se produce en el momento de pulsar el botón, se suelte o no.

mouseup (onmouseup)
Este evento se produce en el momento que el usuario suelta el botón del ratón, que previamente había pulsado.

mousemove (onmousemove)
Se produce cuando el ratón se mueve por la página.

mouseover (onmouseover)
Este evento se desata cuando el puntero del ratón entra en el área ocupada por un elemento de la página.

mouseout (onmouseout)
Se desata un evento onmuoseout cuando el puntero del ratón sale del área ocupada por un elemento de la página.

resize (onresize)
Evento que se produce cuando se redimensiona la ventana del navegador, o el frame, en caso de que la página los tenga.

reset (onreset)
Este evento está asociado a los formularios y se desata en el momento que un usuario hace clic en el botón de reset de un formulario.

select (onselect)
Se ejecuta cuando un usuario realiza una selección de un elemento de un formulario.

submit (onsubmit)
Ocurre cuando el visitante apreta sobre el botón de enviar el formulario. Se ejecuta antes del envío propiamente dicho.

unload (onunload)
Al abandonar una página, ya sea porque se pulse sobre un enlace que nos lleve a otra página o porque se cierre la ventana del navegador, se ejecuta el evento onunload.

*/