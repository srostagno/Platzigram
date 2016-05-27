var page = require('page');
var main = document.getElementById('main-container')

page('/', function(ctx, next){
	main.innerHTML = 'home';
})

page('/signup', function(ctx, next){
	main.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum et ratione vitae molestiae similique vel dolores deleniti, ipsum maiores, officia eaque facere aspernatur sint non corporis harum amet cumque earum.';
})

page.start();