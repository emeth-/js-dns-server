const PORT = process.env.PORT || 5000;
//const PORT = 80;
var dnsd = require('dnsd')
dnsd.createServer(function(req, res) {
  console.log("HIT");
  res.end('1.2.3.4')
}).listen(PORT, '127.0.0.1')
console.log('Server running at 127.0.0.1:'+PORT)
//node index.js
//https://github.com/iriscouch/dnsd
//npm install dnsd