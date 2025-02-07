document.addEventListener("DOMContentLoaded", () => {
    let button01 = document.getElementById("button01");
    let text = document.getElementById("text");
    let counter = 0;

    button01.addEventListener("click", () => {
        counter++;
        text.innerText = counter;
    });
});
