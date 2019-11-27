process.env.NODE_ENV = "test";

const { expect } = require("chai");
const app = require("../app");
const request = require("supertest");
const connection = require("../db/connection");

describe("/", () => {
  // Setup for tests
  beforeEach(() => {
    return connection.seed.run();
  });
  after(() => {
    return connection.destroy();
  });
  describe("/api/messages", () => {
    it("POST:201, it returns an object on the key of message", () => {
      return request(app)
        .post("/api/messages")
        .send({ sender: "icellusedkars", message: "A new message" })
        .expect(201)
        .then(({ body: { message } }) => {
          expect(message[0]).to.be.an("object");
        });
    });
    it("POST:201, it returns an object with keys relevant to message", () => {
      return request(app)
        .post("/api/messages")
        .send({ sender: "icellusedkars", message: "A new message" })
        .expect(201)
        .then(({ body: { message } }) => {
          expect(message[0]).to.have.keys([
            "message_id",
            "message",
            "sender",
            "created_at",
          ]);
        });
    });
  });
});
