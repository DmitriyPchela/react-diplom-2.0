// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure
const HealthStatus = new Schema(
    {
        date: String,
        time: String,
        pressureUp: Number,
        pressureDown: Number,
        pulse: Number,
        healthy: String,
        comment: String
    },
    { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("HealthStatus", HealthStatus);