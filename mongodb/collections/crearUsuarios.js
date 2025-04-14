db.createCollection("usuarios", {
  validator:{
    $jsonSchema: {
      bsonType: "object",
      required: ["nombre", "edad", "correo"],
      properties: {
        nombre: {
          bsonType: "string",
          description: "Debe ser una cadena y es obligatorio"
        },
        edad: {
          bsonType: "int",
          minimum: 0,
          description: "Debe ser un entero positivo y es obligatorio"
        },
        correo: {
          bsonType: "string",
          pattern: "^.+@.+$",
          description: "Debe ser un correo válido y es obligatorio"
        },
        activo: {
          bsonType: "bool",
          description: "Debe ser booleano si se proporciona"
        }
      }
    }
  },
  validationLevel: "strict",
  validationAction: "error"
});