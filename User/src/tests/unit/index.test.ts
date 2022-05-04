import request from "supertest";
import { expect } from "chai";

import app2 from "../../userApp";


describe("server checks", function () {
    it("user server instantiated without error", function (done) {
    request(app2).get("/").expect(200, done);
  });
});