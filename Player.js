import Gameboard from "./Gameboard.js";

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
        row = Math.floor(Math.random()*(9-currentShip.size));// should be 9-currenShip.size?
        column = count;        
      }else{
        row = count;
        column = Math.floor(Math.random()*(9-currentShip.size));       
      }
      count++;     
      this.gameboard.placeShip(row, column, ship, fleetDirection); 
    }
    return true;    
  }
  makeAttack(targetLocation){
    
    return true;    
  }
}

export default Player;
