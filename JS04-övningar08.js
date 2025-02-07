document.addEventListener("DOMContentLoaded", () => {
    let result = document.getElementById("result01");
    let paragraf = document.getElementById("paragraf01");
    let input = document.getElementById("input01");
    let button1 = document.getElementById("button01");
    let button2 = document.getElementById("button02");

    const myObject = {
        name: "Fruit",
        price: 50,
    }

// Convert the object to a JSON string
let myObjectAsJson = JSON.stringify(myObject);
console.log("JSON string:", myObjectAsJson);  // Logs the JSON string

// Parse the JSON string back into an object
let parsedObject = JSON.parse(myObjectAsJson);
console.log("Parsed object:", parsedObject);  // Logs the parsed object
});