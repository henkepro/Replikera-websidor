document.addEventListener("DOMContentLoaded", () => {
    let result = document.getElementById("result01");
    let paragraf = document.getElementById("paragraf01");
    let input = document.getElementById("input01");
    let button1 = document.getElementById("button01");
    let button2 = document.getElementById("button02");

    //Predefined class
    let car = {
        brand: "Nissan",
        model: "Toyota",
        year: "1995",

        thisCar: function() {
            return `Mark: ${this.brand}
            model: ${this.model}
            year: ${this.year}`;
        }
    }

    console.log(car.thisCar());


    //Anonym class
    function Car(brand, model, year){
        this.brand = brand;
        this.model = model;
        this.year = year;

        this.getInfo = function() {
            return `Mark: ${this.brand}
            model: ${this.model}
            year: ${this.year}`;
        }
    }

    let myCar = new Car("Volvo", "740", 1990)
    console.log(myCar.getInfo());
});