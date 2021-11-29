const Gameboard = require("./Gameboard.js");

class Player {
  constructor( name = "HAL 9000") {
    this.name = name;
    this.gameboard = new Gameboard();
  }

  placeAllShips(){
    return true;    
  }

  makeMove() {    
  }
}

module.exports = Player;