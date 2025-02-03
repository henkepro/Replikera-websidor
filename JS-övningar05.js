document.addEventListener("DOMContentLoaded", () => {
    let button01 = document.getElementById("button01");
    let result = document.getElementById("result");

    button01.addEventListener("click", () => {
        let randomColor = getRandomColor();
        let fontsize = parseInt(result.style.fontSize) || 16;  // Default to 16px if no font size is set
        result.style.fontSize = (fontsize + 50) + "px";  // Increase font size by 50px
        result.style.color = randomColor;
    });
    
    function getRandomColor() {
        // Generate a random hex color
        let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        return randomColor;
    }
});