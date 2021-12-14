import Player from "./Player";

test("a new player without a name is created with default name", () => {
  const player = new Player();
  expect(player.name).toBe("HAL 9000");
});

test("all ships are placed before game starts", () => {
  const player = new Player();
  expect(player.placeAllShips()).toBe(true);
});

test("can make an attack (this should fail roughly half the time)", () => {
  const player = new Player( "fred" );
  const enemy = new Player()
  player.placeAllShips();
  enemy.placeAllShips();
  expect(player.makeAttack(enemy, [4,0])).toBe(true);
});