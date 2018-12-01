const fs = require("fs");
const {assert} = require("chai");

const solution = require("./solution-2");

describe("day 1 - solution 2", () => {
    it("test case 1", () => {
        const input = "1212";
        assert.strictEqual(solution(input), 6)
    });

    it("test case 2", () => {
        const input = "1221";
        assert.strictEqual(solution(input), 0)
    });

    it("test case 3", () => {
        const input = "123425";
        assert.strictEqual(solution(input), 4)
    });

    it("test case 4", () => {
        const input = "123123";
        assert.strictEqual(solution(input), 12)
    });

    it("test case 5", () => {
        const input = "12131415";
        assert.strictEqual(solution(input), 4)
    });


    it("should pass with input", () => {
        const input = fs.readFileSync("./day-01/input-01.txt", "utf-8").trim();

        assert.equal(solution(input), 1194)
    })
});
