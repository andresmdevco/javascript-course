
function saludar(nombre) {
    console.log( arguments );
    console.log('Hola ' + nombre);
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


saludar('Andrés', 25, false, 'Colombia');
// saludar2('Andrés');
 
saludarFlecha();
saludarFlecha2('Avril');



