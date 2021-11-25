const { TestWatcher } = require("@jest/core");
const Gameboard = require("./Gameboard");

test("an attack on an empty cell returns false", () => {
  const gameboard = new Gameboard();
  expect(gameboard.receiveAttack(1, 3)).toBe(false);
});

test("an attack on a previously hit cell returns -1", () => {
  const gameboard = new Gameboard();
  expect(gameboard.receiveAttack(4, 4)).toBe(-1);
});

test("an attack on a previously hit cell returns -1", () => {
  // works, but need to be able to place ships
  const gameboard = new Gameboard();
  expect(gameboard.receiveAttack(4, 4)).toBe(-1);
});


