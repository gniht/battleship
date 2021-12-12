import Player from "./Player.js";


const UI = document.querySelector('.ui');
const menu = document.createElement("div");
const startBtn = document.createElement("button");
startBtn.innerText = "Start Game";
menu.appendChild(startBtn);
menu.classList.add("menu");
UI.appendChild(menu);

const enemyGrid = document.createElement("div");
enemyGrid.classList.add("enemy-grid");
UI.appendChild(enemyGrid);
const playerGrid = document.createElement("div");
playerGrid.classList.add("player-grid");
UI.appendChild(playerGrid);



const player = new Player(  "fred" /* prompt("enter name") */);
player.placeAllShips();
populateUIGrid(player.gameboard, playerGrid);
console.log(player.gameboard.gameboard);

function populateUIGrid( { gameboard }, gridToPopulate ) {
  
  for( let r = 0; r < 10; r++ ){
    for( let c = 0; c < 10; c++ ){      
      let cell = document.createElement("div");      
      cell.classList.add("cell");
      cell.id = `${r},${c}`;

      if(gameboard[r][c] === true){
        cell.classList.add("ship");
      }
      
      gridToPopulate.appendChild(cell);
    }    
  }
}



export default UI;