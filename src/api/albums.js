module.exports = function() {

	var express = require('express'),
		fs = require('fs'),
		bodyParser = require('body-parser'),
		path = require('path'),
		v = require('validator'),
		router = express.Router();

	router.use(bodyParser.json()); // for parsing application/json

	router.use(function timeLog(req, res, next) {
		next();
	});

	var albums = {},
		length = 0;

	fs.readFile(path.join(__dirname, '../resources/data/400-id.js'),
		function(err, data) {
			if (err) throw err;

			albums = JSON.parse(data.toString());
			length = Object.keys(albums).length;

			router.get('/', function(req, res) {
				res.send('Albums home page');
			});

			router.get('/all', function(req, res) {
				res.send(albums);
			});

			router.get('/get/:id', function(req, res) {
				var id = req.params.id;

				if (typeof id === 'undefined' || typeof albums[id] === 'undefined') {
					res.status(404).end();

				} else {
					res.send(albums[id]);
				}
			});

			function validate(req) {

				if (v.isEmpty(req.body.title)) {
					throw Error('Title is required');
				}

				if (v.isEmpty(req.body.artist)) {
					throw Error('Country is required');
				}

				if (v.isEmpty(req.body.price)) {
					throw Error('Price is required');
				}

				if (!v.isDecimal(req.body.price)) {
					throw Error('Price must be decimal');
				}
			}

			router.post('/add', function(req, res) {
				save(undefined, req, res);
			});
			router.post('/update/:id', function(req, res) {
				save(req.params.id, req, res);
			});

			function save(id, req, res) {

				try {

					validate(req);

				} catch (e) {
					res.status(400).send(e.message).end();
					return;
				}

				id = v.isNumeric(id + '') ? id : length;

				// console.log('looking for ' + id);
				var _album = albums[id];
				var _new = false;

				if (typeof _album === 'undefined') {
					_new = true;
					_album = {
						id: id
					};
				}

				_album.title = req.body.title;
				_album.artist = req.body.artist;
				_album.country = req.body.country;
				_album.company = req.body.company;
				_album.price = req.body.price;
				_album.year = req.body.year;
				_album.logoUrl = req.body.logoUrl || '';

				// adding album to collection
				albums[id] = _album;

				if (_new) {
					length++;
				}

				res.send(_album).end();
			}

			router.delete('/delete/:id', function(req, res) {

				var id = req.params.id;

				if (typeof id === 'undefined' || typeof albums[id] === 'undefined') {
					// album not found
					res.status(404).end();

				} else {

					// deleting album from collection
					delete albums[id];
					res.end();
				}
			});

			router.get('/count', function(req, res) {
				res.send({
					value: Object.keys(albums).length
				}).end();
			});

			router.get('/get/:id', function(req, res) {
				var id = req.params.id;

				if (typeof id === 'undefined' || typeof albums[id] === 'undefined') {
					res.status(404).end();

				} else {
					res.send(albums[id]);
				}
			});
		});

	return router;
};