"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var supertest_1 = __importDefault(require("supertest"));
var app_1 = __importDefault(require("../src/app"));
describe("Testing base URL", function () {
    it("GET Request to / must return 404 not found", function (done) {
        supertest_1.default(app_1.default).get("/").expect(404).end(function (err, res) {
            if (!err)
                console.log(res.body);
            done(err);
        });
    });
});
