process.env.NODE_ENV = "test";

const request = require("supertest");
const chai = require("chai");
const { expect } = chai;
const chaiSorted = require("chai-sorted");

const app = require("../app");
const connection = require("../db/connection");

chai.use(chaiSorted);

describe("/users", () => {
  describe("/users/:username", () => {
    it("PATCH 200 updates avatar_url of user", () => {
      return request(app)
        .patch("/api/users/lurker")
        .set("Content-Type", "application/json")
        .send({
          avatar_url:
            "https://www.healthytherapies.com/wp-content/uploads/2016/06/Lime3.jpg",
        })
        .expect(200);
    });
  });
});
