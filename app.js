
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path')
  , join = path.join;

var app = express();

app.set('title', 'TJ Holowaychuk');
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(join(__dirname, 'public')));
app.use(express.static(join(__dirname, 'build')));

app.get('/', function(req, res){
  res.render('index');
});

app.listen(3000);
console.log('listening on port 3000');
