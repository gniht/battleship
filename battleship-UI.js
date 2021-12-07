const Player = require("./Player");

const UI = document.querySelector('.ui');
const menu = document.createElement("div");
const startBtn = document.createElement("button");
startBtn.innerText = "Start Game";
menu.appendChild(startBtn);
menu.classList.add("menu");
UI.appendChild(menu);

console.log(UI);





