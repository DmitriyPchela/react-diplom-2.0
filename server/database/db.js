const mongoose = require("mongoose");

const fs = require('fs');
const path = require('path');

const env = process.env.NODE_ENV || 'development';
const config = require('./configs/config')[env];
const MODELS_DIR = path.join(__dirname, 'models');
const db = {};

// connects our back end code with the database
mongoose.connect(
	config.url,
	{ useNewUrlParser: true }
);

fs
	.readdirSync(MODELS_DIR)
	.filter(file => {
		return (file.indexOf('.') !== 0) && (file.slice(-3) === '.js');
	})
	.forEach(file => {
		const model = require(path.join(MODELS_DIR, file));
		db[model.modelName] = model;
	});

// require('mongoose').model('Song').schema

db.database = mongoose.connection;

db.database.once("open", () => { console.log("connected to the database"); });

// checks if connection with the database is successful
db.database.on("error", console.error.bind(console, "MongoDB connection error:"));

module.exports = db;