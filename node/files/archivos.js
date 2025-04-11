const fs = require( "fs" );

// * Leer un archivo
fs.readFile( "archivo.txt", "utf8", ( err, data ) => {
  if ( err ) {
    console.error( "Error al leer el archivo:", err );
    return;
  }
  console.log( "Contenido del archivo:", data );
});

// * Editar un archivo
fs.writeFile( "archivo.txt", "Nuevo contenido del archivo", ( err ) => {
  if ( err ) {
    console.error( "Error al escribir en el archivo:", err );
    return;
  }
  console.log( "Archivo editado correctamente" );
});

// * Renombrar un archivo
fs.rename( "archivo.txt", "nuevo_nombre.txt", ( err ) => {
  if ( err ) {
    console.error( "Error al renombrar el archivo:", err );
    return;
  }
  console.log( "Archivo renombrado correctamente" );

  fs.readFile( "nuevo_nombre.txt", "utf8", ( err, data ) => {
    if ( err ) {
      console.error( "Error al leer el archivo:", err );
      return;
    }
    console.log( "Contenido del archivo renombrado:", data );
  });
});