var fs = require('fs');
var gm = require('gm').subClass({imageMagick: true});
var restify = require('restify');

var server = restify.createServer();

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

// TODO 这里应该没有必要使用id
server.get('/images/:id/:width/:height/:type/:url', function(req, res ,next) {
	var wtireStream = gm(req.params.url).resize(req.params.width, req.params.height, '!').stream(req.params.type);
	wtireStream.pipe(res);
	wtireStream.on('end', function() {
		consoel.log('pipe end');
		next(false);
	});
});

server.listen(8081, function() {
  console.log('%s listening at %s', server.name, server.url);
});