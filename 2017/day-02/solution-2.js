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
        for (let i = 0; i < cells.length; i++) {
            const cell1 = cells[i];
            for (let j = 0; j < cells.length; j++) {
                if (i !== j) {
                    const cell2 = cells[j];
                    if (cell1 % cell2 === 0) {
                        sum += (cell1 / cell2);
                        return;
                    }
                }
            }
        }
    });
    rl.on('close', () => {
        rl.close();
        cb(sum);
    });
};
