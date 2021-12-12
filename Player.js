import Gameboard from "./Gameboard.js";

class Player {
  constructor( name = "HAL 9000") {
    this.name = name;
    this.gameboard = new Gameboard();
  }

  placeAllShips(){
    let fleetDirection = Math.floor(Math.random()*2) ? 'vertical' : 'horizontal';
    console.log(fleetDirection);
    let row = 0;
    let column = 0;
    let count = 0;       
    for(let ship in this.gameboard.ships){
      const currentShip = this.gameboard.ships[ship];

      if(fleetDirection = 'vertical'){
        row = Math.floor(Math.random()*(9-currentShip.size));
        column = count;        
      }else{
        row = count;
        column = Math.floor(Math.random()*(9-currentShip.size));       
      }
      count++;
      count += (Math.floor(Math.random()*2));

      this.gameboard.placeShip(row, column, ship, fleetDirection); 
    }
    return true;    
  }
  makeAttack(targetLocation){
    
    return true;    
  }
}

export default Player;
