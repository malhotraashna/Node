const http = require('http')
const port = 3000
var express = require("express");
var app     = express();
app.listen(port);
var fs = require('fs');

app.get('/',(req, res) => {
    file('index.html',res)
})

app.get('/user',(req, res) => {
    file('test.html', res)
})

var file = (file, res) => {
    fs.readFile(file, function (err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    })
}
/*const requestHandler = (request, response) => {
    console.log(request.url)
    //response.end(index.html)

    response.sendFile(path.join('index.html'))
}*/

//const server = http.createServer(requestHandler).listen(port)
