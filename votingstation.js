
/* 
My solution - Also my forum post about this issue here: https://web-prep-help.lighthouselabs.ca/t/voting-station-evaluation-issues-on-compass/10135
*/
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];



function chooseStations(array){
  let goodStations = [];
  for(const i of array){
    let capacity = i[1]
    if(capacity >= 20){
      if(i[2] === "community centre" || i[2] === "school"){
        goodStations.push(i[0])
      }
    }
  }
  return goodStations
}

console.log(chooseStations(stations));
chooseStations(stations);

/* - The video's solution:
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];


function chooseStations (stations){
  const goodStations = [];
  for(const station of stations){
    const capacity = station[1]
    if(capacity >= 20){      
      const type = station[2]
      if(type === "school" || type === "community centre"){
        goodStations.push(station[0])
      }
    }
  }
  return goodStations
}

console.log(chooseStations(stations));
*/
