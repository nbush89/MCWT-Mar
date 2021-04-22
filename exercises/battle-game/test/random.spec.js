// These test cases are all unfinished. We will finish them together.
describe("generateRandomIntegerBetween", function() {

    it("always picks a number between the bounds", function() {
        // Can't be 100% sure because it's random, but if we try it 1000 times,
        // it will probably hit all the possible numbers.
        for (var i = 0; i < 1000; i++) {
            var randomNum = generateRandomIntegerBetween(2, 4);
            // TODO add assertions
        }
    });

    it("always picks an integer", function() {
        for (var i = 0; i < 1000; i++) {
            var randomNum = generateRandomIntegerBetween(2, 4);
            // TODO add assertions
        }
    });

    it("picks numbers within range, inclusive of the bounds", function() {
        var picks = [null, null, 0, 0, 0];
        for (var i = 0; i < 1000; i++) {
            var randomNum = generateRandomIntegerBetween(2, 4);
            picks[randomNum]++;
        }
        // TODO add assertions
        // expect(picks[2])
        // expect(picks[3])
        // expect(picks[4])
    });

});