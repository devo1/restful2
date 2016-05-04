// Dependencies --BEM
var bodyParser = require('body-parser');
var express = require('express');
var mongoose = require('mongoose');

// Connect to Mongodb
mongoose.connect('mongodb://admin:admin123@ds059365.mlab.com:59365/guru99', ['products'] function(err) {
	if (err) {
		console.log('connection error', err);
	} else {
		console.log('connection successful');
	}
});

// Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Routes
app.use('/api', require('./routes/api'));

// Start server
app.listen(3000);
console.log('Server is running on port 3000');