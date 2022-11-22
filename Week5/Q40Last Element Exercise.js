// DEFINE YOUR FUNCTION BELOW:
function lastElement(array){
  if(array.length === 0){
      return null;
  }else{
      return array[array.length-1];
  }
}

lastElement([3,5,7]) //7
lastElement([1]) //1
lastElement([])