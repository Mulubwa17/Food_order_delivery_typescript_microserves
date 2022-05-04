import request from "supertest";
import { expect } from "chai";
import app from "../../adminApp";



describe("server checks", function () {
  it("admin server instantiated without error", function (done) {
    request(app).get("/").expect(200, done);
  });

});