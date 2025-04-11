// console.log("hello world");

const express = require( "express" );
const app = express();

// Habilitar JSON en las respuestas
app.use( express.json() );

const usuarios = [
  { id: 1, nombre: "Juan" },
  { id: 2, nombre: "Pedro" },
  { id: 3, nombre: "Maria" },
];

/**
 * GET /usuarios
 * Devuelve la lista de usuarios.
 * Respuesta:
 *   - 200: Devuelve un array de usuarios.
 */
app.get( "/usuarios", ( req, res ) => {
  res.json( usuarios );
} );

/**
 * POST /usuarios
 * Crea un nuevo usuario.
 * Cuerpo de la solicitud:
 *   - nombre: string (nombre del usuario)
 * Respuesta:
 *   - 201: Devuelve el usuario creado.
 */
app.post( "/usuarios", ( req, res ) => {
  const nuevoUsuario = req.body;
  usuarios.push( nuevoUsuario );
  res.status( 201 ).json( nuevoUsuario );
} );

/**
 * PUT /usuarios/:id
 * Actualiza el nombre de un usuario existente.
 * Parámetros de la ruta:
 *   - id: number (ID del usuario a actualizar)
 * Cuerpo de la solicitud:
 *   - nombre: string (nuevo nombre del usuario)
 * Respuesta:
 *   - 200: Devuelve el usuario actualizado.
 *   - 404: Usuario no encontrado.
 */
app.put( "/usuarios/:id", ( req, res ) => {
  const id = parseInt( req.params.id );
  const usuario = usuarios.find( ( u ) => u.id === id );
  if ( !usuario ) {
    return res.status( 404 ).json( { error: "Usuario no encontrado" } );
  }

  usuario.nombre = req.body.nombre || usuario.nombre;
  res.json( usuario );
} );

/**
 * DELETE /usuarios/:id
 * Elimina un usuario existente.
 * Parámetros de la ruta:
 *   - id: number (ID del usuario a eliminar)
 * Respuesta:
 *   - 200: Usuario eliminado correctamente.
 *   - 404: Usuario no encontrado.
 */
app.delete( "/usuarios/:id", ( req, res ) => {
  const index = usuarios.findIndex( u => u.id === parseInt( req.params.id ) );
  if ( index === -1 ) return res.status( 404 ).json( { error: "Usuario no encontrado" } );

  usuarios.splice( index, 1 );
  res.json( { message: "Usuario eliminado" } );
} );


// ! Datos desde el body de la petición
/**
 * POST /usuarios/:id/rol
 * Asigna un rol a un usuario existente.
 * Parámetros de la ruta:
 *  - id: number (ID del usuario al que se le asignará el rol)
 * Cuerpo de la solicitud:
 *  - rol: string (rol a asignar al usuario)
 * Respuesta:
 *  - 200: Usuario actualizado con el nuevo rol.
 * - 404: Usuario no encontrado.
 */
app.post( "/usuarios/:id/rol", ( req, res ) => {
  const requestBody = req.body;
  const id = parseInt( req.params.id );
  const usuario = usuarios.find( ( u ) => u.id === id );
  if ( !usuario ) {
    return res.status( 404 ).json( { error: "Usuario no encontrado" } );
  }
  
  usuario.rol = requestBody.rol || usuario.rol;
  res.json( usuario );
} );




app.listen( 3000, () => {
  console.log( "Servidor escuchando en el puerto 3000" );
} );

