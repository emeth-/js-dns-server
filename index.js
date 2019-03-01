var dnsd = require('dnsd')
dnsd.createServer(function(req, res) {
  console.log("HIT");
  res.end('1.2.3.4')
}).listen(process.env.PORT || 5000)
console.log('Server running at 127.0.0.1:'+(process.env.PORT || 5000))
//node index.js
//https://github.com/iriscouch/dnsd
//npm install dnsd