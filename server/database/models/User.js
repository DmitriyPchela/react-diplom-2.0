// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure
const User = new Schema(
	{
		name: String,
		surname: String,
		login: String,
		email: String,
		phone: String,
		password: String,
		token: String
	},
	{ timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("User", User);