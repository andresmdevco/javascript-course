

class Persona {
    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase') {

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    }

    // sets y gets
    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase();
    }
    get getComidaFavorita() {
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    } 

    // métodos
    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase() {
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
}


const spiderman = new Persona('Peter Parker', 'Spiderman', 'Un gran poder conlleva una gran responsabilidad');
const ironman = new Persona('Tony Stark', 'Ironman', 'Yo soy Ironman');
// console.log(ironman);

// spiderman.quienSoy();
// ironman.quienSoy();
spiderman.miFrase();
// ironman.miFrase();

spiderman.setComidaFavorita = 'El pay de cereza de la tía May';
// spiderman.comida = 'Duende Verde';

console.log(spiderman.getComidaFavorita);

console.log(spiderman);