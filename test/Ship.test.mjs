import Ship from "../src/Ship";
// const Ship = require('./Ship.js');

test("a new ship isSunk?", ()=>{  
  expect(new Ship(5).isSunk()).toBe(false);
});

test("a ship that is hit registers damage", ()=>{
  const testShip = new Ship(1);
  testShip.hullIntegrity[0] = [0, 0];
  expect(testShip.hit([0, 0])).toBe(true);  
});

test("a ship that has taken all hits is sunk", ()=>{
  const testShip = new Ship(1);
  testShip.hullIntegrity[0] = [0, 0];    
  testShip.hit([0, 0]);  
  expect(testShip.isSunk()).toBe(true);  
});

test("a ship that has taken hits, but not all hits is not sunk", ()=>{
  const testShip = new Ship(2);
  testShip.hullIntegrity[0] = [0, 0];
  testShip.hullIntegrity[1] = [0, 1];
  testShip.hit([0, 0]);  
  expect(testShip.isSunk()).toBe(false);  
});
