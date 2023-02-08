/*coercion son los cambios de tipos de valores que se realizan de manera automatica por el interprete (IMPÍCITA)
ej:
4 + "7" // 47 
4 * "7" // 28 >> aqui 7 es tratado como un numero y a diferencia de python donde el resultado seria 7777 se multiplican 
2 + true // 3 >> true = 1 entonces 2 + 1 es 3
false - 3 // -3 >> false = 0 por lo tanto -3-0= -3
!3 // false

o la que forzamos mediante el uso de funciones como Number(), String(), Boolean(). 
ej: 
Number("47") // 47
String(51) // "51"
Boolean(1) // true 
*/

var a = 4 + "7"

// a = 47 y typeof a = "string" porque el + entre string y number genera concatenación

var b = 4 * "7"

// b = 28 y typeof b = "number" porque se interpreta "7" como un numero. En caso de que no fuera "7" sino "Hola" el resultado seria "NaN" o Not a Number porque "Hola" no tiene equivalencia numérica al ser una palabra.   

var c = 20
var d = c+""

// typeof d = "string"

String(c) // typeof c = "string" sin necesidad de concatenarlo con un "" ni declarar otras variables 

Number(d) // typeof d = "number" aunque se concatenó el numero con el string, en caso de que d = "hola" el resultado seria NaN.