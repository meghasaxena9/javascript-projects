let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
food = food.split(",");
console.log(food);
equipment = equipment.split(",");
console.log(equipment);
pets = pets.split(",");
console.log(pets);
sleepAids = sleepAids.split(",");
console.log(sleepAids);
//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold;
cargoHold = [food, equipment, pets, sleepAids];
console.log(cargoHold);
//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
let cabinetquery;
const input = require('readline-sync');
cabinetquery = input.question("Enter cabinet number 0 to 3\n");


//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
console.log(cargoHold[cabinetquery]);

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
const input1 = require('readline-sync');
itemquery = input1.question("Enter item in cabinet\n");
if (cargoHold[cabinetquery].includes(itemquery)){
    console.log(`Cabinet number ${cabinetquery} DOES contain ${itemquery}.`);}
    else
    {console.log(`Cabinet number ${cabinetquery} DOES NOT contain ${itemquery}`);
}
