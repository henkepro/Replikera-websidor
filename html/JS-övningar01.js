document.addEventListener("DOMContentLoaded", () => {
    let inputx = document.getElementById("input01");
    let button01 = document.getElementById("button01");
    let paragraf = document.getElementById("paragraf1");

    button01.addEventListener("click", () => {
        let newText = inputx.value;

        if(newText.trim() !== "") {
            paragraf.innerText = `Welcome ${newText}!`;
            inputx.value = "";
        }
    });
});


