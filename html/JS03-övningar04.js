document.addEventListener("DOMContentLoaded", () => {
    let result = document.getElementById("result01");
    let paragraf = document.getElementById("paragraf01");
    let input = document.getElementById("input01");
    let button1 = document.getElementById("button01");
    let button2 = document.getElementById("button02");

    button1.addEventListener("click", () => {
        
        let currentFontSize = window.getComputedStyle(paragraf).fontSize;
        currentFontSize = parseInt(currentFontSize);
        
        currentFontSize += 5; 
        paragraf.style.fontSize = currentFontSize + "px";
    });

    button2.addEventListener("click", () => {
        
        let currentFontSize = window.getComputedStyle(paragraf).fontSize;
        currentFontSize = parseInt(currentFontSize);
        
        currentFontSize -= 5; 
        paragraf.style.fontSize = currentFontSize + "px";
    });

});
