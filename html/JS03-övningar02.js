document.addEventListener("DOMContentLoaded", () => {
    let result = document.getElementById("result01");
    let input = document.getElementById("input01");
    let button1 = document.getElementById("button01");
    let button2 = document.getElementById("button02");

    // When button1 is clicked, append the input value as a text node
    button1.addEventListener("click", () => {
        if(input.value.length > 0){
            let listx = document.createElement("li");
            listx.innerText = input.value;
            result.appendChild(listx);
            input.value = ""; // Optionally clear the input field after appending
        }
    });

    // When button2 is clicked, remove the last child if exists
    button2.addEventListener("click", () => {
        if (result.lastChild) {
            result.removeChild(result.lastChild);
        }
    });
});
