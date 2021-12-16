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
  expect(enemy.strategicVolley(player)).toBe(false);
});

test("once a hit has occured, strategic options exist", () => {
  const player = new Player();
  const enemy = new Player();
  player.placeAllShips();
  console.log("attack succeeds at: " + player.gameboard.ships["battleship"].hullIntegrity[0])   
  enemy.makeAttack(player, player.gameboard.ships["battleship"].hullIntegrity[0]);
  console.log(enemy.strategicOptions);  
  expect(enemy.strategicOptions.length >= 1).toBe(true);
});

