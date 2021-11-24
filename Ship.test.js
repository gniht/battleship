const Ship = require('./Ship.js');

test("a new ship isSunk?", ()=>{  
  expect(new Ship(5).isSunk()).toBe(false);
});

test("a ship that is hit registers damage", ()=>{
  const testShip = new Ship(1);
  expect(testShip.hit(1)).toBe(true);  
});


