const { TestWatcher } = require("@jest/core");
const Gameboard = require("./Gameboard");

test("an attack on an empty cell returns false", () => {
  const gameboard = new Gameboard();
  expect(gameboard.receiveAttack(1, 3)).toBe(false);
});

test("a ship can be placed and receive an attack", () => {
  // works, but need to be able to place ships
  const gameboard = new Gameboard();
  gameboard.placeShip(4, 2, 3);
  expect(gameboard.receiveAttack(4, 4)).toBe(true);
});


// test("an attack on a previously hit cell returns -1", () => {
//   // works, but need to be able to place ships
//   const gameboard = new Gameboard();
//   expect(gameboard.receiveAttack(4, 4)).toBe(-1);
// });


