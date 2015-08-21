var fs = require('fs');
var request = require('request');
var url = encodeURIComponent('http://7xj5yf.com1.z0.glb.clouddn.com/images/kivi.png');

// request('http://localhost:8081/images/300/100/' + url).pipe(fs.createWriteStream('./resized.png'));
request(('http://localhost:8081/images/300/100/' + url).toString()).pipe(fs.createWriteStream('./transformed.png'));