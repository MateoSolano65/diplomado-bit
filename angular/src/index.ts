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
enum Estado{
  Activo = 'Activo',
  Inactivo = 'Inactivo',
  Pendiente = 'Pendiente',
  Completado = 'Completado'
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