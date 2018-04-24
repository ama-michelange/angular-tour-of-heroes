const express = require('express')
const request = require('request')
const app = express()

// Port of the service on the local server
const port = 3000;

// Add CORS Headers to response
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Proxy all requests to external server
app.all('*', function (req, res, next) {
console.log('Proxying the request ...' + req.method + ' ' + req.url);
var x = request({'uri':'http://v2.prixbd-alices.fr/v1/public/api' + req.url, 'method': req.method, 'headers': req.headers});
req.pipe(x);
x.pipe(res);
});

// Start server
app.listen(port, () => console.log('Proxy listening on port ' + port + '!')) 
