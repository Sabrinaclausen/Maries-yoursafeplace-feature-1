// Kør script når DOM'en er klar
document.addEventListener("DOMContentLoaded", () => {

    // Elementer bruges til at styre vis/skjul af knappen
    const backBtn = document.querySelector(".back-btn");
    const wrapper = document.querySelector(".wrapper");
    const allergener = document.querySelector(".allergener-box");

    // Funktion der viser/skjuler knappen
    function updateBackBtn() {

        // Wrapperens position ift. toppen
        const wrapperTop = wrapper.getBoundingClientRect().top;

        // Allergener-sektionens position
        const allergenerTop = allergener.getBoundingClientRect().top;

        // Vis knappen når der er scrollet forbi starten af wrapper
        const shouldShow = wrapperTop < 100;

        // Skjul knappen når allergener nærmer sig
        const passedAllergener = allergenerTop <= 300;

        // Logik: vis kun når man er scrollet ned, og allergener ikke er tæt på
        if (shouldShow && !passedAllergener) {
            backBtn.classList.add("visible");
        } else {
            backBtn.classList.remove("visible");
        }
    }

    // Opdater ved scroll
    window.addEventListener("scroll", updateBackBtn, { passive: true });

    // Opdater ved første load
    updateBackBtn();
});


