// primitivos(pasados por valor), objetos(pasados por referencia) 
let a = 10;
let b = a;
a = 30;

console.log({a, b});

// por referencia
let juan = {nombre: 'Juan'};
let ana  = {...juan}; //operador spread
ana.nombre = 'Ana';

console.log({juan, ana});

const cambiarNombre = ({...persona}) => {
    persona.nombre = 'Tony';
    return persona;
}


let peter = {nombre: 'Peter'}
let tony = cambiarNombre(peter)

console.log({peter, tony})

// Arreglos
const frutas = ['Manzana', 'Pera', 'Piña'];
// const otrasFrutas = [...frutas];
console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice')

console.time('spread');
const otrasFrutas2 = [...frutas];
console.timeEnd('spread')



otrasFrutas.push('Mango');
console.table({frutas, otrasFrutas});