
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
    if(this.hullIntegrity.includes(hitLocation)){
      this.hullIntegrity[this.hullIntegrity.indexOf(hitLocation)] = false;
      return true;
    }    
    return false;
  }

  isSunk(){    
    return !this.hullIntegrity.includes(true);    
  }
}

module.exports = Ship;