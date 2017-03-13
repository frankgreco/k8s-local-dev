var express = require('express');
var config  = require('config')
var app     = express();

app.get('/', function (req, res) {
   debugger;
   console.log('new request!');
   res.json(config.get('message'))
})

var server = app.listen(8080, function () {
   var address = server.address()
   console.log("Example app listening at http://%s:%s", address.address, address.port)
});
