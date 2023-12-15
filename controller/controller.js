const express = require("express");
const infoRouter = express.Router();
const service = require("../service/service");


infoRouter.get("/", async (_req, res) => {
    const allInfo = await servie.getAllInfo();

    res.status(200).json(allInfo);
});

module.exports = infoRouter;