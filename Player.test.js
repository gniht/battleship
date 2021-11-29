const Player = require("./Player.js");

test("a new player without a name is created with default name", () => {
  const player = new Player();
  expect(player.name).toBe("HAL 9000");
});

test("can place all ships", () => {
  const player = new Player();
  expect(player.placeAllShips()).toBe(true);
});
