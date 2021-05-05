"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("../../src/app"));
var supertest_1 = __importDefault(require("supertest"));
describe("Testing the Auth routes", function () {
    it("GET request to /auth should return 200 OK", function (done) {
        supertest_1.default(app_1.default).get("/auth").expect(200).end(function (err, res) {
            if (!err)
                console.log(res.body);
            done(err);
        });
    });
});
