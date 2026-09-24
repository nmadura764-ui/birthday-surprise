window.addEventListener("load", function () {
    document.body.classList.add("page-loaded");
});
document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       CHOICE BUTTONS
    ========================================== */

    const letterChoice =
        document.getElementById("letterChoice");

    const cameraChoice =
        document.getElementById("cameraChoice");

    const giftChoice =
        document.getElementById("giftChoice");


    /* =========================================
       LETTER
    ========================================== */

    const letterOverlay =
        document.getElementById("letterOverlay");

    const closeLetter =
        document.getElementById("closeLetter");


    letterChoice.addEventListener("click", function () {

        letterOverlay.classList.remove("hidden");

    });


    closeLetter.addEventListener("click", function () {

        letterOverlay.classList.add("hidden");

    });


    /* =========================================
       MEMORIES
    ========================================== */

    const memoriesOverlay =
        document.getElementById("memoriesOverlay");

    const closeMemories =
        document.getElementById("closeMemories");


    cameraChoice.addEventListener("click", function () {

        memoriesOverlay.classList.remove("hidden");

    });


    closeMemories.addEventListener("click", function () {

        memoriesOverlay.classList.add("hidden");

    });


    /* =========================================
       GIFT
    ========================================== */

    const fingerStartOverlay =
        document.getElementById("fingerStartOverlay");

    const fingerStartButton =
        document.getElementById("fingerStartButton");


    const contractOverlay =
        document.getElementById("contractOverlay");


    giftChoice.addEventListener("click", function () {

        fingerStartOverlay.classList.remove(
            "hidden"
        );

    });


    fingerStartButton.addEventListener(
        "click",
        function () {

            fingerStartOverlay.classList.add(
                "hidden"
            );

            contractOverlay.classList.remove(
                "hidden"
            );

        }
    );


    /* =========================================
       FAKE FINGERPRINT
    ========================================== */

    const fingerprintCircle =
        document.getElementById(
            "fingerprintCircle"
        );

    const fingerIcon =
        document.getElementById(
            "fingerIcon"
        );

    const fingerprintLines =
        document.getElementById(
            "fingerprintLines"
        );

    const scannerText =
        document.getElementById(
            "scannerText"
        );


    fingerprintCircle.addEventListener(
        "click",
        function () {

            fingerprintCircle.classList.add(
                "active"
            );

            fingerIcon.classList.add(
                "hidden"
            );

            fingerprintLines.classList.remove(
                "hidden"
            );

            scannerText.textContent =
                "VERIFIED ✓";

        }
    );


    /* =========================================
       CLOSE CONTRACT
    ========================================== */

    const closeContract =
        document.getElementById("closeContract");


    closeContract.addEventListener(
        "click",
        function () {

            contractOverlay.classList.add(
                "hidden"
            );

        }
    );


    /* =========================================
       CLOSE OVERLAYS BY CLICKING OUTSIDE
    ========================================== */

    letterOverlay.addEventListener(
        "click",
        function (event) {

            if (event.target === letterOverlay) {

                letterOverlay.classList.add(
                    "hidden"
                );

            }

        }
    );


    memoriesOverlay.addEventListener(
        "click",
        function (event) {

            if (event.target === memoriesOverlay) {

                memoriesOverlay.classList.add(
                    "hidden"
                );

            }

        }
    );

});
const nextPageButton = document.getElementById("nextPageButton");

if (nextPageButton) {
    nextPageButton.addEventListener("click", () => {

        document.body.classList.add("page-leaving");

        setTimeout(() => {
            window.location.href = "page7.html";
        }, 800);

    });
}