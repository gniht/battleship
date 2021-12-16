import Player from "./Player.js";


const startBtn = document.querySelector(".start-btn");
const difficultyBtn = document.querySelector(".difficulty-btn");
const enemyGrid = document.querySelector(".enemy-grid");
const playerGrid = document.querySelector(".player-grid");

let enemy; 
let player; 

startBtn.addEventListener("click", (e) =>{
  e.preventDefault();
  e.stopPropagation();

  enemy = new Player();
  player = new Player(  "fred" /* prompt("enter name") */);

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
    alert("Redundant attack!");
    return;
  }  
  const playerAttack = player.makeAttack(enemy, coordinates);
  if(playerAttack){
    alert("you hit an enemy ship!");
  }  
  const enemyAttack = enemy.makeAttack(player, enemy.randomAttackVector());
  if(enemyAttack){
    alert("one of your ships was hit!");
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
