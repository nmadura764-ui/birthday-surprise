window.addEventListener("load", () => {
    document.body.classList.add("page-loaded");
});
document.addEventListener("DOMContentLoaded", function () {

    const darkIntro =
        document.getElementById("darkIntro");

    const celebration =
        document.getElementById("celebration");

    const wishMessage =
        document.getElementById("wishMessage");

    const afterWish =
        document.getElementById("afterWish");

    const birthdayVoice =
        document.getElementById("birthdayVoice");

    const confettiContainer =
        document.getElementById(
            "confettiContainer"
        );

    const candles =
        document.querySelectorAll(".candle");


    let candlesBlown = false;


    /* =========================================
       5 SECOND DARKNESS
    ========================================== */

    setTimeout(function () {

        darkIntro.style.opacity = "0";

        celebration.classList.add("lit");

        setTimeout(function () {

            darkIntro.style.visibility =
                "hidden";

        }, 1500);

    }, 5000);


    /* =========================================
       WISH + VOICE AFTER 5 MORE SECONDS
    ========================================== */

    setTimeout(function () {

        wishMessage.classList.remove(
            "hidden"
        );


        /*
         * Browsers may block automatic
         * audio playback until the user
         * interacts with the page.
         */

        birthdayVoice.play().catch(function () {

            console.log(
                "Audio autoplay was blocked. " +
                "The user can tap the page to start it."
            );

        });

    }, 10000);


    /* =========================================
       START AUDIO IF AUTOPLAY IS BLOCKED
    ========================================== */

    document.addEventListener(
        "click",
        function startVoice() {

            if (
                birthdayVoice.paused &&
                birthdayVoice.currentTime === 0
            ) {

                birthdayVoice.play().catch(
                    function () {}
                );

            }

        },
        { once: true }
    );


    /* =========================================
       CANDLE CLICK
    ========================================== */

    candles.forEach(function (candle) {

        candle.addEventListener(
            "click",
            function () {

                if (candlesBlown) {
                    return;
                }


                candle.classList.add("off");


                /*
                 * Check whether all
                 * three candles are off.
                 */

                const allOff =
                    Array.from(candles)
                        .every(function (item) {

                            return item.classList.contains(
                                "off"
                            );

                        });


                if (allOff) {

                    candlesBlown = true;

                    candleCelebration();

                }

            }
        );

    });


    /* =========================================
       FINAL CELEBRATION
    ========================================== */

    function candleCelebration() {

        createConfetti();


        setTimeout(function () {

            afterWish.classList.remove(
                "hidden"
            );

        }, 700);

    }


    /* =========================================
       CONFETTI
    ========================================== */

    function createConfetti() {

        confettiContainer.innerHTML = "";


        const pieces = 150;


        for (
            let i = 0;
            i < pieces;
            i++
        ) {

            const piece =
                document.createElement(
                    "div"
                );


            piece.className =
                "confetti";


            piece.style.left =
                Math.random() * 100 + "%";


            piece.style.background =
                getConfettiColor();


            piece.style.setProperty(
                "--fall-time",
                (2 + Math.random() * 3) + "s"
            );


            piece.style.transform =
                "rotate(" +
                Math.random() * 360 +
                "deg)";


            piece.style.animationDelay =
                Math.random() * 0.8 +
                "s";


            confettiContainer.appendChild(
                piece
            );

        }

    }


    /* =========================================
       CONFETTI COLORS
    ========================================== */

    function getConfettiColor() {

        const colors = [

            "#f3a9c5",
            "#d9b7e5",
            "#f7d48c",
            "#b9dce5",
            "#efb7a7",
            "#c8b7e8"

        ];


        return colors[
            Math.floor(
                Math.random() *
                colors.length
            )
        ];

    }

});