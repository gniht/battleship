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

    if(target == -1){
      //do something to prevent firing at spots that have already been hit?      
      return -1;
    }
    return  target !== 0;    
  }
  placeShip(row, column, size, orientation = 'horizontal') {
    // const ship = new Ship(size);
    this.gameboard[4][4] = true;    
  }
  
}

module.exports = Gameboard;