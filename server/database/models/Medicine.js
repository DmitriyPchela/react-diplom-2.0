const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Medicine = new Schema(
	{
		time: String,
		name: String,
		recommend: String,
		userID: String
	}, {
		timestamps: true
	}
);

module.exports = mongoose.model("Medicine", Medicine);