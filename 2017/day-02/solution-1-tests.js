const {assert} = require("chai");
const checksum = require("./solution-1");

describe("day 02 - solution 1", () => {
    it("test case 1", done => {
        checksum("./day-02/test-input-02.txt", sum => {
            assert.equal(sum, 18);
            done();
        });
    });

    it("problem", done => {
        checksum("./day-02/input-02.txt", sum => {
            assert.equal(sum, 54426);
            done();
        });
    });
});
