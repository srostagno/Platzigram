var express = require('express');
var app = express();

//Mongo, conéctate a la base de datos "usuarios"
mongoose.connect('mongodb://localhost/usuarios'); 

// llamo al modelo user
require('./models/user');

app.use(express.static('public')); //acceder a los statics en public
app.set('view engine', 'pug'); //sistema de plantillas: pug (antes llamado Jade)

app.get('/', function (req, res) {
  res.render('index');
})

app.listen(8888, function (err) {
  if (err) return console.log('Hubo un error'), process.exit(1);

  console.log('Platzigram escuchando en el puerto 8888');
})