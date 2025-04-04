
/**
 * This script demonstrates basic JavaScript functionality including:
 * - Determining if a number is odd or even using the modulo operator
 * - Event handling for DOM elements
 * - Using setTimeout for delayed execution
 * - Working with Date objects
 * - Using LocalStorage for persistent data storage
 * 
 * The script first evaluates if a constant number is even or odd and logs the result.
 * When the DOM content is loaded, it sets up the following event listeners:
 * - Click event on "btn-alert" element that displays an alert
 * - Mouse events (down, up, move) on "div-1" element that change its background color
 * - Keydown and keyup events on the document body that log the pressed/released key
 * 
 * Additionally, it demonstrates:
 * - setTimeout to execute a function after 2 seconds
 * - Creating and manipulating Date objects
 * - Storing and retrieving data using LocalStorage
 * 
 * @file Simple JavaScript demo with various core JavaScript functionalities
 * @author Jesús Solano
 * @version 1.0
 */


// Determinar si un numero es par o impar

const numero = 4;

( numero % 2 === 0 )
  ? console.log( `El numero ${ numero } es par` )
  : console.log( `El numero ${ numero } es impar` );


document.addEventListener( "DOMContentLoaded", function () {

  document.getElementById( "btn-alert" ).addEventListener( "click", () => {
    alert( "Hola mundo" );
  } );

  document.getElementById( "div-1" ).addEventListener( "mousedown", function () {
    this.style.backgroundColor = "red";
  } );

  document.getElementById( "div-1" ).addEventListener( "mouseup", function () {
    this.style.backgroundColor = "";
  } );

  document.getElementById( "div-1" ).addEventListener( "mousemove", function () {
    this.style.backgroundColor = "blue";
  } );

  document.body.addEventListener( "keydown", function ( event ) {
    console.log( `Tecla presionada: ${ event.key }` );
  } );

  document.body.addEventListener( "keyup", function ( event ) {
    console.log( `Tecla liberada: ${ event.key }` );
  } );


  const notification = "Recordatorio cada 2 segundos";

  // ! Permite ejecutar una funcion cada cierto tiempo sin parar
  // setInterval( function(){
  //   console.log( notification );
  // }, 2000 );

  // ! Permite ejecutar una funcion cada cierto tiempo y solo una vez
  setTimeout( function () {
    console.log( notification, " (solo una vez)" );
  }, 2000 );


  // * Fechas en JS
  const fechaActual = new Date();
  const fecha1 = new Date( "2023-10-01" );
  const fecha2 = new Date( 2023, 9, 1 ); // Mes 9 es octubre (0-11)

  console.log( `El año actual es: ${ fechaActual.getFullYear() }` );
  console.log( `El mes actual es: ${ fechaActual.getMonth() + 1 }` ); // Mes 0 es enero
  console.log( `El dia actual es: ${ fechaActual.getDate() }` );
  console.log( `La fecha 1 es: ${ fecha1 }` );
  console.log( `La fecha 2 es: ${ fecha2 }` );



  // ! LocalStorage y Session Storage
  // * LocalStorage
  localStorage.setItem( "nombre", "Juan" );
  localStorage.setItem( "hora", fechaActual.getHours() );

  let key1 = localStorage.getItem( "nombre" );
  let key2 = localStorage.getItem( "hora" );

  console.log( "sssssssss", key1, "--", key2 );

  // * eliminar un elemento de localStorage
  // localStorage.removeItem( "nombre" );

  // * eliminar todo el localStorage
  // localStorage.clear();



} );
