import Player from "../src/Player";

test("a new player without a name is created with default name", () => {
  const player = new Player();
  expect(player.name).toBe("HAL 9000");
});

test("all ships are placed before game starts", () => {
  const player = new Player();
  expect(player.placeAllShips()).toBe(true);
});

test("can make an attack", () => {
  const player = new Player( "fred" );
  const enemy = new Player()
  player.placeAllShips();
  enemy.placeAllShips();
  expect(player.makeAttack(enemy, enemy.gameboard.ships["battleship"].hullIntegrity[0])).toBe(true);
});

test("a strategic options don't exist before hits occur", () => {
  const player = new Player();
  const enemy = new Player();
  player.placeAllShips();
  expect(enemy.strategicVector()).toBe(false);
});

test("once a hit has occured, strategic options exist", () => {
  const player = new Player();
  const enemy = new Player();
  player.placeAllShips();
  enemy.makeAttack(player, player.gameboard.ships["battleship"].hullIntegrity[0]);
  expect(enemy.strategicOptions.length >= 1).toBe(true);
});

