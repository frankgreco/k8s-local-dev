var express = require('express');
var app     = express();

app.get('/', function (req, res) {
    debugger;
   res.send('Hey Mars!');
})

var server = app.listen(8080, function () {
   var address = server.address()
   console.log("Example app listening at http://%s:%s", address.address, address.port)
});
