const express = require("express");
require("dotenv").config();

const infoController = require("./controller/controller");
const app = express();

const port = process.env.PORT || 3000;

app.use("/", infoController)

app.listen(port, () => console.log( `App listening at port ${port}`));