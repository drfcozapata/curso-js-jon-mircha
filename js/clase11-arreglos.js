// PRACTICAS DEL CURSO

// console.log('Hola Fran! ;)')

/*** ARREGLOS ***/
// Hay diferentes formas de declararlos
// Al asociarlos a variables, podemos hacerloso con 'let' o 'const'
// Para declarar un arreglo usamos CORCHETES

const a = []; // Declaración de un arreglo vacío
console.log(a);

const b = [1, true, "Hola", ["A", "B", "C"],
    [1, 2, 3]
]; // Un arreglo puede contener cualquier tipo de elementos, incluso otros arreglos
console.log(b); // [1, true, "Hola", Array(3)]
console.table(b); // Muestra el arreglo en forma de tabla
console.log(b.length); // 4 - 'length' muestra la longitud del arreglo, cuántos elementos tiene
console.log(b[2]); // 'Hola' - Como en los datos de tipo compuesto accedemos a la referencia del valor, para acceder a un valor, tenemos que indicar su índice entre corchetes (en el caso de un arreglo)
console.log(b[3][2]); // 'C' - Accediendo a los valores de un arreglo dentro de otro debo indicar el índice donde se encuentra en el padre y luego su propio índice
console.log(b[4][0]); // 1

/** Crear arreglo con el prototipo 'Array' */
const c = Array.of("X", "Y", "Z", 1, 2, 3); // en este caso, se utilizan PARÉNTESIS para incluir los elementoso del arreglo
console.log(c);

const d = Array(50).fill(true); // Indico primero la longitud del arreglo y con 'fill' le ldigo con qué elemento debe rellenarlo
console.log(d);

/** Crear arreglo con 'new Array' **/
const e = new Array(); // [] - Es una forma de crear arreglos que está casi en desuso
console.log(e);

/*** MÉTODOS EN LOS ARREGLOS ***/
// Además de las propiedades, los arreglos también usan métodos
const colores = ["Amarillo", "Azul", "Rojo"];
console.log(colores);

colores.push("Verde"); // Agrega 'Verde' al final del arreglo
console.log(colores);

colores.forEach(function(el, i) {
    console.log(`<li id="color${i+1}"> ${el}</li>`);
}); // El método 'forEach' me permite recorrer el arreglo. En este caso le paso 2 parámetros: 'el' indica cada elemento del arreglo; 'i', el índice que ocupa. Y uso estos parámetros para construir una salida al DOM usando un template string

colores.pop()
console.log(colores); // Elimina el último elemento del arreglo