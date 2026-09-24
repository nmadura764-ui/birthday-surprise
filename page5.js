window.addEventListener("load", () => {
    document.body.classList.add("page-loaded");
});
document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       ELEMENTS
    ========================================== */

    const questionContent =
        document.getElementById("questionContent");

    const surpriseMessage =
        document.getElementById("surpriseMessage");


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


    const checkOutButton =
        document.getElementById("checkOutButton");


    /* =========================================
       FUNNY NO RESPONSES
    ========================================== */

    const funnyResponses = [

        {
            emoji: "😭",
            title: "EXCUSE ME?!",
            message:
                "You came this far and now you're saying no?! 😂"
        },

        {
            emoji: "👀",
            title: "NICE TRY...",
            message:
                "I definitely saw that NO button being clicked. 😭"
        },

        {
            emoji: "🥺",
            title: "BUT WHY?!",
            message:
                "The surprise is literally waiting for you... 🎁🥺"
        },

        {
            emoji: "😂",
            title: "NOPE!",
            message:
                "That answer has been rejected by the birthday committee. 😂"
        },

        {
            emoji: "🙃",
            title: "WRONG ANSWER!",
            message:
                "Please reconsider your life choices and try again. 😌"
        }

    ];


    let responseIndex = 0;


    /* =========================================
       NO BUTTON
    ========================================== */

    noButton.addEventListener("click", function () {

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


    /* =========================================
       GO BACK
    ========================================== */

    goBackButton.addEventListener(
        "click",
        function () {

            funnyOverlay.classList.add(
                "hidden"
            );

        }
    );


    /* =========================================
       YES
    ========================================== */

    yesButton.addEventListener(
        "click",
        function () {

            questionContent.classList.add(
                "hidden"
            );

            surpriseMessage.classList.remove(
                "hidden"
            );

        }
    );


    /* =========================================
       CHECK OUT
    ========================================== */

    checkOutButton.addEventListener(
        "click",
        function () {

            checkOutButton.textContent =
                "Opening... ✨";

            checkOutButton.disabled = true;


            document.body.classList.add(
                "page-changing"
            );


            setTimeout(function () {

                window.location.href =
                    "page6.html";

            }, 700);

        }
    );

});