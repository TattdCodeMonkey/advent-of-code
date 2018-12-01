function sum_captcha(input) {
    let result = 0;
    for (let i = 0; i < input.length; i++) {
        let nextI = i + 1;
        if (nextI === input.length) {
            nextI = 0;
        }
        if (input[i] === input[nextI]) {
            result += parseInt(input[i]);
        }
    }
    return result;
}

module.exports = sum_captcha;
