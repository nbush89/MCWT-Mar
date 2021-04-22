function generateRandomIntegerBetween(min, max) {
    var range = max - min + 1;
    return Math.floor(Math.random() * range) + min;
}