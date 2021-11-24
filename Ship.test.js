const Ship = require('./Ship.js');

test("a new ship isSunk?", ()=>{  
  expect(new Ship(5).isSunk()).toBe(false);
});

test("a ship that is hit registers damage", ()=>{
  const testShip = new Ship(1);
  expect(testShip.hit(1)).toBe(true);  
});

test("a ship that has taken all hits is sunk", ()=>{
  const testShip = new Ship(1);
  testShip.hit(1);
  expect(testShip.isSunk()).toBe(true);  
});
