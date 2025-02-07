document.addEventListener("DOMContentLoaded", () => {
    let result = document.getElementById("result01");
    let paragraf = document.getElementById("paragraf01");
    let input = document.getElementById("input01");
    let button1 = document.getElementById("button01");
    let button2 = document.getElementById("button02");

    let myFruitArray = ["Banana", "Apple", "Pineapple", "Kiwi"]

    myFruitArray.push("Orange");
    myFruitArray.shift();
    myFruitArray.sort();
    
    console.log(myFruitArray);
});