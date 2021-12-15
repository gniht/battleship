import Gameboard from "./Gameboard.js";

class Player {
  constructor( name = "HAL 9000") {
    this.name = name;
    this.gameboard = new Gameboard();
    this.attempts = [];
    this.lastAttack = false;
    this.strategicOptions = [];
  }

  placeAllShips(){
    let fleetDirection = Math.floor(Math.random()*2) ? 'vertical' : 'horizontal';
    
    let row = 0;
    let column = 0;
    let count = Math.floor(Math.random()*2);

    for(let ship in this.gameboard.ships){
      const currentShip = this.gameboard.ships[ship];

      if(fleetDirection === 'vertical'){
        row = Math.floor(Math.random()*(11-currentShip.size));        
        column = count;        
      }else{
        row = count;
        column = Math.floor(Math.random()*(11-currentShip.size));               
      }
      count++;
      count += Math.floor(Math.random()*2);

      this.gameboard.placeShip(row, column, ship, fleetDirection); 
    }
    return true;    
  }
  makeAttack(targetPlayer, targetLocation){    
    this.lastAttack = targetPlayer.gameboard.receiveAttack(targetLocation[0], targetLocation[1]);           
    return this.lastAttack;        
  }

  strategicVolley(targetPlayer){
    // use this for improved AI targetting
    // if previously identified options remain, exhaust them
    if(this.strategicOptions.length > 0){
      return this.strategicOptions.pop();
     // if a hit succeeds, catalog strategic options 
    }else if(this.lastAttack === true){ 
      let lastAttackVector = this.attempts[this.attempts.length -1];
      const up = lastAttackVector[0] > 0 ? [lastAttackVector[0] - 1, lastAttackVector[1]] : false;
      // todo: once working, refactor to remove redundant code
      if(up && (targetPlayer.gameboard.gameboard[up[0]][up[1]] !== -1 ) && 
        (targetPlayer.gameboard.gameboard[up[0]][up[1]] !== false)){
        this.strategicOptions.push(up);
      }
      const down = lastAttackVector[0] < 9 ? [lastAttackVector[0] + 1, lastAttackVector[1]] : false;
      if(down && (targetPlayer.gameboard.gameboard[down[0]][down[1]] !== -1 ) && 
        (targetPlayer.gameboard.gameboard[down[0]][down[1]] !== false)){
        this.strategicOptions.push(down);
      }
      const left = lastAttackVector[0] > 0 ? [lastAttackVector[0] - 1, lastAttackVector[1]] : false;
      if(left && (targetPlayer.gameboard.gameboard[left[0]][left[1]] !== -1 ) && 
        (targetPlayer.gameboard.gameboard[left[0]][left[1]] !== false)){
        this.strategicOptions.push(left);
      }      
      const right = lastAttackVector[1] < 9 ? [lastAttackVector[0], lastAttackVector[1] + 1] : false;
      if(right && (targetPlayer.gameboard.gameboard[right[0]][right[1]] !== -1 ) && 
        (targetPlayer.gameboard.gameboard[right[0]][right[1]] !== false)){
        this.strategicOptions.push(right);
      } 
    }else{
      return false;
    }    
  }
  
  randomAttackVector(){    
    let randRow = Math.floor(Math.random()*10);
    let randCol = Math.floor(Math.random()*10);
    // reroll if random vector was previously attempted
    while(this.attempts.some( coords => {  
      return (coords[0] == randRow) && (coords[1] == randCol);
    }
    )){      
      randRow = Math.floor(Math.random()*10);
      randCol = Math.floor(Math.random()*10);
    }  
    this.attempts.push([randRow, randCol]);
    return [randRow, randCol];    
  }
}

export default Player;
