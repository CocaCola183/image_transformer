var fs = require('fs');
var request = require('request');

var url = encodeURIComponent('http://7xj5yf.com1.z0.glb.clouddn.com/images/kivi.png');

request('http://localhost:8081/images/id/300/100/png/' + url).pipe(fs.createWriteStream('./transformed.png'));
// request('http://192.168.99.100:8081/images/id/300/100/png/' + url).pipe(fs.createWriteStream('./transformed.png'));