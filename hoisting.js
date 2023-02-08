//hoisting

console.log(miNombre)
var miNombre = "Ariel"

// se declara automaticamente miNombre = undefined al momento del console.log y luego se muestra UNDEFINED en pantalla

hey()
function hey(){
    console.log("Hola "+miNombre)
}
var miNombre = "Ariel"

// las funciones se pueden declarar luego de utilizarse, pero la variable miNombre se inicializa despues de utilizarla por lo tanto se registra como undefined