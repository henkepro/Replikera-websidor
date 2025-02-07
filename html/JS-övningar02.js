document.addEventListener("DOMContentLoaded", () => {
    let button01 = document.getElementById("button01");
    let background01 = document.getElementById("Background");

    button01.addEventListener("click", () => {
        // Generate a random color
        let randomColor = getRandomColor();
        background01.style.backgroundColor = randomColor;
    });

    // Function to generate a random color
    function getRandomColor() {
        // Generate a random hex color
        let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        return randomColor;
    }
});
