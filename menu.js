// Når hele HTML-strukturen er indlæst, kører scriptet
document.addEventListener("DOMContentLoaded", () => {

    // Henter "til top" knappen
    const backBtn = document.querySelector(".back-btn");

    // Henter wrapperen (bruges til at vide hvornår man er scrollet ned)
    const wrapper = document.querySelector(".wrapper");

    // Henter allergener-sektionen (bruges til at vide hvornår knappen skal forsvinde)
    const allergener = document.querySelector(".allergener-box");

    // Funktion der styrer om knappen skal vises eller skjules
    function updateBackBtn() {

        // Finder wrapperens afstand fra toppen af skærmen
        // Når værdien er negativ, betyder det at man er scrollet forbi wrapperens top
        const wrapperTop = wrapper.getBoundingClientRect().top;

        // Finder allergener-sektionens afstand fra toppen af skærmen
        const allergenerTop = allergener.getBoundingClientRect().top;

        // Viser knappen når brugeren har scrollet lidt forbi toppen (fx -80px)
        const shouldShow = wrapperTop < -80;

        // Når allergener-toppen kommer inden for 300px af toppen af skærmen
        // = knappen skal forsvinde lige før allergener-sektionen begynder
        const passedAllergener = allergenerTop <= 300;

        // Logikken for at vise/skjule knappen:
        // Vis knappen hvis man er scrollet ned (shouldShow = true)
        // OG allergener ikke er tæt på (passedAllergener = false)
        if (shouldShow && !passedAllergener) {
            backBtn.classList.add("visible");   // gør knappen synlig
        } else {
            backBtn.classList.remove("visible"); // skjul knappen
        }
    }

    // Når brugeren scroller, opdateres knappen (med passive for bedre performance)
    window.addEventListener("scroll", updateBackBtn, { passive: true });

    // Kør funktionen én gang ved load, i tilfælde af at man åbner siden midt på den
    updateBackBtn();
});

