const Player = require("./Player.js");

test("default name", () => {
  const player = new Player();
  expect(player.name).toBe("Sir Robo Admiral");
});
