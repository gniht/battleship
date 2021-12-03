const Gameboard = require("./Gameboard.js");

class Player {
  constructor( name = "HAL 9000") {
    this.name = name;
    this.gameboard = new Gameboard();
  }

  placeAllShips(){
    let fleetDirection = Math.floor(Math.random()*2) ? 'vertical' : 'horizontal';
    let row = 0;
    let column = 0;
    let count = 0;   
    for(let ship in this.gameboard.ships){
      const currentShip = this.gameboard.ships[ship];

      if(fleetDirection = 'vertical'){
        row = Math.floor(Math.random()*(currentShip.size));
        column = Math.floor(Math.random()*2*count);
      }else{
        row = Math.floor(Math.random()*2*count);
        column = Math.floor(Math.random()*(currentShip.size));       
      }     
      this.gameboard.placeShip(row, column, ship, fleetDirection); 
    }
    return true;    
  }
  makeAttack(){
    return true;    
  }
}

module.exports = Player;