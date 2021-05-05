"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app"));
require("dotenv/config");
var PORT = parseInt(process.env.PORT, 10) || 3333;
app_1.default.listen(PORT, function () {
    console.log("Running in " + process.env.NODE_ENV + " mode Listening for connections on port " + PORT);
});
