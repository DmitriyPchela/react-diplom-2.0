const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure
const User = new Schema(
	{
		name: {
			type: String
		},
		surname: {
			type: String
		},
		login: {
			type: String,
			required: true,
			unique: true
		},
		email: {
			type: String,
			required: true,
			unique: true
		},
		phone: {
			type: String,
			required: true
		},
		password: {
			type: String,
			required: true
		},
		isAdmin: {
			type: Boolean
		},
		token: {
			type: String
		}
	},
	{ timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("User", User);