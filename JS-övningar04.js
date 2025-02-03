document.addEventListener("DOMContentLoaded", () => {
    let button01 = document.getElementById("button01");
    let result = document.getElementById("result");
    let input01 = document.getElementById("input01");
    let input02 = document.getElementById("input02");
    let operator = document.getElementById("operator");

    button01.addEventListener("click", () => {
        // Get the values from the inputs
        let int1 = parseFloat(input01.value);  // Convert the first input to a number
        let int2 = parseFloat(input02.value);  // Convert the second input to a number
        let op = operator.value;  // Get the operator value (e.g., +, -, *, /)

        let resultValue;

        // Perform the operation based on the operator
        switch(op) {
            case "+":
                resultValue = int1 + int2;
                break;
            case "-":
                resultValue = int1 - int2;
                break;
            case "*":
                resultValue = int1 * int2;
                break;
            case "/":
                resultValue = int1 / int2;
                break;
            default:
                resultValue = "Invalid operator";
        }

        // Display the result
        result.innerText = resultValue;
    });
});
