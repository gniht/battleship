const Ship = require('./Ship.js');

test("a new ship isSunk?", ()=>{  
  expect(new Ship(5).isSunk()).toBe(false);
});

// test("a ship that is hit registers damage", ()=>{
//   expect(new Ship(5).hit(4)).toBe(true);
// });