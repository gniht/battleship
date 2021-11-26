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
  }
  receiveAttack(row, column) {
    const target = this.gameboard[row][column];

    if(target === false){
      //do something to prevent firing at spots that have already been hit?      
      return -1;
    }

    if(target){
      this.gameboard[row][column] = false;
    }

    return  target !== 0;    
  }
  placeShip(row, column, size, orientation = 'horizontal') {
    const ship = new Ship(size);
    if (orientation == 'horizontal') {
      for(let i = 0; i < size; i++) {
        this.gameboard[row][column+i] = ship.hullIntegrity[i];
      }
    }else{
      for(let i = 0; i < size; i++) {
        this.gameboard[row+i][column] = ship.hullIntegrity[i];
      }
    }   
  }
  
}

module.exports = Gameboard;