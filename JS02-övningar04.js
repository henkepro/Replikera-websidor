document.addEventListener("DOMContentLoaded", () => {
    let button01 = document.getElementById("button01");
    let result = document.getElementById("result");
    let input01 = document.getElementById("input01");

    button01.addEventListener("click", () => {
        let int01 = 0;

        for (const char of input01.value.toLowerCase()) {
            switch(char) {
                case "a":
                case "e":
                case "i":
                case "o":
                case "u":
                case "y":
                    int01 += 1;  
                    break;
                default:
                    break;
            }
        }

        result.innerText = `Vowel count: ${int01}`;
    });
});

// document.addEventListener("DOMContentLoaded", () => {
//     let button01 = document.getElementById("button01");
//     let result = document.getElementById("result");
//     let input01 = document.getElementById("input01");

//     button01.addEventListener("click", () => {
//         let int01 = 0;

//         // Convert input to lowercase for case-insensitive comparison
//         let inputText = input01.value.toLowerCase();

//         // Loop over each character in the input text
//         for (const char of inputText) {
//             // Check if the character is one of the vowels using .includes()
//             if ("aeiouy".includes(char)) {
//                 int01++;  // Increment the vowel count directly
//             }
//         }

//         // Display the result in the result element
//         result.innerText = `Vowel count: ${int01}`;
//     });
// });
