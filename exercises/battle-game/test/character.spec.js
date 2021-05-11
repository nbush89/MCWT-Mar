// These test cases are all unfinished. We will finish them together.
describe("Character", function() {

    it("initializes with given values", function() {
        let player = new Character({
            name: "My Name",
            health: 40,
            minAttackDamage: 1,
            maxAttackDamage: 3
        });
        expect(player.name).toBe("My Name");
    });

    it("isDead when health at 0", function() {
        // Arrange
        let player = new Character({
            health: 0
        });
        // Act & Assert
        expect(player.isDead()).toBe(true)
    });

    it("isDead when health below 0", function() {
        // You try this one
        let player = new Character({
            health: -3
        })
        expect(player.isDead()).toBe(true);
    });

    it("not isDead when health above 0", function() {
        let player = new Character({
            health: 5
        })
        expect(player.isDead()).toBe(false);
    });

    it("receiveAttackDamage removes health", function() {
        // You try this one
        let player = new Character({
            health: 5
        });
        player.receiveAttackDamage(2);
        expect(player.health).toBe(3)
    });

    it("receiveAttackDamage does not take health below 0", function() {
        // You try this one
        let player = new Character({
            health: 5
        });
        player.receiveAttackDamage(6);
        expect(player.health).toBe(0)
    });

    it("restoreHealth returns health to original value", function() {
        // Then you try this one
        let player = new Character({
            health: 5,
        });
        player.receiveAttackDamage(6);
        player.restoreHealth();
        expect(player.health).toBe(5);
    });

    it("generateAttackDamage calls generateRandomIntegerBetween with min and max damage", function() {
        // Arrange
        var player = new Character({
            minAttackDamage: 5,
            maxAttackDamage: 8
        });
        let spy = spyOn(player, "generateRandomIntegerBetween").and.returnValue(7);

        // Act
        var damage = player.generateAttackDamage();

        // Assert
        expect(damage).toBe(7);
        expect(spy).toHaveBeenCalledWith(5, 8);
    });

});