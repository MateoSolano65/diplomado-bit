// console.log("hello world");

const express = require( "express" );
const app = express();
const fs = require( "fs" );
const multer = require( "multer" );
const mongo = require( "mongoose" );

// Habilitar JSON en las respuestas
app.use( express.json() );


// ! Middlewares
app.use( ( req, res, next ) => {
  console.log( `Método: ${req.method}, URL: ${req.url}` );
  next(); // Call next() to pass control to the next middleware
} );

app.use( ( req, res, next ) => {
  req.requestTime = new Date().toISOString();
  console.log( `Request Time: ${req.requestTime}` );
  next(); // Call next() to pass control to the next middleware
} );


app.use("/upload-bits", express.raw({ type: "*/*" })); // Middleware para manejar datos binarios

// ! Middleware para autorizar el acceso a la API
var checkAdmin = ( req, res, next ) => {
  const user = req.body.user || req.query.user || req.headers.user;
  const lowerCaseUser = user.toLowerCase(); // Convertir a minúsculas para evitar problemas de mayúsculas/minúsculas
  if (lowerCaseUser !== "admin") {
    return res.status( 403 ).json( { error: "Acceso denegado" } );
  }
  next(); // Call next() to pass control to the next middleware
};


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


// ! Carga de Archivos

/**
 * POST /upload
 * Carga un archivo en base64 y lo guarda en el servidor.
 * Cuerpo de la solicitud:
 *   - archivo: string (archivo en base64 a cargar)
 *  - nombre: string (nombre del archivo a guardar con la extensión)
 * Respuesta:
 *   - 201: Archivo cargado correctamente.
 *   - 400: Solicitud incorrecta.
 */
app.post( "/upload", checkAdmin, ( req, res ) => {
  const {contenido, nombre} = req.body;
  
  // const archivoBase64 = contenido.split( "," )[ 1 ]; // Extraer la parte base64 del string
  const archivoBase64 = contenido; // Si ya es base64, no es necesario dividirlo

  require( "fs" ).writeFileSync( nombre, Buffer.from( archivoBase64, "base64" ) );
  // Guardar el archivo en el servidor (aquí puedes usar un módulo como "fs" para guardar el archivo)


  // Aquí puedes guardar el archivo en el servidor o procesarlo como desees
  // console.log( "Archivo cargado:", archivoBase64 );
  res.status( 201 ).json( { message: "Archivo cargado correctamente" } );
} );

/**
 * POST /upload-extension
 * Carga un archivo en base64 y lo guarda en el servidor con nombre y extensión.
 * Cuerpo de la solicitud:
 *  - contenido: string (archivo en base64 a cargar)
 * - nombre: string (nombre del archivo a guardar)
 * - extension: string (extensión del archivo a guardar)
 * Respuesta:
 *  - 201: Archivo cargado correctamente.
 * - 400: Solicitud incorrecta.
 */
app.post( "/upload-extension", ( req, res ) => {
  const { contenido, nombre, extension } = req.body;
  
  // const archivoBase64 = contenido.split( "," )[ 1 ]; // Extraer la parte base64 del string
  const archivoBase64 = contenido; // Si ya es base64, no es necesario dividirlo

  // Determinar el nombre del archivo con extensión
  let nombreCompleto = nombre;
  
  // Verificar si el nombre ya tiene una extensión
  if (extension && !nombre.includes('.')) {
    nombreCompleto = `${nombre}.${extension}`;
  } else if (extension && !nombre.endsWith(`.${extension}`)) {
    // Si el nombre tiene otra extensión pero queremos usar la especificada
    nombreCompleto = `${nombre}.${extension}`;
  }


  const rutaArchivo = `./uploads/${nombreCompleto}`; // Ruta donde se guardará el archivo
  // Crear la carpeta "uploads" si no existe
  if (!fs.existsSync('./uploads')) {
    fs.mkdirSync('./uploads');
  }

  fs.writeFileSync( rutaArchivo, Buffer.from( archivoBase64, "base64" ) );
  
  res.status( 201 ).json({ 
    message: "Archivo cargado correctamente",
    archivoGuardado: nombreCompleto 
  });
} );

