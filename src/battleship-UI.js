import Player from "./Player.js";

let playerName = prompt("What shall we call you, admiral?");
if(!playerName){
  playerName = "no-name";
}
const playerAttackResults = document.querySelector(".player-attack-results");
const enemyAttackResults = document.querySelector(".enemy-attack-results");
const damageReports = document.querySelector(".damage-report");

const startBtn = document.querySelector(".start-btn");
const difficultyBtn = document.querySelector(".difficulty-btn");
const difficulty = document.querySelector(".difficulty");
let isEasy = true;
const enemyGrid = document.querySelector(".enemy-grid");
const playerGrid = document.querySelector(".player-grid");
let gameOver;


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

  gameOver = false;

  updateUIGrid(enemy, enemyGrid);
  updateUIGrid(player, playerGrid);
});

enemyGrid.addEventListener("click", e => {  
  e.preventDefault();
  e.stopPropagation();
  
  if(gameOver){
    return;
  }
  
  if(e.target.innerHTML === "X"){
    playerAttackResults.classList.remove("attack-hit");
    playerAttackResults.innerText = "Redundant attack, choose a new target.";
    enemyAttackResults.innerText = "";
    damageReports.innerHTML = player.damageReport();
    return;
  }

  const inputCoords = e.target.id.split(",");
  const coordinates = [parseInt(inputCoords[0]), parseInt(inputCoords[1])]; 
  
  let playerAttack = player.makeAttack(enemy, coordinates);
  
  if(playerAttack){
    playerAttackResults.classList.add("attack-hit");    
    playerAttackResults.innerText = `Admiral ${playerName}, we landed a hit on an enemy vessel!`;
           
  }else{
    playerAttackResults.classList.remove("attack-hit");
    playerAttackResults.innerText = `Admiral ${playerName}, our attack missed.`;    
  }  
  let enemyAttack;
  // use strategic volley if difficulty is 'challenging'
  if(isEasy){
    enemyAttack = enemy.makeAttack(player, enemy.randomAttackVector());
  }else{
    const stratVolleyVector = enemy.strategicVector();
    if(stratVolleyVector){
      enemyAttack = enemy.makeAttack(player, stratVolleyVector);
    }else{
      enemyAttack = enemy.makeAttack(player, enemy.randomAttackVector());
    }    
  } 
  if(enemyAttack){
    enemyAttackResults.classList.add("attack-hit");
    enemyAttackResults.innerText = `${enemy.name} has hit one of our ships!.`; 
  }else{
    enemyAttackResults.classList.remove("attack-hit");
    enemyAttackResults.innerText = `${enemy.name} fired on us, but missed.`;    
  }
  if(!player.gameboard.hasShipsRemaining()){
    enemyAttackResults.classList.add("attack-hit");
    enemyAttackResults.innerText = 
    `Enemy rockets are closing in on our position, Admiral ${player.name}.\n
    ${enemy.name} has already sunk the rest of our fleet... \n
    It has been an honor, Admiral.`;
    updateUIGrid(enemy, enemyGrid);
    updateUIGrid(player, playerGrid);
    gameOver = true;
    return;
  }
  if(!enemy.gameboard.hasShipsRemaining()){
    playerAttackResults.classList.add("attack-hit"); 
    playerAttackResults.innerText = `We've eliminated the last of them!\n None of ${enemy.name}'s ships remain!!!`;
    updateUIGrid(enemy, enemyGrid);
    updateUIGrid(player, playerGrid);
    gameOver = true;
    return;
  }
  damageReports.innerHTML = player.damageReport();   
  updateUIGrid(enemy, enemyGrid);
  updateUIGrid(player, playerGrid);
});


function updateUIGrid( playerInfo, gridToPopulate, debugMode = false ) {
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
      if(debugMode){
        cell.innerHTML = cellData;
      }else{
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
      } 
      gridToPopulate.appendChild(cell);
    }    
  }
}
