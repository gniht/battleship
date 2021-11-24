
class Ship {
  constructor( size ) {
    this.size = size;
    this.hullIntegrity = [];
    for(let i = 0; i < size; i++){
      this.hullIntegrity.push(true);
    }    
  }
  hit( hitLocation ) {

  }
  isSunk(){
    return this.hullIntegrity.indexOf(true) < 0;
    console.log(this.hullIntegrity);
  }
}

module.exports = Ship;