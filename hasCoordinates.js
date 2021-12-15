
function hasCoordinates(arrayToCheck, coordinates) {
  arrayToCheck.forEach(element => {
    if(element[0] == coordinates[0] && element[1] == coordinates[1]){
      return true;
    }    
  });
  return false;
}

export default hasCoordinates;