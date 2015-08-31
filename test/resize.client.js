var fs = require('fs');
var request = require('request');
var url = encodeURIComponent('http://7xj5yf.com1.z0.glb.clouddn.com/images/kivi.png');
console.log('requse url:', 'http://localhost:8081/images/300/100/' + url);

request('http://localhost:8081/images/300/100/' + url).pipe(fs.createWriteStream('./resized-client.png'));
// request('http://192.168.99.100:8081/images/resize/300/100/' + url).pipe(fs.createWriteStream('./resized-client.png'));