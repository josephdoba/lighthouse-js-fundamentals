const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

function finalPosition(directionArray){
  // initialize coordinates ... in your array x is the horizontal and y is vertical
  let initPosition = [0,0]
  console.log(moves)
  //iterate over the array to check for values
  for(const i of directionArray){
    if(i === 'north'){
      console.log("North") // If north, increment Y by 1
      initPosition[1] += 1;
      console.log(initPosition)
    } else if(i === 'south'){
      console.log("South") // If south, decrement Y by 1
      initPosition[1] -= 1;
      console.log(initPosition)
    } else if(i === 'east'){
      console.log("East") // If East, increment X by 1
      initPosition[0] += 1;
      console.log(initPosition)
    } else if(i === 'west'){
      console.log("West") // If West, decrement X by 1
      initPosition[0] -= 1;
      console.log(initPosition)
    } else {
      console.log("Something went wrong")
    };  
    // create a result variable

  }
  const result = initPosition
  // return the result 
  return result; 
};

// the final position function should return: [-1, 4]
finalPosition(moves);
