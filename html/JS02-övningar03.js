document.addEventListener("DOMContentLoaded", () => {
    let button01 = document.getElementById("button01");
    let result = document.getElementById("result");
    let input = document.getElementById("input01");

    button01.addEventListener("click", () => {

        let int01 = parseInt(input.value);

        for (let i = 1; i <= int01; i++) {
            let newHeader = document.createElement("p");  // Create a new <h1> element
            if(i % 5 == 0 && i % 3 == 0){
                newHeader.innerText = "fizzbuzz";
            }
            else if(i % 3 == 0){
                newHeader.innerText = "fizz";
            }
            else if(i % 5 == 0){
                newHeader.innerText = "buzz";
            }
            else {
                newHeader.innerText = i;
            }
            document.body.appendChild(newHeader);  // Append the new header to the body of the document
        }
    });
});