const sum = require("./index");

test("should add to numbers", () => {
  expect(sum(1, 2)).toBe(4);
});
