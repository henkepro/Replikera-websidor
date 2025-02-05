document.addEventListener("DOMContentLoaded", () => {
    let result = document.getElementById("result01");
    let input = document.getElementById("input01");
    let button = document.getElementById("button01");
    let int01 = 0;

    button.addEventListener("click", () => {
        int01 = Math.floor(Math.random() * 11);
    })
    input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            let userInput = parseInt(input.value);

            if (userInput > int01) {
                result.innerText = `Your input ${userInput} is higher than...`;
            } else if (userInput < int01) {
                result.innerText = `Your input ${userInput} is lower than...`;
            } else if (userInput === int01) {
                result.innerText = `Your input ${userInput} is the same!`;
            }
        }
    });
});