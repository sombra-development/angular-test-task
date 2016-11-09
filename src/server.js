module.exports = function(port) {

	var express = require('express'),
		app = express();

	port = typeof port === 'undefined' || !port ? 8000 : port;

	app.use('/html', express.static('./src/html'));
	app.use('/albums', require('./api/albums.js')());

	app.get('/', function(req, res, next) {
		res.redirect('/html/');
	});

	var server = app.listen(port, function() {
		console.log('Listening on port ' + port + '!');
	});
};