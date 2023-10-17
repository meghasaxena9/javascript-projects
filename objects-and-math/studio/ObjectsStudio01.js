<<<<<<< HEAD
// Code your selectRandomEntry function here:
=======
>>>>>>> a67465628fb073e48f10c79d3333f89fff662e32
let idNumbers = [291, 414, 503, 599, 796, 890];
function selectRandomEntry() {
  return idNumbers[Math.floor(Math.random()*6)];
};
//console.log("start");
// Code your buildCrewArray function here:
arrayId = [];
i = 0;
while (i<3) {
  value = selectRandomEntry();
 if (!arrayId.includes(value)){
  arrayId[i] = value;
  i++;
  //console.log(i);
};
}
console.log(arrayId);



// Here are the candidates and the 'animals' array:
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};

let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];
crew1 = [];
// Code your template literal and console.log statements:
function crewAnimals(arrayId1, animals1) {
  crew = [];
  i = 0;
  while (i < 3) {
    for (j = 0; j < 6; j++){
    if (arrayId1[i] == animals1[j].astronautID) {
    crew[i] = animals1[j].name
    j = 6;
    }
  }
  i++;
}
return crew
};
crew1 = crewAnimals(arrayId, animals);
<<<<<<< HEAD
console.log(`'${crew1[0]}, ${crew1[1]}, and ${crew1[2]} are going to space!'`);
=======
console.log(`'${crew1[0]}, ${crew1[1]}, and ${crew1[2]} are going to space!'`);
>>>>>>> a67465628fb073e48f10c79d3333f89fff662e32
