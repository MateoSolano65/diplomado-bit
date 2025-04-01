
/**
 * This script demonstrates basic JavaScript functionality including:
 * - Determining if a number is odd or even using the modulo operator
 * - Event handling for DOM elements
 * 
 * The script first evaluates if a constant number is even or odd and logs the result.
 * When the DOM content is loaded, it sets up the following event listeners:
 * - Click event on "btn-alert" element that displays an alert
 * - Mouse events (down, up, move) on "div-1" element that change its background color
 * - Keydown event on the document body that logs the pressed key
 * 
 * @file Simple JavaScript demo with conditional logic and event handling
 * @author Unknown
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

} );
