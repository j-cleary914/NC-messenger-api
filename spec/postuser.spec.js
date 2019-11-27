process.env.NODE_ENV = "test";
const app = require("../app");
const chai = require("chai");
const { expect } = require("chai");
const request = require("supertest");
const connection = require("../db/connection");

describe("/api", () => {
  beforeEach(() => {
    return connection.seed.run();
  });
  after(() => connection.destroy());

  describe("/user", () => {
    it("POST 201: posts a new user", () => {
      return request(app)
        .post("/api/users")
        .send({ username: "allybowie" })
        .expect(201)
        .then(({ body: { user } }) => {
          expect(user).to.be.an("object");
        });
    });
    it("POST 201: posts a new user and returns a response with correct username and url when a username is passed on its own", () => {
      return request(app)
        .post("/api/users")
        .send({ username: "chrisjericho" })
        .expect(201)
        .then(({ body: { user } }) => {
          expect(user).to.eql({
            username: "chrisjericho",
            avatar_url:
              "https://www.synbio.cam.ac.uk/images/avatar-generic.jpg/image",
          });
        });
    });
    it("POST 201: posts a new user and returns a response with correct username and url when a username and specific url are passed", () => {
      return request(app)
        .post("/api/users")
        .send({
          username: "kennyomega",
          avatar_url:
            "https://cdn3.iconfinder.com/data/icons/generic-avatars/128/avatar_portrait_man_male_hipster_beard_1-512.png",
        })
        .expect(201)
        .then(({ body: { user } }) => {
          expect(user).to.eql({
            username: "kennyomega",
            avatar_url:
              "https://cdn3.iconfinder.com/data/icons/generic-avatars/128/avatar_portrait_man_male_hipster_beard_1-512.png",
          });
        });
    });
    it("POST 400: returns a 400 error when passed no username", () => {
      return request(app)
        .post("/api/users")
        .send({})
        .expect(400)
        .then(({ body: { msg } }) => {
          expect(msg).to.equal(
            "Not enough information. Please input 'username'"
          );
        });
    });
    it("POST 400: returns a 400 error when passed no username but is passed an avatar_url", () => {
      return request(app)
        .post("/api/users")
        .send({
          avatar_url:
            "https://cdn3.iconfinder.com/data/icons/generic-avatars/128/avatar_portrait_man_male_hipster_beard_1-512.png",
        })
        .expect(400)
        .then(({ body: { msg } }) => {
          expect(msg).to.equal(
            "Not enough information. Please input 'username'"
          );
        });
    });
    it("POST 400: returns a 400 error when passed no username but is passed an avatar_url", () => {
      return request(app)
        .post("/api/users")
        .send({
          name: "Kenny Omega",
        })
        .expect(400)
        .then(({ body: { msg } }) => {
          expect(msg).to.equal(
            "Not enough information. Please input 'username'"
          );
        });
    });
  });
});
