const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer(response).listen(3000, () => {
  console.log("Listening on 3000");
});

function response(request, response) {
  let publicContent = fs.readFileSync('public.txt', 'utf8');

  if(request.url === '/favicon.ico' || request.url === '/') {
    response.write(publicContent);
    response.end();
    return;
  }
  
  let urlQuery = url.parse(request.url, true);
  
  if(urlQuery.pathname === '/secret') {
    if(urlQuery.query.key == 'ALBATROSS') {
      text = fs.readFileSync('secret.html', 'utf8');
      response.write(text);
      } else {
      response.writeHead(403);
      response.write("Unauthorized");
    }
    response.end();
    return;
  }
}