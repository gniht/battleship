
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
    console.log(this.hullIntegrity);
    return this.hullIntegrity.indexOf(true) < 0;    
  }
}

module.exports = Ship;