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

  describe.only("PATCH 201: returns an object", () => {
    it("", () => {});
  });
});
