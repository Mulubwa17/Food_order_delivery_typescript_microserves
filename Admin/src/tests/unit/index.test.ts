import request from "supertest";
import { expect } from "chai";
import app from "../../adminApp";
import app1 from "../../vendorApp";
import app2 from "../../userApp";


describe("server checks", function () {
  it("admin server instantiated without error", function (done) {
    request(app).get("/").expect(200, done);
  });
    it("vendor server instantiated without error", function (done) {
    request(app1).get("/").expect(200, done);
  });
    it("user server instantiated without error", function (done) {
    request(app2).get("/").expect(200, done);
  });
});