const Ship = require('./Ship.js');

test('is a new ship already sunk', ()=>{
  expect(new Ship(5).isSunk()).toBe(false);
});