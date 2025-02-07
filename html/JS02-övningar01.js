document.addEventListener("DOMContentLoaded", () => {
    let button01 = document.getElementById("button01");
    let result = document.getElementById("result");
    let input = document.getElementById("input01");

    button01.addEventListener("click", () => {
        switch(parseInt(input.value)) {
            case 1:
                result.textContent = "Monday";
                break;
            case 2:
                result.textContent = "Tuesday";
                break;
            case 3:
                result.textContent = "Wednesday";
                break;
            case 4:
                result.textContent = "Thursday";
                break;
            case 5:
                result.textContent = "Friday";
                break;
            case 6:
                result.textContent = "Saturday";
                break;
            case 7:
                result.textContent = "Sunday";
                break;
            default:
                break;
        }
    });
});