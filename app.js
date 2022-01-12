const express = require("express");
const router = require("./routes/api.js");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.use(router);

app.listen(3000, () => console.log("Server running at http://localhost/3000"));
