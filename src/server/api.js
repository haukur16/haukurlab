const express = require("express");
const router = express.Router();
const greeting = require("../logic/greeting");

console.log("hi");
router.get("/greeting/:name", function (req, res) {
    res.status(200);
    res.send({
        greeting: greeting(req.params.name)
    });
});

module.exports = router;
