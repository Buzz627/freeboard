var express = require("express");
var app = express();
var port = process.env.PORT || 8000;
var path = require('path');

app.listen(port, function() {
  console.log("Listening on " + port);
});

app.use(express.static('.'));

app.get('/freeboard', function(req, res){
  res.sendFile(path.resolve('./index.html'));
});
