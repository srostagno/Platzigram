var bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    errorhandler = require('errorhandler'),
    express = require('express'),
    favicon = require('serve-favicon'),
    json = require('express-json'),
    logger = require('morgan'),
    methodOverride = require('method-override'),
    path = require('path'),
    session = require('express-session'),
    router = express.Router(),
    mongoose = require('mongoose'), // Mongoose: Libreria para conectar con MongoDB
    passport = require('passport'), // Passport: Middleware de Node que facilita la autenticación de usuarios
    LocalStrategy = require('passport-local').Strategy;


// llamo al modelo user
require('./models/user');
require('./passport')(passport);

//Mongo, conéctate a la base de datos "usuarios"
mongoose.connect('mongodb://localhost/users', function(err, res){
	if(err) throw err;
	console.log('Conectado con éxito a la BD');
});

// Iniciamos la aplicación Express
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug'); //sistema de plantillas: pug (antes llamado Jade)
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));

// Middlewares de Express que nos permiten enrutar y poder
// realizar peticiones HTTP (GET, POST, PUT, DELETE)
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(json());
app.use(methodOverride());

// Ruta de los archivos estáticos (HTML estáticos, JS, CSS,...)
app.use(express.static(path.join(__dirname, 'public')));

// Indicamos que use sesiones, para almacenar el objeto usuario
// y que lo recuerde aunque abandonemos la página
app.use(session({ 
  secret: 'lollllo',
  resave: true,
  saveUninitialized: true
}));

// Configuración de Passport. Lo inicializamos
// y le indicamos que Passport maneje la Sesión
app.use(passport.initialize());
app.use(passport.session());
// app.use(app.router);

// Si estoy en local, le indicamos que maneje los errores
// y nos muestre un log más detallado
if ('development' == app.get('env')) {
  // app.use(errorHandler();
}

app.all('/', function (req, res) {
  // console.log(req.user, '############################## Usuario #####');
  res.render('index', { user: req.user });
});

app.get('/', function(req, res){
  res.render('home', { 
    user: req.user
  });
});


/* Rutas de Passport */
// Ruta para desloguearse
app.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

// Ruta para autenticarse con Twitter (enlace de login)
app.get('/auth/twitter', passport.authenticate('twitter'));
// Ruta para autenticarse con Facebook (enlace de login)
app.get('/auth/facebook', passport.authenticate('facebook'));
// Ruta de callback, a la que redirigirá tras autenticarse con Twitter.
// En caso de fallo redirige a otra vista '/login'
app.get('/auth/twitter/callback', passport.authenticate('twitter',
  { successRedirect: '/', failureRedirect: '/login' }
));
// Ruta de callback, a la que redirigirá tras autenticarse con Facebook.
// En caso de fallo redirige a otra vista login
app.get('/auth/facebook/callback', passport.authenticate('facebook',
  { successRedirect: '/', failureRedirect: '/login' }
));

// Inicio del servidor
var port = 8888;
app.listen(port, function (err) {
  if (err) return console.log('Hubo un error'), process.exit(1);
  console.log('Platzigram escuchando en el puerto ' + port);
})