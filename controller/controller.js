const express = require("express");
const infoRouter = express.Router();
const service = require("../service/service");


infoRouter.get("/all", async (_req, res) => {
    const allInfo = await service.getAllInfo();

    res.status(200).json(allInfo);
});

module.exports = infoRouter;