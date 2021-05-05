"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
router.get("/", function (req, res, next) {
    res.status(200).json({ success: true, data: [], message: "Successfully authenticated!" });
});
exports.default = router;
