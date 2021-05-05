"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
router.all("*", function (req, res, next) {
    res.status(404).json({ success: false, data: [], message: "Page not found!" });
});
exports.default = router;
