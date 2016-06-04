var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');

var app = new express();
var port = 3000;

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {
  res.sendFile('index.html', {root: './client/'});
});

app.get("/movies", function(req, res) {
  fs.readFile(__dirname + '/movies.json', function(err, data){
    if (err) throw err;
    movies = JSON.parse(data);    
    res.json(movies);
  });
});

app.get("/movies/:id", function(req, res){
  fs.readFile(__dirname + '/movies.json', function(err, data){
    if (err) throw err;
    movies = JSON.parse(data);
    res.json(movies[req.params.id]);
  });
});

app.post("/movies", function(req, res){
  var post = req.body;

  fs.readFile(__dirname + '/movies.json', function(err, data){
    if (err) throw err;
    movies = JSON.parse(data);
    movies.push(post);

    fs.writeFile(__dirname + '/movies.json', JSON.stringify(movies, null, 4), function(err){
      console.log('post was added!');
      res.end();
    });
  });
});

app.put("/movies/:id", function(req, res){
  post = req.body;
  fs.readFile(__dirname + '/movies.json', function(err, data){
    if (err) throw err;
    movies = JSON.parse(data);
    movies[req.params.id] = post;

    fs.writeFile(__dirname + '/movies.json', JSON.stringify(movies, null, 4), function(err){
      console.log('post was updated!');
      res.end();
    });
  });
});

app.delete("/movies/:id", function(req, res){
  fs.readFile(__dirname + '/movies.json', function(err, data){
    if (err) throw err;
    movies = JSON.parse(data);
    movies.splice(req.params.id, 1);

    fs.writeFile(__dirname + '/movies.json', JSON.stringify(movies, null, 4), function(err){
      console.log('post was deleted!');
      res.end();
    });
  });
});

app.use(express.static(__dirname + '/../client'));

app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
  }
});
