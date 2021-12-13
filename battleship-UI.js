import Player from "./Player.js";


const UI = document.querySelector('.ui');
const menu = document.createElement("div");
const startBtn = document.createElement("button");
startBtn.innerText = "Start Game";
menu.appendChild(startBtn);
menu.classList.add("menu");
UI.appendChild(menu);

const gridContainer = document.createElement("div");
gridContainer.classList.add("grid-container")

const enemyGrid = document.createElement("div");
enemyGrid.classList.add("enemy-grid");
gridContainer.appendChild(enemyGrid);
const playerGrid = document.createElement("div");
playerGrid.classList.add("player-grid");
gridContainer.appendChild(playerGrid);
UI.appendChild(gridContainer);

const enemy = new Player();
const player = new Player(  "fred" /* prompt("enter name") */);
enemy.placeAllShips();
player.placeAllShips();
updateUIGrid(enemy, enemyGrid);
updateUIGrid(player, playerGrid);

enemyGrid.addEventListener("click", e => {  
  e.preventDefault();
  e.stopPropagation();
  let coordinates = e.target.id.split(","); 
  
  if(e.target.innerHTML === "X"){
    return;
  }

  player.makeAttack(enemy, coordinates);  
  enemy.makeAttack(player, enemy.randomAttackVector());
  while(playerGrid.firstChild){
    playerGrid.removeChild(playerGrid.firstChild);
  }
  updateUIGrid(player, playerGrid);

  if(enemy.gameboard.receiveAttack(coordinates[0], coordinates[1])){
    
    e.target.classList.add("hit");
    e.target.innerHTML = "X";     
  }

  // if(e.target.innerHTML === "O"){
  //   e.target.classList.add("hit");
  //   e.target.innerHTML = "X";    
  // }else if (e.target.innerHTML !== "X"){
  //   e.target.classList.add("miss");
  //   e.target.innerHTML = "X";
  // }  
});

function updateUIGrid( playerInfo, gridToPopulate ) {
  // r indicates row, c indicates column.
  // the comma-separated coordinates are encoded as the element ID.
  
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


export default UI;