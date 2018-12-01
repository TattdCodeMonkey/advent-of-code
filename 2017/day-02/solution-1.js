const fs = require("fs");
const readline = require("readline");

function parse(line) {
    const stringCells = line.split(/\s+/);
    return stringCells.map(num => parseInt(num, 10));
}

module.exports = function checksum(inputFile, cb) {
    const rl = readline.createInterface({
        input: fs.createReadStream(inputFile),
        crlfDelay: Infinity
    });
    let sum = 0;
    rl.on('line', line => {
        const cells = parse(line);
        const min = Math.min.apply(null, cells);
        const max = Math.max.apply(null, cells);

        sum += (max - min);
    });
    rl.on('close', () => {
        rl.close();
        cb(sum);
    });
};
