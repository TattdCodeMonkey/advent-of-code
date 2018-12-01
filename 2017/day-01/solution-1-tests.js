const fs = require("fs");
const {assert} = require("chai");

const solution = require("./solution-1");

describe("day 1", () => {
    it("test case 1", () => {
        const input = "1122";
        assert.strictEqual(solution(input), 3)
    });

    it("test case 2", () => {
        const input = "1111";
        assert.strictEqual(solution(input), 4)
    });

    it("test case 3", () => {
        const input = "1234";
        assert.strictEqual(solution(input), 0)
    });

    it("test case 4", () => {
        const input = "91212129";
        assert.strictEqual(solution(input), 9)
    });

    it("should pass with input", () => {
        const input = fs.readFileSync("./day-01/input-01.txt", "utf-8").trim();

        assert.equal(solution(input), 1144)
    })
});
