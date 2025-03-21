// ! -----------------------DOM-----------------------

// let h1element = document.querySelector( "h1" );
// console.log( h1element );

// h1element.innerText = "Hola mundo";


//! Seleccionando por ID
// let titulo = document.getElementById("titulo");
// titulo.innerText = "Nuevo Título";

//! Seleccionando por Clase
// let elementos = document.getElementsByClassName("parrafo");
// for (let el of elementos) {
//     el.style.color = "blue";
// }

//! Seleccionando con querySelector
// let boton = document.querySelector(".btn");
// boton.style.backgroundColor = "red";

//! Seleccionando con tag
// let parrafos = document.getElementsByTagName("p");
// for (let p of parrafos) {
//     p.style.fontSize = "18px";
// }

//! Seleccionando con Name
// let inputs = document.getElementsByName("usuario");
// for (let input of inputs) {
//     input.style.border = "2px solid blue";
// }




document.addEventListener( "DOMContentLoaded", () => {


  //? Selector por id

  const titulo = document.getElementById( "titulo" );
  console.log( titulo );
  console.log( titulo.textContent );
  titulo.innerText = "Nuevo Título Hello World";
  titulo.style.color = "red";
  titulo.style.backgroundColor = "black";

  //? Selector por clase
  let parrafos = document.getElementsByClassName( "class-p" );
  console.log( parrafos );
  console.log( parrafos[ 1 ].textContent );
  parrafos[ 1 ].innerText = "Nuevo texto parrafo 2";

  //? Selector por tag
  let parrafos2 = document.getElementsByTagName( "p" );
  console.warn( "Selector por tags", parrafos2 );
  console.log( parrafos2[ 1 ].textContent );
  parrafos2[ 1 ].textContent = "Nuevo texto parrafo 2 desde tag";

  //? Selector por Name
  let inputs = document.getElementsByName( "input-value" );
  console.warn( "Selector por Name", inputs );
  console.log( inputs[ 0 ].value );
  inputs[ 0 ].value = "Nuevo valor input";


} );






