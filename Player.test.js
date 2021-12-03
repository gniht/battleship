const Player = require("./Player.js");

test("a new player without a name is created with default name", () => {
  const player = new Player();
  expect(player.name).toBe("HAL 9000");
});

test("all ships are placed before game starts", () => {
  const player = new Player();
  expect(player.placeAllShips()).toBe(true);
});

// test("can take a turn", () => {
//   const player = new Player();
//   expect(player.makeMove()).toBe(true);
// });