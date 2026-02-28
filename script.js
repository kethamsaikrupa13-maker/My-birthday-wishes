
let sec1 = document.getElementById("section1");
let sec2 = document.getElementById("section2");
let sec3 = document.getElementById("section3");
let sec4 = document.getElementById("section4");
let sec5 = document.getElementById("section5");

// Hide all sections except first
sec2.style.display = "none";
sec3.style.display = "none";
sec4.style.display = "none";
sec5.style.display = "none";

// Button 1 → Show Section 2
document.getElementById("but1").addEventListener("click", function () {
    sec1.style.display = "none";
    sec2.style.display = "block";
});

// Button 2 → Show Section 3
document.getElementById("but2").addEventListener("click", function () {
    sec2.style.display = "none";
    sec3.style.display = "block";
});

// Button 3 → Show Section 4
document.getElementById("but3").addEventListener("click", function () {
    sec3.style.display = "none";
    sec4.style.display = "block";
});

// Button 4 → Show Section 5
document.getElementById("but4").addEventListener("click", function () {
    sec4.style.display = "none";
    sec5.style.display = "block";
});



