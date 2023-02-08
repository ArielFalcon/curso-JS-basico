var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "TV", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
]

var  ArticulosFiltrados = articulos.filter(articulo => articulo.costo <= 500) // devuelve los articulos que cumplen la validación

var nombreArticulos = articulos.map((art)=> art.nombre) // regresa de todos los articulos solo el nombre en un array de strings

var encuentraArticulo = articulos.find((art)=> art.nombre === "Laptop") // devuelve el objeto con la primera coincidencia y detiene la busqueda {nombre: "Laptop", costo: 20000} en este caso

articulos.forEach((art)=> console.log(art.nombre)) // hace un console log por cada articulo imprimiendo solamente lo especificado, el nombre en este caso

var articulosBaratos = articulos.some((art)=> art.costo <= 700) // hace una validacion de true o false y solo regresa un booleano si se cumple o no la validacion