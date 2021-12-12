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
populateUIGrid(enemy.gameboard, enemyGrid);
populateUIGrid(player.gameboard, playerGrid);

enemyGrid.addEventListener("click", e => {  
  e.preventDefault();
  e.stopPropagation();
  if(e.target.innerHTML === "O"){
    e.target.classList.add("hit");
    e.target.innerHTML = "X";    
  }else if (e.target.innerHTML !== "X"){
    e.target.classList.add("miss");
    e.target.innerHTML = "X";
  }
  
});


function populateUIGrid( { gameboard }, gridToPopulate ) {
  
  for( let r = 0; r < 10; r++ ){
    for( let c = 0; c < 10; c++ ){      
      let cell = document.createElement("div");      
      cell.classList.add("cell");
      cell.id = `${r},${c}`;

      if(gameboard[r][c] === true){
        cell.classList.add("ship");
        cell.innerHTML = "O";
      }      
      gridToPopulate.appendChild(cell);
    }    
  }
}



export default UI;