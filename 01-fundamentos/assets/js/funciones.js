
function saludar(nombre) {
    // console.log( arguments );
    // console.log('Hola ' + nombre);
    return [1, 2];

    // Esto nunca se va a ejecutar
    console.log('Soy un código que esta después del return');
}

// Conocida como una función anónima
const saludar2 = function(nombre) {
    console.log('Hola ' + nombre);
}


// Funciones de flecha
const saludarFlecha = () => {
    console.log('Hola Flecha');
}

const saludarFlecha2 = (nombre) => {
    console.log('Hola ' + nombre);
}


const retornoDeSaludar = saludar('Andrés', 25, false, 'Colombia'); // 1 
// console.log(retornoDeSaludar[0], retornoDeSaludar[1]);

// saludar2('Andrés');
 
// saludarFlecha();
// saludarFlecha2('Avril');

function sumar(a, b) {
    return a + b;
}

// const sumar2 = (a, b) => {
//     return a + b;
// }

const sumar2 = (a, b) => a + b;


function getAleatorio() {
    return Math.random();
}

// Transformar la anterior función en una función de flecha que no tenga llaves { }

const getAleatorio2 = () => Math.random();

console.log(sumar2(2, 7));
console.log(getAleatorio2());




