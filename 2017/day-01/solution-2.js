function getStepIndex(i, step, length) {
    let stepIndex = i + step;
    if (stepIndex >= length) {
        stepIndex -= length;
    }
    return stepIndex;
}

function sum_captcha(input) {
    let result = 0;
    const inputLength = input.length;
    const step = (inputLength/2);
    for (let i = 0; i < input.length; i++) {
        const stepIndex = getStepIndex(i, step, inputLength);
        if (input[i] === input[stepIndex]) {
            result += parseInt(input[i]);
        }
    }
    return result;
}

module.exports = sum_captcha;
