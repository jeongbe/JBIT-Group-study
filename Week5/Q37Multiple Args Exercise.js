function isSnakeEyes(dice1, dice2){
  if(dice1 === 1 && dice2 === 1){
      console.log("Snake Eyes!")
  }else{
      console.log("Not Snake Eyes!")
  }
}

isSnakeEyes(1,1) //Snake Eyes!
isSnakeEyes(1,5) //Not Snake Eyes!
isSnakeEyes(4,5)