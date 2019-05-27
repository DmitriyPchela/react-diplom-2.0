const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const errorsMiddleware = require("./middleware/errorsMiddleware");

const {
    NODE_ENV
} = process.env;

const production = NODE_ENV === 'production';
const API_PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());

const router = express.Router();

const api = require('./api');

// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

if (!production) {
    // (optional) only made for logging
    app.use(logger("dev"));
}

api(app);

// append /api for our http requests
app.use("/api", router);

app.use(errorsMiddleware);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));