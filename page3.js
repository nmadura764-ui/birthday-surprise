window.addEventListener("load", () => {
    document.body.classList.add("page-loaded");
});
const yesButton =
    document.getElementById("yesButton");

const noButton =
    document.getElementById("noButton");

const funnyOverlay =
    document.getElementById("funnyOverlay");

const funnyEmoji =
    document.getElementById("funnyEmoji");

const funnyTitle =
    document.getElementById("funnyTitle");

const funnyMessage =
    document.getElementById("funnyMessage");

const goBackButton =
    document.getElementById("goBackButton");


// ======================================
// FUNNY NO RESPONSES
// ======================================

const funnyResponses = [

    {
        emoji: "😭",

        title: "WAIT A MINUTE!",

        message:
            "You can't abandon the surprise now! 😂"
    },

    {
        emoji: "👀",

        title: "YOU SAID NO?!",

        message:
            "After I went through all this trouble?! The audacity! 😭"
    },

    {
        emoji: "🤨",

        title: "HMMMM...",

        message:
            "I think you accidentally clicked the wrong button. Try again. 😌"
    },

    {
        emoji: "🥺",

        title: "PLEASEEE",

        message:
            "The surprise is sitting here waiting for you... 🥺🎁"
    },

    {
        emoji: "😂",

        title: "NICE TRY",

        message:
            "Unfortunately, the NO department is currently closed. 😂"
    },

    {
        emoji: "🙃",

        title: "THAT'S NOT AN OPTION",

        message:
            "Your answer has been respectfully rejected. Please reconsider. 😌"
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


    funnyOverlay.classList.remove(
        "hidden"
    );


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

    funnyOverlay.classList.add(
        "hidden"
    );

});


// ======================================
// YES → PAGE 4
// ======================================

yesButton.addEventListener("click", () => {


    yesButton.textContent =
        "Let's gooo ✨";


    yesButton.disabled = true;


    document.body.classList.add(
        "page-changing"
    );


    setTimeout(() => {

        window.location.href =
            "page4.html";

    }, 600);

});