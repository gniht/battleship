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
const playerGrid = document.createElement("div");
playerGrid.classList.add("player-grid");

// const enemy = new Player();
// enemy.placeAllShips();
const player = new Player(prompt("enter name"));
player.placeAllShips();
console.log(player);


export default UI;