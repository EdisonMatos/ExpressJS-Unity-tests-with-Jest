const request = require("supertest");
const app = require("./server");

describe("Get route test", () => {
  it("Should have message property and return a status code 200", async () => {
    const res = await request(app).get("/");

    expect(res.body).toHaveProperty("message");
    expect(res.statusCode).toEqual(200);
  });
});
