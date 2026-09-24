const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

const waitingText = document.getElementById("waitingText");
const countdown = document.querySelector(".countdown");
const midnightMessage = document.getElementById("midnightMessage");

const yesButton1 = document.getElementById("yesButton1");
const yesButton2 = document.getElementById("yesButton2");

const skipButton = document.getElementById("skipButton");

let midnightReached = false;


/* =================================
   PAGE FADE IN
================================= */

window.addEventListener("load", () => {
    document.body.classList.add("page-loaded");
});


/* =================================
   COUNTDOWN
================================= */

function updateCountdown() {

    const now = new Date();

    const midnight = new Date();

    midnight.setHours(24, 0, 0, 0);

    const difference =
        midnight.getTime() - now.getTime();


    if (difference <= 0) {

        showMidnight();

        return;
    }


    const totalSeconds =
        Math.floor(difference / 1000);


    const hours =
        Math.floor(totalSeconds / 3600);


    const minutes =
        Math.floor(
            (totalSeconds % 3600) / 60
        );


    const seconds =
        totalSeconds % 60;


    hoursElement.textContent =
        String(hours).padStart(2, "0");


    minutesElement.textContent =
        String(minutes).padStart(2, "0");


    secondsElement.textContent =
        String(seconds).padStart(2, "0");
}


/* =================================
   MIDNIGHT
================================= */

function showMidnight() {

    if (midnightReached) return;

    midnightReached = true;

    countdown.style.display = "none";

    waitingText.style.display = "none";

    skipButton.style.display = "none";

    midnightMessage.classList.remove("hidden");
}


/* =================================
   GO TO PAGE 2
================================= */

function openPageTwo(button) {

    button.innerHTML = "YES ✨";

    document.body.classList.add("page-leaving");

    setTimeout(() => {

        window.location.href = "page2.html";

    }, 800);
}


/* =================================
   YES BUTTONS
================================= */

yesButton1.addEventListener("click", () => {

    openPageTwo(yesButton1);

});


yesButton2.addEventListener("click", () => {

    openPageTwo(yesButton2);

});



/* =================================
   START COUNTDOWN
================================= */

updateCountdown();

setInterval(updateCountdown, 1000);
skipButton.addEventListener("click", () => {
    document.body.classList.add("page-leaving");

    setTimeout(() => {
        window.location.href = "page2.html";
    }, 800);
});
