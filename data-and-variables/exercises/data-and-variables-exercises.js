// Declare and assign the variables below
// Use console.log to print the 'typeof' each variable. Print one item per line.
let shuttleName = 'Determination';
console.log (typeof (shuttleName));
let shuttleSpeedMph = 17500;
console.log (typeof(shuttleSpeedMph));
let distanceToMarsKm = 225000000;
console.log (typeof(distanceToMarsKm));
let distanceToMoonKm = 38400;
console.log (typeof(distanceToMoonKm));
const milesPerKm = 0.621;
console.log (typeof(milesPerKm));


// Calculate a space mission below

// Print the results of the space mission calculations below
let milestomars = distanceToMarsKm * milesPerKm;
console.log (milestomars);
let hourstomars = milestomars / shuttleSpeedMph;
console.log (hourstomars);
let daystomars = hourstomars / 24;
console.log (daystomars);
console.log (shuttleName + " will take " + daystomars + " days to reach mars");

// Calculate a trip to the moon below
// Print the results of the trip to the moon below
let milestomoon = distanceToMoonKm * milesPerKm;
console.log (milestomoon);
let hourstomoon = milestomoon / shuttleSpeedMph;
console.log (hourstomoon);
let daystomoon = hourstomoon / 24;
console.log (daystomoon);
console.log (shuttleName + " will take " + daystomoon + " days to reach moon");
console.log("end of program");
