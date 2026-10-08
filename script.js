/* =========================================================
   KLR PHASE 3 — INDEPENDENT TRIPLEX
   Website interactions
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const modal = document.getElementById("tourModal");
    const openButton = document.getElementById("openTour");
    const closeButton = document.getElementById("closeTour");

    const modalVideo = modal
        ? modal.querySelector("video")
        : null;


    /* ---------------------------------------------------------
       OPEN PROPERTY TOUR
       --------------------------------------------------------- */

    if (openButton && modal) {

        openButton.addEventListener("click", function () {

            modal.classList.add("active");

            document.body.style.overflow = "hidden";

            if (modalVideo) {
                modalVideo.currentTime = 0;

                const playPromise = modalVideo.play();

                if (playPromise !== undefined) {
                    playPromise.catch(function () {
                        // Browser may require the visitor
                        // to press play manually.
                    });
                }
            }

        });

    }


    /* ---------------------------------------------------------
       CLOSE PROPERTY TOUR
       --------------------------------------------------------- */

    function closeTour() {

        if (!modal) {
            return;
        }

        modal.classList.remove("active");

        document.body.style.overflow = "";

        if (modalVideo) {
            modalVideo.pause();
            modalVideo.currentTime = 0;
        }

    }


    if (closeButton) {

        closeButton.addEventListener("click", closeTour);

    }


    /* ---------------------------------------------------------
       CLOSE WHEN CLICKING OUTSIDE VIDEO
       --------------------------------------------------------- */

    if (modal) {

        modal.addEventListener("click", function (event) {

            if (event.target === modal) {
                closeTour();
            }

        });

    }


    /* ---------------------------------------------------------
       CLOSE WITH ESCAPE KEY
       --------------------------------------------------------- */

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {
            closeTour();
        }

    });


    /* ---------------------------------------------------------
       SMOOTH NAVIGATION
       --------------------------------------------------------- */

    const navigationLinks =
        document.querySelectorAll('a[href^="#"]');


    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });

});
