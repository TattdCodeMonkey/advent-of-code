const {assert} = require("chai");
const checksum = require("./solution-2");

describe("day 02 - solution 2", () => {
    it("test case 1", done => {
        checksum("./day-02/test-input-02-2.txt", sum => {
            assert.equal(sum, 9);
            done();
        });
    });

    it("problem", done => {
        checksum("./day-02/input-02.txt", sum => {
            assert.equal(sum, 333);
            done();
        });
    });
});
