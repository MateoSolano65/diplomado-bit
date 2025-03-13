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

