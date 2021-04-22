class Game {

    constructor(player, opponent) {
        this.player = player;
        this.opponent = opponent;
    }

    attack() {
        this.opponent.receiveAttackDamage(this.player.generateAttackDamage());
        this.player.receiveAttackDamage(this.opponent.generateAttackDamage());

        if (this.opponent.isDead()) {
            this.player.wins++;
            this.opponent.restoreHealth();
        }
    }

    isPlayerWin() {
        return this.player.wins >= 3;
    }

    isOpponentWin() {
        return this.player.isDead();
    }

    isGameOver() {
        return this.isPlayerWin() || this.isOpponentWin();
    }

    logStatusReport() {
        console.log(this.player.getStatusReport());
        console.log(this.opponent.getStatusReport());
        if (this.isPlayerWin()) {
            console.log(this.player.name + " wins!");
        } else if (this.isOpponentWin()) {
            console.log(this.opponent.name + " wins!");
        }
    }

}

function runGame() {
    var userName = prompt("Hello. What's your name?");
    var player = new Character({
        name: userName,
        health: 40,
        minAttackDamage: 2,
        maxAttackDamage: 6
    });
    var opponent = new Character({
        name: "Grant",
        health: 10,
        minAttackDamage: 3,
        maxAttackDamage: 7
    });
    var game = new Game(player, opponent);
    game.logStatusReport();

    while (!game.isGameOver()) {
        var userAction = prompt("Attack or Quit?") || "Quit";
        if (userAction.toUpperCase().startsWith("A")) {
            console.log("Attack.");
            game.attack();
        } else if (userAction.toUpperCase().startsWith("Q")) {
            console.log("Quit.");
            break;
        } else {
            console.log("Invalid option. Type Attack or Quit.");
            continue;
        }
        game.logStatusReport();
    }
    console.log("Thanks for playing.");
}