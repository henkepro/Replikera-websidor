document.addEventListener("DOMContentLoaded", () => {
    let result = document.getElementById("result01");
    let paragraf = document.getElementById("paragraf01");
    let input = document.getElementById("input01");
    let button1 = document.getElementById("button01");
    let button2 = document.getElementById("button02");

    // When button1 is clicked, append the input value as a text node
    button1.addEventListener("click", () => {
        paragraf.classList.toggle("hidden");
    });

});
