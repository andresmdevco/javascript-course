# JavaScript-Curso

Ejercicios de fundamentos de JavaScript y un proyecto de Blackjack, organizados por secciones.

## Tecnologías

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-4-7952B3?logo=bootstrap&logoColor=white)

## Estructura del repositorio

```
javascript-course/
├── README.md
├── .gitignore
├── 01-fundamentos/
│   ├── index.html
│   └── assets/js/
│       ├── bases/
│       ├── ciclos/
│       └── classes/
└── 02-blackjack/
    ├── index.html
    └── assets/
        ├── cartas/
        └── js/
```

## Secciones

### 01 — Fundamentos

Ejercicios básicos organizados por tema. Para probar cada uno, descomenta la línea correspondiente en `01-fundamentos/index.html`:

```html
<!-- <script src="assets/js/bases/app.js"></script> -->
<script src="assets/js/classes/constructores-multiples.js"></script> <!-- ← activo -->
```

#### bases/

| Archivo | Concepto |
|---------|----------|
| `app.js` | Variables, tipos y `console` |
| `alerts.js` | `alert`, `prompt` y `confirm` |
| `primitivos.js` | Tipos primitivos y `typeof` |
| `palabras-reservadas.js` | Palabras reservadas y convenciones de nombres |
| `arreglos.js` | Declaración y acceso a arrays |
| `arreglos2.js` | Métodos de arrays: `push`, `pop`, `splice`, `indexOf`, `forEach` |
| `objeto-literal.js` | Objetos literales, `Object.freeze`, `Object.entries` |
| `funciones.js` | Funciones tradicionales, anónimas y de flecha |
| `protip-retorno.js` | Desestructuración, rest/spread y argumentos |
| `valor-referencia.js` | Paso por valor vs. paso por referencia |
| `if-else.js` | Condicionales con objetos como alternativa al if/else |
| `logica-booleana.js` | Operadores lógicos |
| `operador-ternario.js` | Operador ternario |
| `protip-ternario.js` | Ternarios anidados y en arrays |
| `switch.js` | Estructura `switch` |

#### ciclos/

| Archivo | Concepto |
|---------|----------|
| `for.js` | `for` tradicional, `for...in` y `for...of` |
| `while-do-while.js` | `while` y `do...while` con `break` y `continue` |

#### classes/

| Archivo | Concepto |
|---------|----------|
| `problema.js` | Problema que motiva el uso de clases |
| `class.js` | Clases: constructor, métodos, getters/setters y miembros estáticos |
| `sub-classes.js` | Herencia con `extends` y `super` |
| `esnext.js` | Propiedades privadas con `#` |
| `singleton.js` | Patrón Singleton |
| `constructores-multiples.js` | Constructores alternativos con métodos estáticos |

---

### 02 — Blackjack 

Juego de Blackjack contra la computadora construido con JavaScript vanilla y Bootstrap 4.

**Funcionalidades:**
- Barajar y repartir cartas aleatoriamente
- Turno del jugador: pedir carta o detenerse
- Turno automático de la computadora
- Cálculo de puntos y determinación del ganador
- Botón para iniciar una nueva partida

**Archivos principales:**
- `juego.js` — lógica del juego
- `juego-min.js` — versión minificada lista para producción
- `underscore-min.js` — usado para barajar el deck con `_.shuffle()`

## Repositorios relacionados

Este repositorio es el principal del curso. Algunas secciones tienen su propio repositorio:

| Repositorio | Descripción |
|-------------|-------------|
| [blackjack-game-vite](https://github.com/andresmdevco/blackjack-game-vite) | Juego de Blackjack contra la computadora con Vite |
| [todo-app](https://github.com/andresmdevco/todo-app) | App de gestión de tareas con filtros y persistencia en localStorage |
| [js-http-app](https://github.com/andresmdevco/js-http-app) | Consumo de la Rick and Morty API con Fetch |
| [js-advanced-concepts](https://github.com/andresmdevco/js-advanced-concepts) | Callbacks, Promises, async/await y generadores |
| [js-crud-app](https://github.com/andresmdevco/js-crud-app) | CRUD de usuarios con json-server |
| [js-esnext](https://github.com/andresmdevco/js-esnext) | Métodos de arrays introducidos en ES2023 |