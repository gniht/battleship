const Gameboard = require("./Gameboard.js");

class Player {
  constructor( name = "HAL 9000") {
    this.name = name;
    this.gameboard = new Gameboard();
  }

  placeAllShips(){    
    for(let ship in this.gameboard.ships){      
      //this.gameboard.placeShip(row, column, ship.name, ship.orientation); 
    }
    return true;    
  }

}

module.exports = Player;