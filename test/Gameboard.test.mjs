import Gameboard from "../src/Gameboard";
import Ship from "../src/Ship";

test("an attack on an empty cell returns false", () => {
  const gameboard = new Gameboard();
  expect(gameboard.receiveAttack(1, 3)).toBe(false);
});

test("a ship can be placed (and can receive an attack, to verify placement)", () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(4, 2,"submarine");
  expect(gameboard.receiveAttack(4, 4)).toBe(true);
});

test("a ship properly places vertically (and can receive an attack, to verify placement)", () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(4, 2, "battleship", "vertical");
  expect(gameboard.receiveAttack(5, 2)).toBe(true);
});

test("an attack on a previously hit cell returns -1", () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(4, 2, "cruiser");
  gameboard.receiveAttack(4, 4);
  expect(gameboard.receiveAttack(4, 4)).toBe(-1);
});

test("position of Ship placement is valid", () => {
  const gameboard = new Gameboard();   
  expect(gameboard.placeShip(9, 9, "carrier")).toBe(false);
});

test("a new gameboard has ships remaining", () => {
  const gameboard = new Gameboard(); 
  gameboard.placeShip(0, 0, "carrier");  
  expect(gameboard.hasShipsRemaining()).toBe(true);
});

test("properly identifies when all ships have been sunk", () => {
  const gameboard = new Gameboard(); 
  gameboard.ships = {    
    test_dingy: new Ship(1)
  }
  gameboard.placeShip( 0, 0, "test_dingy" );
  gameboard.receiveAttack( 0, 0);  
  expect(gameboard.hasShipsRemaining()).toBe(false);
});




