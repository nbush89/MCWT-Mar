// These test cases are all unfinished. We will finish them together.
describe("Character", function() {

    it("initializes with given values", function() {
        var player = new Character({
            name: "My Name",
            health: 40,
            minAttackDamage: 1,
            maxAttackDamage: 3
        });
        expect(player.name).toBe("My Name");
    });

    it("isDead when health at 0", function() {
        // Arrange
        var player = new Character({
            health: 0
        });
        // Act & Assert
    });

    it("isDead when health below 0", function() {
        // You try this one
    });

    it("not isDead when health above 0", function() {
        // You try this one
    });

    it("receiveAttackDamage removes health", function() {
        // You try this one
    });

    it("receiveAttackDamage does not take health below 0", function() {
        // You try this one
    });

    it("restoreHealth returns health to original value", function() {
        // Then you try this one
    });

    xit("generateAttackDamage calls generateRandomIntegerBetween with min and max damage", function() {
        // Arrange
        var player = new Character({
            minAttackDamage: 5,
            maxAttackDamage: 8
        });
        // var spy = spyOn(player, "generateRandomIntegerBetween").and.returnValue(7);

        // Act
        var damage = player.generateAttackDamage();

        // Assert
        expect(damage).toBe(7);
        // expect(spy).toHaveBeenCalledWith(5, 8);
    });

});