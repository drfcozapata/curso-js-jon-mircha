// PRACTICAS DEL CURSO

/*** OPERADORES ***/
/** Aritméticos + - * / % () **/

let a = 5 + (5 - 10) * 3;
let modulo = 5 % 2; // devuelve el residuo de una división

console.log(a);
console.log(modulo);

/** Relacionales < > <= >= == === != !== **/
console.log(8 > 9);
console.log(8 < 9);
console.log(8 >= 9);
console.log(8 <= 9);

// 1 = es asignación
// 2 = es comparación de valores
// 3 = es comparación de tipo de dato y valor
console.log(7 == 7);
console.log('7' == 7);
console.log(0 == false);

console.log(7 === 7);
console.log('7' === 7);
console.log(0 === false);

/** Incremento y Decremento += -= *= /= **/
let i = 2;
i *= 3;
console.log(i);

/** Operador Unario ++ -- **/
// Incrementa o disminuye de uno en uno
let j = 4;
console.log(j++);
console.log(j++);
console.log(++j);

/** Operadores Lógicos ! || && **/
// ! = not Niega y lo verdadero lo vuelve falso, y viceversa
// || = or Al comparar 2 condiciones, valida al cumplirse alguna de ellas
// && = and Al comparar 2 condiciones, validad si las dos son ciertas
console.log(!true); // false
console.log(!false); // true
console.log((9 === 9) || ('9' === 9)); // true
console.log((9 === 9) && ('9' === 9)); // false
console.log((9 === 9) && ('9' === '9')); // true