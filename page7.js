window.addEventListener("load", () => {
    document.body.classList.add("page-loaded");
});
document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       PASSWORD
    ========================================== */

    const correctPassword = "07062007";

    let enteredPassword = "";


    /* =========================================
       ELEMENTS
    ========================================== */

    const numberButtons =
        document.querySelectorAll(
            ".number-pad button[data-number]"
        );

    const codeDisplay =
        document.getElementById(
            "codeDisplay"
        );

    const clearButton =
        document.getElementById(
            "clearButton"
        );

    const enterButton =
        document.getElementById(
            "enterButton"
        );


    const hintPaper =
        document.getElementById(
            "hintPaper"
        );


    const wrongPopup =
        document.getElementById(
            "wrongPopup"
        );

    const wrongOkay =
        document.getElementById(
            "wrongOkay"
        );


    const angryMessage =
        document.getElementById(
            "angryMessage"
        );


    const successOverlay =
        document.getElementById(
            "successOverlay"
        );


    const nextButton =
        document.getElementById(
            "nextButton"
        );


    /* =========================================
       UPDATE DISPLAY
    ========================================== */

    function updateDisplay() {

        const slots =
            codeDisplay.querySelectorAll(
                "span"
            );


        slots.forEach(
            function (slot, index) {

                if (
                    index <
                    enteredPassword.length
                ) {

                    slot.textContent = "•";

                } else {

                    slot.textContent = "_";

                }

            }
        );

    }


    /* =========================================
       NUMBER BUTTONS
    ========================================== */

    numberButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    if (
                        enteredPassword.length >= 8
                    ) {
                        return;
                    }


                    enteredPassword +=
                        button.dataset.number;


                    updateDisplay();

                }
            );

        }
    );


    /* =========================================
       CLEAR
    ========================================== */

    clearButton.addEventListener(
        "click",
        function () {

            enteredPassword = "";

            updateDisplay();

            hintPaper.classList.add(
                "hidden"
            );

        }
    );


    /* =========================================
       ENTER
    ========================================== */

    enterButton.addEventListener(
        "click",
        function () {

            if (
                enteredPassword ===
                correctPassword
            ) {

                correctAnswer();

            } else {

                wrongAnswer();

            }

        }
    );


    /* =========================================
       WRONG PASSWORD
    ========================================== */

    function wrongAnswer() {

        enteredPassword = "";

        updateDisplay();


        /* Doraemon becomes angry */

        angryMessage.classList.remove(
            "hidden"
        );


        /* Show wrong popup */

        wrongPopup.classList.remove(
            "hidden"
        );


        /* Show hint */

        setTimeout(
            function () {

                hintPaper.classList.remove(
                    "hidden"
                );

            },
            450
        );

    }


    /* =========================================
       CLOSE WRONG POPUP
    ========================================== */

    wrongOkay.addEventListener(
        "click",
        function () {

            wrongPopup.classList.add(
                "hidden"
            );

        }
    );


    /* =========================================
       CORRECT PASSWORD
    ========================================== */

    function correctAnswer() {

        /* Hide hint */

        hintPaper.classList.add(
            "hidden"
        );


        /* Hide angry face */

        angryMessage.classList.add(
            "hidden"
        );


        /* Show success */

        successOverlay.classList.remove(
            "hidden"
        );

    }


    /* =========================================
       NEXT PAGE
    ========================================== */

    nextButton.addEventListener(
        "click",
        function () {

            nextButton.textContent =
                "Opening... ✨";

            nextButton.disabled = true;


            document.body.style.opacity =
                "0";


            document.body.style.transition =
                "opacity 0.7s ease";


            setTimeout(
                function () {

                    window.location.href =
                        "page8.html";

                },
                700
            );

        }
    );

});