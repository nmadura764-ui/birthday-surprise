window.addEventListener("load", () => {
    document.body.classList.add("page-loaded");
});
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");

const funnyOverlay = document.getElementById("funnyOverlay");

const funnyEmoji = document.getElementById("funnyEmoji");
const funnyTitle = document.getElementById("funnyTitle");
const funnyMessage = document.getElementById("funnyMessage");

const goBackButton =
    document.getElementById("goBackButton");


// ======================================
// FUNNY NO RESPONSES
// ======================================

const funnyResponses = [

    {
        emoji: "😭",
        title: "EXCUSE ME?!",
        message:
            "You can't just say no to your own birthday story! 😂"
    },

    {
        emoji: "👀",
        title: "Nice try...",
        message:
            "That button was decorative. We both know you're reading it. 😌"
    },

    {
        emoji: "😂",
        title: "NO?!",
        message:
            "I respectfully reject your rejection. Please try again. 😂"
    },

    {
        emoji: "🥺",
        title: "But whyyyyy?",
        message:
            "The little book is literally waiting for you... 📖🥺"
    },

    {
        emoji: "🤨",
        title: "Interesting choice...",
        message:
            "Unfortunately, the birthday committee has denied that choice. 😂"
    },

    {
        emoji: "🙃",
        title: "Wrong answer!",
        message:
            "The correct answer is hiding somewhere around here... hint: YES ✨"
    }

];


let responseIndex = 0;


// ======================================
// NO BUTTON
// ======================================

noButton.addEventListener("click", () => {

    const response =
        funnyResponses[responseIndex];


    funnyEmoji.textContent =
        response.emoji;


    funnyTitle.textContent =
        response.title;


    funnyMessage.textContent =
        response.message;


    funnyOverlay.classList.remove("hidden");


    responseIndex++;


    if (
        responseIndex >=
        funnyResponses.length
    ) {

        responseIndex = 0;

    }

});


// ======================================
// GO BACK
// ======================================

goBackButton.addEventListener("click", () => {

    funnyOverlay.classList.add("hidden");

});


// ======================================
// YES BUTTON
// ======================================

yesButton.addEventListener("click", () => {

    yesButton.textContent =
        "Opening... ✨";


    yesButton.disabled = true;


    setTimeout(() => {

        window.location.href =
            "page3.html";

    }, 600);

});