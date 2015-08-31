var fs = require('fs');
var gm = require('gm').subClass({imageMagick: true});
var restify = require('restify');

var server = restify.createServer({
	name: 'image_transformer',
	version: '0.0.0'
});

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

// TODO 这里应该没有必要使用id
// server.get('/api/v1/img/:id/:width/:height/:type/:url', function(req, res ,next) {
// 	console.log('*********************************************************************************************');
// 	console.log('request_url:', req.url);
// 	console.log('operation: get transformed image');
// 	console.log('image_id:', req.params.id);
// 	console.log('image_width:', req.params.width);
// 	console.log('image_height:', req.params.height);
// 	console.log('image_type:', req.params.type);
// 	console.log('image_url:', req.params.url);
// 	console.log('*********************************************************************************************');
// 	var wtireStream = gm(req.params.url).resize(req.params.width, req.params.height, '!').stream(req.params.type);
// 	wtireStream.pipe(res);
// 	wtireStream.on('end', function() { next(false); });
// 	wtireStream.pipe(fs.createWriteStream('./transformed-server.png'));
// });

server.get('/api/v1/img/resize/:width/:height/:url', function(req, res, next) {
	console.log('*********************************************************************************************');
	console.log('request_url:', req.url);
	console.log('operation: resize image');
	console.log('image_width:', req.params.width);
	console.log('image_height:', req.params.height);
	console.log('image_url:', req.params.url);
	console.log('*********************************************************************************************');
	var wtireStream = gm(req.params.url).resize(req.params.width, req.params.height, '!').stream();
	wtireStream.pipe(res);
	wtireStream.on('end', function() { next(false); });
	gm(req.params.url).format(function(err, format) {
		if(err) {
			console.log('Get image type failed:', err);
		} else {
			wtireStream.pipe(fs.createWriteStream('./resized-server.' + format.toLowerCase()));
		}
	});
});

server.get('/api/v1/img/crop/:width/:height/:x/:y/:url', function(req, res, next) {
	console.log('*********************************************************************************************');
	console.log('request_url:', req.url);
	console.log('operation: crop image');
	console.log('image_width:', req.params.width);
	console.log('image_height:', req.params.height);
	console.log('image_x:', req.params.x);
	console.log('image_y:', req.params.y);
	console.log('image_url:', req.params.url);
	console.log('*********************************************************************************************');
	var wtireStream = gm(req.params.url).crop(req.params.width, req.params.height, req.params.x, req.params.y).stream();
	wtireStream.pipe(res);
	wtireStream.on('end', function() { next(false); });
	gm(req.params.url).format(function(err, format) {
		if(err) {
			console.log('Get image type failed:', err);
		} else {
			wtireStream.pipe(fs.createWriteStream('./croped-server.' + format.toLowerCase()));
		}
	});
});

server.get('/api/v1/img/format/:type/:url', function(req, res, next) {
	console.log('*********************************************************************************************');
	console.log('request_url:', req.url);
	console.log('operation: format image');
	console.log('format:', req.type);
	console.log('image_url:', req.params.url);
	console.log('*********************************************************************************************');
	var wtireStream = gm(req.params.url).stream(req.params.type);
	wtireStream.pipe(res);
	wtireStream.on('end', function() { next(false); });
	wtireStream.pipe(fs.createWriteStream('./format-server.' + req.params.type));
});


server.listen(8081, function() {
  console.log('%s listening at %s', server.name, server.url);
});