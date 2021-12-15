

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
    for(let i = 0; i < this.hullIntegrity.length; i++){
      if( this.hullIntegrity[i][0] === hitLocation[0] &&
          this.hullIntegrity[i][1] === hitLocation[1] ){
            this.hullIntegrity[i] = false;
            return true;
          }
    }
    return false;
  }

  isSunk(){       
    for(let i = 0; i < this.hullIntegrity.length; i++){
      if( this.hullIntegrity[i] !== false ){
        return false;
      }
    }
    return true;    
  }
}

export default Ship;
