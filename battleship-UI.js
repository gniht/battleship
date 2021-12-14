import Player from "./Player.js";


const startBtn = document.querySelector(".start-btn");
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

  
  // if(e.target.innerHTML === "X"){
  //   alert("Redundant attack!");
  // }

  
  const playerAttack = player.makeAttack(enemy, coordinates);  
  const enemyAttack = enemy.makeAttack(player, enemy.randomAttackVector());

  
  updateUIGrid(enemy, enemyGrid);
  updateUIGrid(player, playerGrid);

  if(enemy.gameboard.gameboard[coordinates[0]][coordinates[1]] === -1 ){
    
    e.target.classList.add("hit");
    e.target.innerHTML = "X";     
  }
  
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
      let cell = document.createElement("div");      
      cell.classList.add("cell");
      cell.id = `${r},${c}`;

      if( playerInfo.gameboard.gameboard[r][c] === true && playerInfo.name !== "HAL 9000" ){
        cell.classList.add("ship");
        cell.innerHTML = "O";
      }      
      gridToPopulate.appendChild(cell);
    }    
  }
}
