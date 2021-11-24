
class Ship {
  constructor( size ) {
    this.size = size;
    this.hullIntegrity = [];
    for(let i = 0; i < size; i++){
      this.hullIntegrity.push(true);
    }    
  }
  
  hit( hitLocation ) {
    // should return true if hit succeeds otherwise false
    if(this.hullIntegrity[hitLocation-1]){
      return !(this.hullIntegrity[hitLocation-1] = false);
    }    
    return false;
  }

  isSunk(){
    return this.hullIntegrity.indexOf(true) == -1;    
  }
}

module.exports = Ship;