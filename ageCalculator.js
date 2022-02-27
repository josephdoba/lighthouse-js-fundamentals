// the age calculator function should take in three parameters: name, and two numbers
// It should return: "Suzie is 32 years old."

function ageCalculator(name, birthyear, currentyear){
  let firstname = name;
  let age = currentyear - birthyear
  return `${firstname} is ${age} years old.`
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));

ageCalculator("Ferdinand", 1988, 2015);
ageCalculator("Miranda", 1983, 2015);