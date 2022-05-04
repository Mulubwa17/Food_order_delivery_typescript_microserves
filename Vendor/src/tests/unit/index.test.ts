import request from "supertest";
import { expect } from "chai";

import app1 from "../../vendorApp";



describe("server checks", function () {
    it("vendor server instantiated without error", function (done) {
    request(app1).get("/").expect(200, done);
  });
});