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
    this.attempts.push([targetLocation[0], targetLocation[1]]);    
    if(this.lastAttack){      
      this.catalogStrategicOptions(targetPlayer);
    }                  
    return this.lastAttack;        
  }

  strategicVector(){
    // use this for improved AI targetting
    // if previously identified options remain, exhaust them
    if(this.strategicOptions.length > 0){
      return this.strategicOptions.pop();     
    }
    return false;
  }
  
  catalogStrategicOptions(targetPlayer){     
    let lastAttackVector;
    if(this.attempts.length > 0 && this.lastAttack){
      lastAttackVector = this.attempts[this.attempts.length -1];
    }else{
      return false;
    }
           
    const up = lastAttackVector[0] > 0 ? [parseInt(lastAttackVector[0], 10) - 1, parseInt(lastAttackVector[1], 10)] : false;
    // todo: once working, refactor to remove redundant code
    if(up && (targetPlayer.gameboard.gameboard[up[0]][up[1]] !== -1 ) && 
      (targetPlayer.gameboard.gameboard[up[0]][up[1]] !== false)){
      this.strategicOptions.push(up);
    }
    const down = lastAttackVector[0] < 9 ? [ parseInt(lastAttackVector[0], 10) + 1, parseInt(lastAttackVector[1], 10) ] : false;
    if(down && (targetPlayer.gameboard.gameboard[down[0]][down[1]] !== -1 ) && 
      (targetPlayer.gameboard.gameboard[down[0]][down[1]] !== false)){
      this.strategicOptions.push(down);
    }
    const left = lastAttackVector[1] > 0 ? [parseInt(lastAttackVector[0], 10), parseInt(lastAttackVector[1], 10) - 1] : false;
    if(left && (targetPlayer.gameboard.gameboard[left[0]][left[1]] !== -1 ) && 
      (targetPlayer.gameboard.gameboard[left[0]][left[1]] !== false)){
      this.strategicOptions.push(left);
    }      
    const right = lastAttackVector[1] < 9 ? [parseInt(lastAttackVector[0]), parseInt(lastAttackVector[1], 10) + 1] : false;
    if(right && (targetPlayer.gameboard.gameboard[right[0]][right[1]] !== -1 ) && 
      (targetPlayer.gameboard.gameboard[right[0]][right[1]] !== false)){
      this.strategicOptions.push(right);
    }
    return true; 
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
    return [randRow, randCol];    
  }

  getCoordinates(inputCoords){    
    let row = inputCoords[0];
    let column = inputCoords[1];

    return [row, column];
  }

  damageReport(){
    let report = ``;
    for(let ship in this.gameboard.ships){
      const currentShip = this.gameboard.ships[ship];
      if(currentShip.isSunk()){
        report += `<p>Our ${ship} has been sunk.</p>`;
      }else if(currentShip.hullIntegrity.some( hullSection => {
        return hullSection === false;
      })){
        let hits = 0;
        currentShip.hullIntegrity.forEach(hullSection => {
          if(hullSection === false){
            hits += 1;
          }
        });
        report += `<p>Our ${ship} has suffered damage.</p>`;
        report += `<p>${ship} hull is at ${parseInt(100-(hits/currentShip.hullIntegrity.length)*100)}%</p>`;
      }
    }
    return report;
  }

}

export default Player;
