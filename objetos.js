const tiposDeSuscripciones = {
    free: 'Solo puedes tomar los cursos gratis',
    basic: 'Puedes tomar casi todos los cursos de Platzi durante un mes',
    expert: 'Puedes tomar casi todos los cursos de Platzi durante un año',
    expertduo: 'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año',
};

function getSubType (sub){
    if (tiposDeSuscripciones[sub]){
        console.log(tiposDeSuscripciones[sub])
        return
    }
    console.warn("No existe esa suscripción")
}

//Accede al key del objeto y devuelve su valor; mediante el metodo objet["key"] usando el key como string argumento del parametro sub de la funcion GetSubType. Funciona similar a array[index] excepto que en vez del numero del indice aqui se inserta el string exacto que es key en el elemento que queremos obeter su valor.