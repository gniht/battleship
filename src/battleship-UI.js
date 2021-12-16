import Player from "./Player.js";

let playerName = prompt("What shall we call you, admiral?");
const playerAttackResults = document.querySelector(".player-attack-results");
const enemyAttackResults = document.querySelector(".enemy-attack-results");

const startBtn = document.querySelector(".start-btn");
const difficultyBtn = document.querySelector(".difficulty-btn");
const difficulty = document.querySelector(".difficulty");
let isEasy = true;
const enemyGrid = document.querySelector(".enemy-grid");
const playerGrid = document.querySelector(".player-grid");

difficultyBtn.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  if(isEasy){
    isEasy = false;
    difficulty.innerText = "Challenging";
  }else{
    isEasy = true;
    difficulty.innerText = "Easy";
  }  
});

let enemy; 
let player; 

startBtn.addEventListener("click", (e) =>{
  e.preventDefault();
  e.stopPropagation();

  enemy = new Player();
  player = new Player( playerName );

  enemy.placeAllShips();
  player.placeAllShips();

  updateUIGrid(enemy, enemyGrid);
  updateUIGrid(player, playerGrid);
});

enemyGrid.addEventListener("click", e => {  
  e.preventDefault();
  e.stopPropagation();   
  let coordinates = e.target.id.split(",");
  
  if(e.target.innerHTML === "X"){
    playerAttackResults.innerText = "Redundant attack, choose a new target.";
    return;
  }  
  const playerAttack = player.makeAttack(enemy, coordinates);
  if(playerAttack){
    playerAttackResults.innerText = `Admiral ${playerName}, we landed a hit on an enemy vessel!`;
  }else{
    playerAttackResults.innerText = `Admiral ${playerName}, our attack missed.`;    
  }  
  let enemyAttack;
  // use strategic volley if difficulty is 'challenging'
  if(isEasy){
    enemyAttack = enemy.makeAttack(player, enemy.randomAttackVector());
  }else{
    const stratVolleyVector = enemy.strategicVolley(player);
    if(stratVolleyVector){
      enemyAttack = enemy.makeAttack(player, stratVolleyVector);
    }else{
      enemyAttack = enemy.makeAttack(player, enemy.randomAttackVector());
    }
    
  } 
  if(enemyAttack){
    enemyAttackResults.innerText = `${enemy.name} inflicted a hit on one of our ships!`;
  }else{
    enemyAttackResults.innerText = `${enemy.name} fired on us but missed.`;    
  }  
  updateUIGrid(enemy, enemyGrid);
  updateUIGrid(player, playerGrid);
});

function updateUIGrid( playerInfo, gridToPopulate ) {
  // r indicates row, c indicates column.
  // comma-separated coordinates are encoded as the element ID.

  // clear current grid before generating updated one.
  while(gridToPopulate.firstChild){
    gridToPopulate.removeChild(gridToPopulate.firstChild);
  }
  
  for( let r = 0; r < 10; r++ ){
    for( let c = 0; c < 10; c++ ){      
      const cell = document.createElement("div");      
      cell.classList.add("cell");
      cell.id = `${r},${c}`;      
      let cellData = playerInfo.gameboard.gameboard[r][c]; 

      if( cellData === true && playerInfo.name !== "HAL 9000" ){
        cell.classList.add("ship");
        cell.innerHTML = "O";
      }else if( cellData === false ){
        cell.classList.add("hit");
        cell.innerHTML = "X";
      }else if( cellData === -1){
        cell.classList.add("miss");
        cell.innerHTML = "X";
      }    
      gridToPopulate.appendChild(cell);
    }    
  }
}
