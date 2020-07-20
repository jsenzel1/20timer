console.log("hello");

// let seconds = 60 * 20;
let seconds = 3;

let minutes = 0;

let timeSlot = 20;

let notStarted;

let startButton;

let paused = true;

let firstStarted = false;

var audio = new Audio('alarm.mp3');


startButton = document.getElementById("button");


startButton.onclick = function () {

    console.log("clicked");

    firstStarted = true;

    paused = !paused;

    if (paused && firstStarted) {
        startButton.innerHTML = "resume"
    }

    if (!paused) {
        startButton.innerHTML = "pause";
    }
}

let x = setInterval(function () {

    if (!paused) {

        seconds--;
        minutes = Math.floor(seconds / 60);

        document.getElementById("timer").innerHTML = minutes + "m " + seconds % 60 + "s ";

        if (seconds == 0) {

            audio.play();

            timeDone();

        }

    }
}, 1000)

function timeDone() {
    seconds = 60 * 20;
    var response = window.prompt("what did you do for the last 20 minutes?", "no pressure")

    // alert(response);

    let listItem = document.createElement("ul",)
    listItem.innerHTML = timeSlot + " - " + response;
    document.getElementById("list").append(listItem)

    if (timeSlot == 60) {
        timeSlot = 20;
        let rule = document.createElement("hr");
        document.getElementById("list").append(rule);
    } else {
        timeSlot += 20;
    }
}

