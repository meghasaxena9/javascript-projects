// Initialize Variables below
let date;
date = "Monday 2019-03-18";
let time;
time = "10:05:34 AM";
let astronautCount;
astronautCount = 7;
let astronautStatus;
astronautStatus = "ready";
let averageAstronautMassKg;
averageAstronautMassKg = 80.7;
let crewMassKg;
crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg;
fuelMassKg = 76000;
let shuttleMassKg;
shuttleMassKg = 74842.31;
let totalMassKg;
totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit;
maximumMassLimit = 850000;
let fuelTempCelsius;
fuelTempCelsius = -225;
let minimumFuelTemp;
minimumFuelTemp = -300;
let maximumFuelTemp;
maximumFuelTemp = -150;
let fuelLevel;
fuelLevel = "100%";
let weatherStatus;
weatherStatus = "clear";
let preparedForLiftOff;
preparedForLiftOff = "true";
//console.log ("start");
// logic
if (astronautCount = 7)
{
//    console.log ('here1');
    if (astronautStatus == "ready")
{
//    console.log ('here2');
//    console.log (totalMassKg);
//    console.log(maximumMassLimit);
    if (totalMassKg < maximumMassLimit)
{
//    console.log ('here3');
    if (fuelTempCelsius >= -300)
{
//    console.log ('here4');
    if (fuelLevel == "100%")
    {
//        console.log ('here5');
        if (weatherStatus == "clear")
        {
            //console.log ("logics");
            console.log ("Date: " + date);
            console.log ("Time: " + time);
            console.log ("Astronaut Count: " + astronautCount);
            console.log ("Crew Mass: " + crewMassKg);
            console.log ("Fuel Mass: " + fuelMassKg);
            console.log ("Shuttle Mass: " + shuttleMassKg);
            console.log ("Total Mass: " + totalMassKg);
            console.log ("Fuel Temperature: " + fuelTempCelsius);
            console.log ("Weather Status:   clear");
            console.log ("Have a safe trip astronauts");
        }
    }
}
}
}

    }




// add logic below to verify total number of astronauts for shuttle launch does not exceed 7

// add logic below to verify all astronauts are ready

// add logic below to verify the total mass does not exceed the maximum limit of 850000

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300

// add logic below to verify the fuel level is at 100%

// add logic below to verify the weather status is clear

// Verify shuttle launch can proceed based on above conditions
