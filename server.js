var express = require('express');

var app = express();

app.set('view engine','pug'); //Utiliza pug(anteriormente llamado Jade)

app.use(express.static('public'));

app.get('/', function(req, res){
	res.render('index');
});

app.get('/signup', function(req, res){
	res.render('index');
});

app.get('/signin', function(req, res){
	res.render('index');
});

app.listen(8888, function(err){
	if(err) return console.log(err), process.exit(1);

	console.log('escuchando en el puerto 8888');
})