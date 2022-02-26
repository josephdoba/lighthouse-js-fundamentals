function isOdd(number){
  if(number % 2 !== (0)){
    return true;
  } else {
    return false;
  }
}

console.log("3 is odd: " + isOdd(3));
console.log("6 is odd: " + isOdd(6));
console.log("9 is odd: " + isOdd(9));
