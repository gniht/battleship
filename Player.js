import Gameboard from "./Gameboard.js";

class Player {
  constructor( name = "HAL 9000") {
    this.name = name;
    this.gameboard = new Gameboard();
    this.attempts = [];
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
      count += Math.floor(Math.random()*2);

      this.gameboard.placeShip(row, column, ship, fleetDirection); 
    }
    return true;    
  }
  makeAttack(targetPlayer, targetLocation){
    return targetPlayer.gameboard.receiveAttack(targetLocation[0], targetLocation[1]);        
  }

  randomAttackVector(){    
    let randRow = Math.floor(Math.random()*10);
    let randCol = Math.floor(Math.random()*10);
    while(this.attempts.some( coords => {
      return (coords[0] == randRow) && (coords[1] == randCol);
    }

    )){
      console.log("duplicate!")
      randRow = Math.floor(Math.random()*10);
      randCol = Math.floor(Math.random()*10);
    }
    
      
             
       
    this.attempts.push([randRow, randCol]);
    return [randRow, randCol];    
  }
}

export default Player;