/**
 * POST /upload-bits
 * Carga un archivo en bits
 * 
 */
app.post("/upload-bits", (req, res) => {
  // const nombre = req.headers["x-filename"] || "archivo.bin"; //* Obtener el nombre del archivo desde el header
  const nombre = req.query.nombre || "archivo.bin"; //* Obtener el nombre del archivo desde el query string
  fs.writeFileSync(`./uploads/${nombre}`, req.body); // req.body es un Buffer
  res.send("Archivo binario guardado");
});

// ! subir con multer por medio de multipart/form-data

const upload = multer({ dest: "uploads/multer" });

app.post("/upload-multer", upload.single("archivo"), (req, res) => {
  
  try {
    const tempPath = req.file.path; // Ruta temporal del archivo subido
    const finalPath = `uploads/multer/${req.file.originalname}`; // Ruta final donde se guardará el archivo

    fs.renameSync(tempPath, finalPath); // Renombrar el archivo de la ruta temporal a la ruta final
    res.status(201).send("Archivo subido correctamente con multer");
  } catch (error) {
    
    res.status(500).send("Error al subir el archivo");
  }
});

app.listen( 3000, () => {
  console.log( "Servidor escuchando en el puerto 3000" );
} );



// ! Conxión a MongoDB
mongo.connect( "mongodb://127.0.0.1:27017/proyecto-bit-prueba")
.then(() => {
  console.log("Conectado a MongoDB");
})
.catch(err => {
  console.error("Error al conectar a MongoDB:", err);
});

// * Crear un schema de usuario

const usuarioSchema = new mongo.Schema({
  nombre: { 
    type: String, 
    required: true 
  },
  edad: { 
    type: Number, 
    required: true 
  },
  correo: { 
    type: String,
    unique: true,
    validate: {
      validator: function(v) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v); // Regex para validar correo
      },
      message: props => `${props.value} no es un correo válido!`
    },
    required: true 
  },
  fechaRegisrtro: {
    type: Date, 
    default: Date.now 
  },
  activo: { 
    type: Boolean, 
    default: true 
  }
});

const Usuario = mongo.model( "Usuario", usuarioSchema );

// * Crear un esquema de Factura
const facturaSchema = new mongo.Schema({
  numeroFactura: { 
    type: String, 
    required: true 
  },
  fechaFactura: { 
    type: Date, 
    default: Date.now 
  },
  total: { 
    type: Number, 
    required: true 
  },
  _usuarioId: { 
    type: mongo.Schema.Types.ObjectId, 
    ref: "Usuario", // Referencia al modelo Usuario
    required: true 
  }
});

const Factura = mongo.model( "Factura", facturaSchema );

// // * Crear un nuevo usuario
// const crearUsuario = async ( nombre, edad, correo ) => {
//   try {
//     const nuevoUsuario = new Usuario( { nombre, edad, correo } );
//     await nuevoUsuario.save();
//     console.log( "Usuario creado:", nuevoUsuario );
//   } catch ( error ) {
//     console.error( "Error al crear el usuario:", error );
//   }
// };

// // * Crear un nuevo usuario
// crearUsuario("Juan", 30, "juan@example2.com");



// ! CRUD de usuarios con mongo desde Node.js

// * Crear un nuevo usuario
// const instanciarUsuario = new Usuario( );

// instanciarUsuario.nombre = "Mateo desde Node";
// instanciarUsuario.edad = 30;
// instanciarUsuario.correo = "mateo@examplenode.com";

// instanciarUsuario.save()
//   .then( ( usuario ) => {
//     console.log( "Usuario creado:", usuario );
//   } )
//   .catch( ( error ) => {
//     console.error( "Error al crear el usuario:", error );
//   } );


