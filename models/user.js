//trabajar con librería mongoose
var mongoose = require('mongoose'); 

// Estructura de la tabla
var UserSchema = new mongoose.Schema({
	name: String, // Nombre de Usuario
	provider: String, // Cuenta de Usuario (Twitter o Facebook) 
	provider_id: {type: String, unique: true}, // Id proporcionado por el provider
	photo: String, // Avatar de usuario
	createdAt: {type: Date, default: Date.now} // Fecha de creación
});

//Declaramos el modelo
var User = mongoose.model('User', UserSchema);