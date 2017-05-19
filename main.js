var http = require('http');
var bitcore = require('bitcore-lib');
var priv_key = new bitcore.PrivateKey();
var wif_priv_key = priv_key.toWIF();
var pub_key = priv_key.toPublicKey();
var address = priv_key.toAddress();

data = '<strong>Address (compressed):</strong><br>';
data += address + '<br><br>';
data += '<strong>Public Key (compressed):</strong><br>';
data += pub_key + '<br><br>';
data += '<strong>Private Key:</strong><br>';
data += priv_key + '<br>';
data += '<strong>Private Key (WIF compressed):</strong><br>';
data += wif_priv_key + '<br>';


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
}).listen(8080);