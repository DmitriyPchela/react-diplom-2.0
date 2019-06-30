const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HealthStatus = new Schema(
	{
		date: String,
		time: String,
		pressureUp: Number,
		pressureDown: Number,
		pulse: Number,
		healthy: String,
		comment: String,
		userID: String
	}, {
		timestamps: true
	}
);

module.exports = mongoose.model("HealthStatus", HealthStatus);