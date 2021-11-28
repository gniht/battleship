const Ship = require("./Ship");

class Gameboard {
  constructor() {
    this.gameboard = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
    this.ships = {
      carrier: new Ship(5),
      battleship: new Ship(4),
      cruiser: new Ship(3),
      submarine: new Ship(3),
      patrol_boat: new Ship(2)
    }      
  }

  receiveAttack(row, column) {
    const target = this.gameboard[row][column];

    if(target === false){
      //do something to prevent firing at spots that have already been hit?      
      return -1;
    }

    if(target){
      this.gameboard[row][column] = false;
      for(let ship in this.ships){        
        if(this.ships[ship].hullIntegrity.includes([row, column])){
          console.log(`Direct hit on enemy ${ship}!`);
        }
      }
    }

    return  target !== 0;    
  }
  placeShip(row, column, shipName, orientation = 'horizontal') {
    const ship = this.ships[shipName];    
    const size = this.ships[shipName].size;
    if (orientation == 'horizontal') {
      for(let i = 0; i < size; i++) {
        this.gameboard[row][column+i] = ship.hullIntegrity[i];
        ship.hullIntegrity[i] = [row, column+i];
      }
    }else{
      for(let i = 0; i < size; i++) {
        this.gameboard[row+i][column] = ship.hullIntegrity[i];
        ship.hullIntegrity[i] = [row+i, column];
      }
    }   
  }  
}

module.exports = Gameboard;