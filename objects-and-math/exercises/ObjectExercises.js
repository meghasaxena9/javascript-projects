let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6

};
//console.log(superChimpOne);
superChimpOne["astronautID"] = 2;
superChimpOne["move"] = Math.floor(Math.random()*10);
//console.log(superChimpOne);

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5
};
salamander["astronautID"] = 4;
salamander["move"] = Math.floor(Math.random()*10);

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6
   
};
superChimpTwo["astronautID"] = 6;
superChimpTwo["move"] = Math.floor(Math.random()*10);

let superDog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5

};
superDog["astronautID"] = 8;
superDog["move"] = Math.floor(Math.random()*10);
//console.log(superDog);

let superBear = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1
};
superBear["astronautID"] = 10;
superBear["move"] = Math.floor(Math.random()*10);
//console.log(superBear);


// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.
let crew = [superChimpOne, salamander, superChimpTwo, superDog, superBear];
//console.log(crew);
// Print out the relevant information about each animal.

console.log(crewReports(crew[0]));
function crewReports(animalname) {
   return (animalname["name"]);
 //  console.log(`${animalname.name()} is a ${animalname.species()}. They are ${animalname.age()} years old and ${animalname.mass()} kilograms. Their ID is ${animalname.astronautID()}.`);

};

// Start an animal race!
console.log(fitnessTest(crew));

function fitnessTest(candidates){
//   let candidates = []
   let results = [], numSteps, turns;
   for (let i = 0; i < candidates.length; i++){
       numSteps = 0;
       turns = 0;
       while(numSteps < 20){
 //        console.log(candidates[i]);
       numSteps += (candidates[i].move);
 //numSteps = 20;
       turns++;
       }
       results.push(`${candidates[i].name} took ${turns} turns to take 20 steps.`);
   }
   return results;
  };