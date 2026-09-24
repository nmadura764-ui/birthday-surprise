window.addEventListener("load", () => {
    document.body.classList.add("page-loaded");
});
document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       GET ELEMENTS
    ========================================= */

    const introScreen =
        document.getElementById("introScreen");

    const question1 =
        document.getElementById("question1");

    const question2 =
        document.getElementById("question2");

    const question3 =
        document.getElementById("question3");

    const finalReaction =
        document.getElementById("finalReaction");


    const beginButton =
        document.getElementById("beginButton");

    const q1Yes =
        document.getElementById("q1Yes");

    const q1No =
        document.getElementById("q1No");

    const q2Yes =
        document.getElementById("q2Yes");

    const q2No =
        document.getElementById("q2No");

    const friendButton =
        document.getElementById("friendButton");

    const boyfriendButton =
        document.getElementById("boyfriendButton");


    const reactionOverlay =
        document.getElementById("reactionOverlay");

    const reactionEmoji =
        document.getElementById("reactionEmoji");

    const reactionTitle =
        document.getElementById("reactionTitle");

    const reactionMessage =
        document.getElementById("reactionMessage");

    const reactionBackButton =
        document.getElementById("reactionBackButton");


    const finalEmoji =
        document.getElementById("finalEmoji");

    const finalTitle =
        document.getElementById("finalTitle");

    const finalMessage =
        document.getElementById("finalMessage");

    const continueButton =
        document.getElementById("continueButton");


    /* =========================================
       SHOW SCREEN
    ========================================= */

    function showScreen(screen) {

        introScreen.classList.add("hidden");

        question1.classList.add("hidden");

        question2.classList.add("hidden");

        question3.classList.add("hidden");

        finalReaction.classList.add("hidden");

        screen.classList.remove("hidden");
    }


    /* =========================================
       START
    ========================================= */

    beginButton.addEventListener("click", function () {

        showScreen(question1);

    });


    /* =========================================
       QUESTION 1
    ========================================= */

    q1Yes.addEventListener("click", function () {

        showScreen(question2);

    });


    q1No.addEventListener("click", function () {

        reactionEmoji.textContent = "😭";

        reactionTitle.textContent =
            "WELL THEN...";

        reactionMessage.textContent =
            "Well you know... go back 😭";

        reactionOverlay.classList.remove("hidden");

    });


    /* =========================================
       QUESTION 2
    ========================================= */

    q2Yes.addEventListener("click", function () {

        showScreen(question3);

    });


    q2No.addEventListener("click", function () {

        reactionEmoji.textContent = "😭😭";

        reactionTitle.textContent =
            "BUT I DOOO 😭";

        reactionMessage.textContent =
            "But I dooooo... *fake cries dramatically* 😭";

        reactionOverlay.classList.remove("hidden");

    });


    /* =========================================
       CLOSE POPUP
    ========================================= */

    reactionBackButton.addEventListener("click", function () {

        reactionOverlay.classList.add("hidden");

    });


    /* =========================================
       FINAL QUESTION
    ========================================= */

    /*
       FRIEND:
       Do NOT continue.
       Show the funny response instead.
    */

    friendButton.addEventListener("click", function () {

        reactionEmoji.textContent = "😉";

        reactionTitle.textContent =
            "I AM NOT HIM";

        reactionMessage.textContent =
            "I am not him (R) 😉";

        reactionOverlay.classList.remove("hidden");

    });


    /*
       When she clicks "Go back",
       the popup disappears and the
       FINAL QUESTION is still underneath.
    */


    /*
       BOYFRIEND:
       This is the ONLY answer that
       continues to the next stage.
    */

    boyfriendButton.addEventListener("click", function () {

        showFinalReaction(
            "😏",
            "YES, I AM BABYGIRL",
            "Yes, I am Babygirl 😏"
        );

    });


    /* =========================================
       FINAL REACTION
    ========================================= */

    function showFinalReaction(
        emoji,
        title,
        message
    ) {

        finalEmoji.textContent = emoji;

        finalTitle.textContent = title;

        finalMessage.textContent = message;

        showScreen(finalReaction);
    }


    /* =========================================
       CONTINUE
    ========================================= */

    continueButton.addEventListener("click", function () {

        continueButton.textContent =
            "Loading... ✨";

        continueButton.disabled = true;

        document.body.classList.add(
            "page-changing"
        );

        setTimeout(function () {

            window.location.href =
                "page5.html";

        }, 700);

    });

});