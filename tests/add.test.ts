import {expect} from "chai";
import {add} from "../src/add";

describe("math.ts tests", () => {
  describe("add function", () => {
    it("should add two numbers correctly", () => {
      const result = add(2, 3);
      expect(result).to.equal(5);
    });
  });
});
