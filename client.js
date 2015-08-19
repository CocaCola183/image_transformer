var restify = require('restify');
var request = require('request');
var fs = require('fs');

var client = restify.createJsonClient({
	url: 'http://localhost:8081'
});

var testImage = encodeURIComponent('http://pic1a.nipic.com/2008-12-04/2008124215522671_2.jpg');


request('http://localhost:8081/images/1234567/300/100/png/' + testImage).pipe(fs.createWriteStream('./dist/hello.png'));