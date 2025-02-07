let input1 = document.getElementById("input01");
let button1 = document.getElementById("button01");
button1.addEventListener("click", fetchData);
input1.addEventListener("keydown", handleKeyDown);
// input1.addEventListener("keydown", (event) => {
//     if (event.key === "Enter") {
//         fetchData();
//     }
// });

function handleKeyDown(input) {
    if (input.key === "Enter") {
        fetchData();
    }
}

function fetchData(){
    let tempInput = input1.value.trim();
    console.log("Search Query:", tempInput);
    if (!tempInput) {
        document.getElementById("getResult").innerText = "Please enter a valid meal name.";
        return;
    }
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${tempInput}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Clean the data by removing keys with null, empty, or blank space values
            // const cleanedData = cleanData(data);

            // Show the cleaned data
            document.getElementById("getResult").innerText = JSON.stringify(data, null, 2);
        })
        .catch(error => console.error("Fel vid hämtning", error));
}






// function cleanData(obj) {
//     // Create a new object to store the cleaned data
//     const cleaned = {};

//     for (const key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             const value = obj[key];

//             // Check if the value is an array (like ingredients or measurements) and clean it
//             if (Array.isArray(value)) {
//                 // Filter out empty strings, null, or undefined values from the array
//                 const cleanedArray = value.filter(item => {
//                     // Check if the item is a string and not empty
//                     return item && (typeof item !== 'string' || item.trim() !== "");
//                 });

//                 if (cleanedArray.length > 0) cleaned[key] = cleanedArray;
//             }
//             // For regular properties, filter out null or empty values
//             else if (value !== null && value !== "" && (typeof value !== 'string' || value.trim() !== "")) {
//                 cleaned[key] = value;
//             }
//         }
//     }
//     return cleaned;
// }



