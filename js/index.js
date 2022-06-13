// button elements
const timeDisplay = document.querySelector("#currentTime");
const startBtn = document.querySelector("#btnStart");
const pauseBtn = document.querySelector("#btnPause");
const resetBtn = document.querySelector("#btnReset");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;


// Add event listeners to each button and then update the time
startBtn.addEventListener("click", () => {

    // if time is paused, switch pause to false and start time again
        if(paused){
            paused = false;
            startTime = Date.now() - elapsedTime;
            intervalId = setInterval(updateTime, 1000);
        }

});

pauseBtn.addEventListener("click", () => {

    // If pause is not pressed stop time 
    if(!paused){
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalId);
    }

});

resetBtn.addEventListener("click", () => {
    // Reset all variable back to 0 and call display method to update time
    paused = true;
    clearInterval(intervalId);
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    hrs = 0;
    mins = 0;
    secs = 0;
    timeDisplay.textContent = "00:00:00";

});

function updateTime () {

    // Method is called every 1000 milliseconds to update time if start is pressed
    elapsedTime = Date.now() - startTime;

    secs = Math.floor((elapsedTime / 1000) % 60);
    mins = Math.floor((elapsedTime  / (1000 * 60)) % 60);
    hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

    secs = pad(secs);
    mins = pad(mins);
    hrs = pad(hrs);

    timeDisplay.textContent = `${hrs}:${mins}:${secs}`;

    function pad(unit){
        return (("0") + unit).length > 2 ? unit : "0" + unit;
    }
}