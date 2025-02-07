document.addEventListener("DOMContentLoaded", () => {
    let button01 = document.getElementById("button01");
    let result = document.getElementById("result");
    let input = document.getElementById("input01");

    button01.addEventListener("click", () => {

        let int01 = parseInt(input.value);

        for (let i = 1; i <= 10; i++) {
            let newHeader = document.createElement("h1");  // Create a new <h1> element
            newHeader.innerText = int01 * i;  // Set the text inside the <h1> element to the current number (i)
            document.body.appendChild(newHeader);  // Append the new header to the body of the document
        }
    });
});