document.addEventListener("DOMContentLoaded", function () {

    function scrollToSection(sectionId) {
        document.getElementById(sectionId).scrollIntoView({
            behavior: "smooth"
        });
    }

    document.getElementById("btn1").addEventListener("click", function () {
        scrollToSection("section2");
    });

    document.getElementById("btn2").addEventListener("click", function () {
        scrollToSection("section3");
    });

    document.getElementById("btn3").addEventListener("click", function () {
        scrollToSection("section4");
    });

    document.getElementById("btn4").addEventListener("click", function () {
        scrollToSection("section5");
    });

});







