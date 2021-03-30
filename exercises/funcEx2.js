"use strict";
(function () {
  const player = {
    position: 0,
    isPositiveDirection: true,

    moveForward(distance) {
      this.isPositiveDirection
        ? (this.position += distance)
        : (this.position -= distance);
    },
    moveBackward(distance) {
      this.isPositiveDirection
        ? (this.position -= distance)
        : (this.position += distance);
    },
    turnAround() {
      !this.isPositiveDirection;
    },
    printLocation() {
      console.log(`The players current position is: ${this.position}`);
    },
  };
  player.moveForward(5);
  player.moveForward(10);
  player.turnAround();
  player.moveBackward(6);
  player.printLocation();
})();

//extended challenge
(function () {
  const character = {
    positionNorth: 0,
    positionEast: 0,
    cardinalDirection: "N",

    moveForward(distance) {
      if (this.cardinalDirection === "N") {
        this.positionNorth += distance;
      } else if (this.cardinalDirection === "E") {
        this.positionEast += distance;
      } else if (this.cardinalDirection === "S") {
        this.positionNorth -= distance;
      } else {
        this.positionEast -= distance;
      }
    },
    moveBackward(distance) {
      if (this.cardinalDirection === "N") {
        this.positionNorth += distance;
      } else if (this.cardinalDirection === "E") {
        this.positionEast += distance;
      } else if (this.cardinalDirection === "S") {
        this.positionNorth -= distance;
      } else {
        this.positionEast -= distance;
      }
    },
  };
})();
