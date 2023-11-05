// Write your JavaScript code here.
// Remember to pay attention to page loading!
Window.addEventListner("load", function() {;

let rocketPosX = 0;
let rocketPosY = 0;
let altitude = 0;

const abortMission = document.getElementById("missionAbort");
const liftoff = document.getElementById("takeoff");
const flightStatus = document.getElementById("flightStatus");
const shuttleBackground = document.getElementById("shuttleBackground");
const shuttleHeight = document.getElementById("spaceShuttleHeight"); 
const land = document.getElementById("landing");
const up = document.getElementById("up");
const down = document.getElementById("down");
const right = document.getElementById("right");
const left = document.getElementById("left");
const rocket = document.getElementById("rocket");


liftoff.addEventListener("click", function() {
    let takeoff = confirm("confirm that shuttle is ready for takeoff.");
    if (takeoff == true) {
        flightStatus.innerHTML = "shuttle in flight.";
        shuttleBackground.style.backgroundColor = "blue";
        altitude = 10000;
        shuttleHeight.innerHTML = altitude;
    }
});

land.addEventListener("click", function() {
    let Land = alert("shuttle is landing. Landing gear engaged.");
    flightStatus.innerHTML = "The shuttle has landed.";
    shuttleBackground.style.backgroundColor = "green";
    altitude = 0;
    shuttleHeight.innerHTML = altitude;
});

abortMission.addEventListener("click", function() {
    let abortMission = confirm("confirm you want to abort mission.");
    if (abortMission == true) {
        flightStatus.innerHTML = "Mission aborted.";
        shuttleBackground.style.backgroundColor = "green";
        altitude = 0;
        shuttleHeight.innerHTML = altitude;
    }
});

document.addEventListener("click", function() {

    if (event.target.id === "left") {
        rocketPosX -= 10;
        rocket.style.marginleft = rocketPosX + "px";
    }
    if (event.target.id === "right") {
        rocketPosY += 10;
        rocket.style.marginBottom = rocketPosY + "px";
    }
    if (event.target.id === "up") {
        rocketPosY += 10;
        rocket.style.marginBottom = rocketPosY + "px";
        altitude += 10000;
        shuttleHeight.innerHTML = altitude;
    }
    if (event.target.id === "down") {
        rocketPosY -= 10;
        rocket.style.marginBottom = rocketPosY + "px";
        altitude -= 10000;
        shuttleHeight.innerHTML = altitude;
    }
})
})