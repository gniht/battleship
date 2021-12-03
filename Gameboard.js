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
        
    if(target === false || target === -1){
      //do something to prevent firing at spots that have already been hit?      
      return -1;
    }

    if(target === 0){
      this.gameboard[row][column] = -1
      return false;
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
    const size = ship.size;
    
    if (orientation == 'horizontal') {

      if(column + size > 9){ //ensure enough columns to fit ship        
        return false;
      }
      for(let i = 0; i < size; i++) {        
        this.gameboard[row][column+i] = ship.hullIntegrity[i];
        ship.hullIntegrity[i] = [row, column+i];
      }
    }else{
      if(row + size > 9){ //ensure enough rows to fit ship        
        return false;
      }
      for(let i = 0; i < size; i++) {
        this.gameboard[row+i][column] = ship.hullIntegrity[i];
        ship.hullIntegrity[i] = [row+i, column];
      }
    }   
  }  
}

module.exports = Gameboard;