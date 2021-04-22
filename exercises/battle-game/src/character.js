class Character {

    constructor(options) {
        this.name = options.name;
        this.startingHealth = this.health = options.health;
        this.minAttackDamage = options.minAttackDamage;
        this.maxAttackDamage = options.minAttackDamage;
        this.wins = 0;
        this.generateRandomIntegerBetween = generateRandomIntegerBetween;
    }

    receiveAttackDamage(amount) {
        this.health -= amount;
        if (this.health < 0) {
            this.health = 0;
        }
    }

    generateAttackDamage() {
        return this.generateRandomIntegerBetween(this.minAttackDamage, this.maxAttackDamage);
    }

    isDead() {
        return this.health < 0;
    }

    restoreHealth() {
        this.health = startingHealth;
    }

    getStatusReport() {
        return this.name + " has " + this.health + " health and " + this.wins + " wins."
    }

}