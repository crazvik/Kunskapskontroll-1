const url = require('url');
const fs = require('fs');
const queryString = require('querystring');
const qs = queryString.parse('key=ALBATROSS');
console.log(qs.key);
let express = require('express');
const e = require('express');
let app = express();

app.use(express.static(__dirname + '/project'))

app.get('/', (req, res) => {
  fs.readFile('public.txt', 'utf8', (e, data) => {
    if(e) throw e;
    res.send('<p>' + data);
  });
});



app.listen(3000, () => {
  console.log("Listening on 3000")
})

/*
http.createServer(function (req, res) {
  var query = url.parse(req.url, true);
  var filename = "." + query.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(3000);*/