document.addEventListener("DOMContentLoaded", function () {

    function scrollToSection(sectionId) {
        document.getElementById(sectionId).scrollIntoView({
            behavior: "smooth"
        });
    }

    document.getElementById("btn1").onclick = () => scrollToSection("section2");
    document.getElementById("btn2").onclick = () => scrollToSection("section3");
    document.getElementById("btn3").onclick = () => scrollToSection("section4");
    document.getElementById("btn4").onclick = () => scrollToSection("section5");

    const celebrateBtn = document.getElementById("celebrateBtn");
    const music = document.getElementById("bgMusic");

    celebrateBtn.addEventListener("click", function () {

        // 🎵 Play Music
        music.currentTime = 0;

        music.play().then(() => {
            console.log("Music Playing...");
        }).catch(error => {
            alert("Check if uppena.mp3 file is in same folder!");
            console.log(error);
        });

        // 🎆 Confetti
        var duration = 5 * 1000;
        var end = Date.now() + duration;

        (function frame() {
            confetti({
                particleCount: 6,
                spread: 70,
                origin: { y: 0.6 }
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        })();
    });
});







