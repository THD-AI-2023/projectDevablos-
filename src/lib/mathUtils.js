exports.calculateGCD = (a, b) => {
    if (b === 0) {
        return a;
    }
    return exports.calculateGCD(b, a % b);
}