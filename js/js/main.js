// Archivo de JavaScript

// ! Estructuras de datos

// * Variables
let nombre = "Juan";
let apellido = "Perez";
let edad = 25;
let peso = 75.5;
let altura = 1.75;
let casado = false;
let hijos = 0;


// * Objetos
let persona = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 25,
  peso: 75.5,
  altura: 1.75,
  casado: false,
  hijos: 0
};

// * Arreglos
let arreglo = [ 1, 2, 3, 4, 5 ];

// * Arreglos de objetos
let personas = [
  {
    nombre: "Juan",
    apellido: "Perez",
    edad: 25,
    peso: 75.5,
    altura: 1.75,
    casado: false,
    hijos: 0
  },
  {
    nombre: "Maria",
    apellido: "Lopez",
    edad: 30,
    peso: 60.5,
    altura: 1.65,
    casado: true,
    hijos: 2
  }
];




// ! Condicionales

let numero = 18;

if ( numero >= 18 ) {
  console.log( "Es mayor de edad" );
}
else {
  console.log( "Es menor de edad" );
}

numero = 1;

switch ( numero ) {
  case 1:
    console.log( "Es uno" );
    break;

  case 2:
    console.log( "Es dos" );
    break;

  default:
    break;
}


// ! Ciclos y bucles
var array = [ 1, 2, 3, 4, 5 ];

for ( let numero = 0; numero < array.length; numero++ ) {
  const element = array[ numero ];

  console.log( "Ciclo for", element );
}



numero = 0;

while ( numero < array.length ) {

  console.log( "while", array[ numero ] );

  numero++;
}

numero = 4;

do {
  console.log( "do while", array[ numero ] );

  numero++;
} while ( numero < array.length );


// ! Funciones

function sumar( a, b ) {
  return a + b;
}

console.log( "SUMA", sumar( 5, 3 ) );


const saludar = ( nombre ) => {
  return "Hola " + nombre;
};

console.log( saludar( "Yisus" ) );



// ! Funciones de objetos

let persona2 = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 25,
  peso: 75.5,
  altura: 1.75,
  casado: false,
  hijos: 0,
  saludar: function () {
    return "Hola, soy " + this.nombre + " " + this.apellido;
  }
};

console.log( persona2.saludar() );



// ! Conjuntos y matrices

let matriz = [
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ]
];

console.log( matriz[ 2 ][ 1 ] ); // 8

let Conjuntos = new Set( [ 1, 2, 3 ] );

console.log( Conjuntos );

Conjuntos.add( 4 );

console.log( Conjuntos );


// ! Operaciones con arrays

// map()
const mapResult = [ 1, 2, 3, 4 ].map( ( item ) => item * 2 );
console.log( "map() - Multiplicar por 2:", mapResult ); // [2,4,6,8]

// filter()
const filterPositive = [ 0, 1, -1, -2 ].filter( ( item ) => item > 0 );
console.log( "filter() - Números positivos:", filterPositive ); // [1]

const filterGreaterThanTwo = [ 0, 1, -1, -2 ].filter( ( item ) => item > 2 );
console.log( "filter() - Números mayores que 2:", filterGreaterThanTwo ); // []

// forEach()
console.log( "forEach() - Iterar sobre elementos:" );
[ "Lucas", "Maria", "Juan", "Ana" ].forEach( ( item ) => console.log( "  -", item ) ); // Lucas Maria Juan Ana

// find()
const findPositive = [ 0, 1, -1, -2 ].find( ( item ) => item > 0 );
console.log( "find() - Primer número positivo:", findPositive ); // 1

const findGreaterThanTwo = [ 0, 1, -1, -2 ].find( ( item ) => item > 2 );
console.log( "find() - Primer número mayor que 2:", findGreaterThanTwo ); // undefined

// sort()
const sortResult = [ 0, 1, -1, -2 ].sort( ( previo, siguiente ) => previo - siguiente );
console.log( "sort() - Ordenar ascendente:", sortResult ); // [-2,-1,0,1]

// some()
const someEven = [ 1, 2, 3, 4 ].some( ( item ) => item % 2 == 0 );
console.log( "some() - ¿Algún número par?:", someEven ); // true

// every()
const everyEven = [ 1, 2, 3, 4 ].every( ( item ) => item % 2 == 0 );
console.log( "every() - ¿Todos son pares?:", everyEven ); // false

// concat()
const concatResult = [ 1, 2, 3, 4 ].concat( [ 5, 6, 7, 8 ] );
console.log( "concat() - Unir arrays:", concatResult ); // [1, 2, 3, 4, 5, 6, 7, 8]

// includes()
const includesResult = [ 1, 2, 3, 4 ].includes( 2 );
console.log( "includes() - ¿Incluye el número 2?:", includesResult ); // true

// join()
const joinResult = [ "Hola", "mundo", "!" ].join( " - " );
console.log( "join() - Unir elementos:", joinResult ); // Hola mundo !

// reduce()
const reduceResult = [ 1, 2, 3, 4, 1 ].reduce( ( acumulador, item ) => acumulador + item, 0 );
console.log( "reduce() - Sumar elementos:", reduceResult ); // 11

// indexOf()
const indexOfResult = [ 1, 2, 3, 4, 1 ].indexOf( 1 );
console.log( "indexOf() - Índice del primer 1:", indexOfResult ); // 0 o -1 si no lo encuentra

// push()
const pushResult = [ 1, 2, 3, 4 ].push( 6 );
console.log( "push() - Agregar al final:", pushResult ); // 5 devuelve la longitud del array

// pop()
const popResult = [ 1, 2, 3, 4 ].pop();
// const po = popResult.pop();
console.log( "pop() - Eliminar el último:", popResult ); // 4 devuelve el elemento eliminado

// shift()
const shiftResult = [ 1, 2, 3, 4 ].shift();
// const sh = shiftResult.shift();
console.log( "shift() - Eliminar el primero:", shiftResult ); // 1 devuelve el elemento eliminado


// unshift()
const unshiftResult = [ 1, 2, 3, 4 ].unshift( 0 );
console.log( "unshift() - Agregar al principio:", unshiftResult ); // 5 devuelve la longitud del array

// slice()
const sliceResult = [ 1, 2, 3, 4 ].slice( 1, 5 );
console.log( "slice() - Extraer elementos:", sliceResult ); // [2,3]

// reverse()
const reverseResult = [ 1, 2, 3, 4 ].reverse();
console.log( "reverse() - Invertir elementos:", reverseResult ); // [4,3,2,1]

// flat()
const flatResult = [ 1, [ 2, 3 ], 4 ].flat();
console.log( "flat() - Aplanar array:", flatResult ); // [1,2,3,4]

// isArray()
const isArrayResult = Array.isArray( [ 1, 2, 3, 4 ] );
console.log( "isArray() - ¿Es un array?:", isArrayResult ); // true
const isArrayResult2 = Array.isArray( "Hola" );
console.log( "isArray() - ¿Es un array?:", isArrayResult2 ); // false

// from()
const fromResult = Array.from( "Hola" );
console.log( "from() - Convertir a array:", fromResult ); // ["H","o","l","a"]