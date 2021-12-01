const Player = require("./Player");

const UI = document.createElement('div');
document.querySelector("body").appendChild(UI);

const menu = document.createElement("div");
menu.classList.add("menu");
UI.appendChild(menu);


module.exports = battleShipUI;