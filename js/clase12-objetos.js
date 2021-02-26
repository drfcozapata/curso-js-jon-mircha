// PRACTICAS DEL CURSO


/*** OBJETOS ***/
// Cuando declaramos un objeto usando 'const', evitamos que más adelante en el programa otro objeto ocupe la referencia que este tiene en memoria.

// Los objetos los declaramos con llaves (curly brakes)
const b = {

};
console.log(b);

// Otra forma de declararlos, pero en desuso
const c = new Object();
console.log(c);

const fran = {
        nombre: 'Francisco',
        apellido: 'Zapata', //Un String
        edad: 53, // Un número
        pasatiempos: ["Leer", "Escuchar blues", "Ver películas"], //Un arreglo dentro del objeto
        soltero: true, // Un booleano
        contacto: {
            email: 'drfcozapata@gmail.com',
            twitter: '@DrFcoZapata',
            website: 'www.dr-web.site',
            movil: '+584120918548'
        }, // Un objeto dentro de otro
        saludar: function() {
            console.log(`Hola Fran :)`)
        }, // Un método (función) dentro del objeto
        decirMiNombre: function() {
            console.log(`Hola! Me llamo ${this.nombre} ${this.apellido}, y tengo ${this.edad} años.`)
        }
    }
    // console.table(fran);
console.log(fran);

// Puedo acceder a los valores del objeto llamando a sus propiedades/atributos (keys) con corchetes o un punto
console.log(fran['apellido']);
console.log(fran.soltero);
console.log(fran.pasatiempos);
console.log(fran.pasatiempos[1]);
console.log(fran.contacto);
console.log(fran.contacto.movil);
fran.saludar();
fran.decirMiNombre();

// Para conocer todas las claves del objeto
console.log(Object.keys(fran));