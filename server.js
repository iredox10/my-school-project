const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const routes = require('./routes/routes')

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(routes)
app.set('view engine', 'ejs');

// connect to mongoose
mongoose
	.connect('mongodb://localhost/school-project')
	.then((result) => app.listen(3000))
	.catch((err) => console.log(err));