// * Leer todos los usuarios
// Usuario.find({edad: { $lt: 19 }})
// Usuario.find({edad: { $gte: 18 }})
//   .then((usuarios) => {
//     console.log("Usuarios mayores de 18 años:", usuarios, "\n\n Usuarios:", usuarios.length);
//   })
//   .catch((error) => {
//     console.error("Error al leer los usuarios:", error);
//   });

// Usuario.findOne({correo: "mateo@examplenode.com"}).then((usuarioMateo) => {
//   console.log("Usuario encontrado:", usuarioMateo);
//   const idUsuario = usuarioMateo._id;
//   const nuevoNombre = "Mateo desde Node Actualizadox4";

  // * Actualizar un usuario
//   Usuario.findOneAndUpdate(
//   { _id: idUsuario },
//   { nombre: nuevoNombre },
//   { new: true } // Devuelve el documento actualizado no el antiguo
//   )
//   .then((usuarioActualizado) => {
//     console.log("Usuario actualizado:", usuarioActualizado);
//   })
//   .catch((error) => {
//     console.error("Error al actualizar el usuario:", error);
//   });
// }
// ).catch((error) => {
//   console.error("Error al leer el usuario:", error);
// }
// );


// * Eliminar un usuario
// Usuario.findOneAndDelete({correo: "juan@example.com"}).then((usuarioEliminado) => {
//   console.log("Usuario eliminado:", usuarioEliminado);
// }).catch((error) => {
//   console.error("Error al eliminar el usuario:", error);
// });






// ! Usar AGREGATE para hacer un JOIN entre dos colecciones
// Crear una factura y asociarla a un usuario
// Usuario.findOne({correo: "mateo@examplenode.com"}).then((usuarioMateo) => {
//   console.log("Usuario encontrado:", usuarioMateo);
//   const idUsuario = usuarioMateo._id;
//   const nuevaFactura = new Factura({
//     numeroFactura: "FACC-0021",
//     total: 100,
//     _usuarioId: idUsuario // Cambiar usuarioId a _usuarioId
//   });

//   nuevaFactura.save()
//     .then((factura) => {
//       console.log("Factura creada:", factura);
//     })
//     .catch((error) => {
//       console.error("Error al crear la factura:", error);
//     });
// }
// ).catch((error) => {
//   console.error("Error al leer el usuario:", error);
// });

Usuario.aggregate([
  {
    $lookup: {
      from: "facturas", // Nombre de la colección a la que se va a hacer el join
      localField: "_id", // Campo local en la colección de usuarios
      foreignField: "_usuarioId", // Campo en la colección de facturas que hace referencia al usuario
      as: "facturas" // Nombre del nuevo campo que contendrá los documentos relacionados
    }
  },
  {
    $match: { 
      "facturas.0": { $exists: true } // Solo usuarios que tienen al menos una factura
    }
  },
  {
    $match: { edad: { $gte: 18 } } // Filtrar usuarios mayores de 18 años
  },
  {
    $project: {
      nombre: 1, // Incluir el nombre del usuario
      facturas: 1 // Incluir las facturas relacionadas
    }
  }
])
  .then((usuariosConFacturas) => {
    // console.log("Usuarios:",usuariosConFacturas);
    // console.log("Usuarios con facturas:", JSON.stringify(usuariosConFacturas, null, 2));
    // console.dir(usuariosConFacturas, { depth: null, colors: true }); // Mostrar el objeto completo sin truncar
    
    
    usuariosConFacturas.forEach((usuario) => {
      console.log(`Usuario: ${usuario.nombre}`);
      console.log("Facturas:");
      usuario.facturas.forEach((factura, i) => {
        console.log(`  #${i + 1}:`, factura);
      });
    });
    
  })
  .catch((error) => {
    console.error("Error al hacer el join:", error);
  });