/*

print the numbers 100-200 to the console, with the following rules:

If the number is a multiple of 3, print the string "Loopy" instead of the number.
If the number is a multiple of 4, print the string "Lighthouse" instead of the number.
If the number is a multiple of both 3 and 4, print the string "LoopyLighthouse" instead of the number.
*/

for(let i = 100; i !== 201; i++){
  if((i % 3 === 0) && (i % 4 === 0)){
    console.log("LoopyLighthouse")
  } else if(i % 4 === 0){
    console.log("Lighthouse")
  } else if(i % 3 === 0){
    console.log("Loopy")
  } else {
    console.log(i);
  }
}