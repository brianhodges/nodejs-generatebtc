var http = require('http');
var bitcore = require('bitcore-lib');
var QRCode = require('qrcode');
var priv_key = new bitcore.PrivateKey();
var wif_priv_key = priv_key.toWIF();
var pub_key = priv_key.toPublicKey();
var address = priv_key.toAddress();

data = '';
data += '<strong>Public Key (compressed):</strong><br>';
data += pub_key + '<br><br>';

QRCode.toDataURL(address.toString(), function (err, img) {
    data += '<strong>Address (compressed):</strong><br>';
    data += address + '<br>';
    data += "<img src='" + img + "'/><br><br><br>";
});

QRCode.toDataURL(priv_key.toString(), function (err, img) {
    data += '<strong>Private Key:</strong><br>';
    data += priv_key + '<br>';
    data += "<img src='" + img + "'/><br><br>";
});

QRCode.toDataURL(wif_priv_key.toString(), function (err, img) {
    data += '<strong>Private Key (WIF compressed):</strong><br>';
    data += wif_priv_key + '<br>';
    data += "<img src='" + img + "'/><br><br>";
});

console.log("Running local server @ http://localhost:8080");
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
}).listen(8080);