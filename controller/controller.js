const express = require("express");
const infoRouter = express.Router();
const service = require("../service/service");

infoRouter.get("/", async (_req, res) => {
    const response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Headers" : "Content-Type",
            "Access-Control-Allow-Origin": "https://breakingbadcars.cyclic.app/",
            "Access-Control-Allow-Methods": "GET"
        },
        body: await service.getAllInfo(),
    };

    console.log(response.headers)

    res.status(response.statusCode).json(response.body);
});

module.exports = infoRouter;