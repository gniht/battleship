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
    const ship = new Ship(size);
    if (orientation == 'horizontal') {
      for(let i = 0; i < size; i++) {
        this.gameboard[row][column+i] = ship.hullIntegrity[0];
      }
    }else{
      for(let i = 0; i < size; i++) {
        this.gameboard[row+i][column] = ship.hullIntegrity[0];
      }
    }
    console.log(this.gameboard);   
  }
  
}

module.exports = Gameboard;