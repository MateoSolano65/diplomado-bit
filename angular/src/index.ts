// let saludo = 'Hola mundo';
// console.log(saludo);

// for (let index = 0; index <= 10; index++) {

//   console.log(index);
// }

// ! Tipos de datos
// * primitivos
let nombre: string = 'Juan';
let edad: number = 25;
let activo: boolean = true;

// * especiales
let datos: any = 5; // puede ser cualquier tipo de dato
datos = 'Ahora es texto';
datos = false; // ahora es un booleano

let datos2: unknown = 5; // puede ser cualquier tipo de dato
datos2 = 'Ahora es texto';
datos2 = false; // ahora es un booleano
// datos2.toUpperCase(); // no se puede usar porque es de tipo unknown

function saludar(): void {
  console.log('Hola mundo');
} // no retorna nada

let datoVacio: void = undefined; // se puede asignar undefined a una variable de tipo void
let datoNulo: null = null; // se puede asignar null a una variable de tipo null

// * Tipos compuestos
let lista: number[] = [1, 2, 3, 4, 5]; // array de numeros
let persona: [string, number] = ['Juan', 25]; // tupla de string y number
enum Estado {
  Activo = 'Activo',
  Inactivo = 'Inactivo',
  Pendiente = 'Pendiente',
  Completado = 'Completado',
} // define un conjunto de constantes con nombre

// * Tipos personalizados
type Persona = {
  nombre: string;
  edad: number;
  activo: boolean;
  direccion?: string; // ? indica que es opcional
};

interface IPersona {
  nombre: string;
  edad: number;
  activo: boolean;
  direccion?: string; // ? indica que es opcional
}

// ? Usando los tipos personalizados
let estadoPersona: Estado = Estado.Activo; // asigna el valor Activo a la variable estadoPersona
let persona1: Persona = {
  nombre: 'Juan',
  edad: 25,
  activo: true,
}; // crea un objeto persona con los datos de la variable persona1
let persona2: IPersona = {
  nombre: 'Juan',
  edad: 25,
  activo: true,
}; // crea un objeto persona con los datos de la variable persona2

// ! Tuplas

let tupla: [string, number, boolean] = ['Juan', 25, true]; // crea una tupla con los datos de la variable tupla

console.log('tupla 1:', tupla);

tupla[0] = 'Pedro'; // asigna el valor Pedro a la primera posicion de la tupla
tupla[1] = 30; // asigna el valor 30 a la segunda posicion de la tupla
tupla[2] = false; // asigna el valor false a la tercera posicion de la tupla
console.log(tupla); // imprime la tupla en la consola

// ! Enums

enum diasDeLaSemana {
  Lunes,
  Martes,
  Miércoles,
  Jueves,
  Viernes,
  Sábado,
  Domingo,
}
console.log(diasDeLaSemana.Lunes); // imprime 0
console.log(diasDeLaSemana[0]); // imprime Lunes
console.log(diasDeLaSemana[1]); // imprime Martes

// diferencia entre enum y array
let dias: string[] = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Domingo',
];
console.log(dias[0]); // imprime Lunes
console.log(dias[1]); // imprime Martes
// console.log(dias.Lunes); // ! no se puede acceder a la propiedad Lunes de un array
