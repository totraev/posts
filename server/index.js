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

app.get("/posts", function(req, res) {
  fs.readFile(__dirname + '/posts.json', function(err, data){
    if (err) throw err;
    posts = JSON.parse(data);
    res.json(posts);
  });
});

app.get("/posts/:id", function(req, res){
  fs.readFile(__dirname + '/posts.json', function(err, data){
    if (err) throw err;
    posts = JSON.parse(data);
    res.json(posts[req.params.id]);
  });
});

app.post("/posts", function(req, res){
  var post = req.body;

  fs.readFile(__dirname + '/posts.json', function(err, data){
    if (err) throw err;
    posts = JSON.parse(data);
    posts.push(post);

    fs.writeFile(__dirname + '/posts.json', JSON.stringify(posts, null, 4), function(err){
      console.log('post was added!');
      res.end();
    })
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
