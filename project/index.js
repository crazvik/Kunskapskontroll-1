const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer(response).listen(3000, () => {
  console.log("Listening on 3000")
});

function response(req, res) {
  var text = fs.readFileSync('public.txt', 'utf8');

  if(req.url === '/favicon.ico' || req.url === '/') {
    res.write('<p>' + text);
    res.end();
    return;
  }
  
  let params = url.parse(req.url, true)
  
  if(params.pathname === '/secret') {
    if(params.query.key == 'ALBATROSS') {
      var text = fs.readFileSync('secret.html', 'utf8');
      res.write(text);
      } else {
      res.writeHead(403);
      res.write("Unauthorized")
    }
    res.end();
    return;
  }
}