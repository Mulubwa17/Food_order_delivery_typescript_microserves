"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const adminApp_1 = __importDefault(require("../../adminApp"));
describe("server checks", function () {
    it("admin server instantiated without error", function (done) {
        (0, supertest_1.default)(adminApp_1.default).get("/").expect(200, done);
    });
});
