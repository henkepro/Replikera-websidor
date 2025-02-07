document.addEventListener("DOMContentLoaded", () => {
    let result = document.getElementById("result01");
    let paragraf = document.getElementById("paragraf01");
    let input = document.getElementById("input01");
    let button1 = document.getElementById("button01");
    let button2 = document.getElementById("button02");

    //Predefined class
    let student = {
        name: "Henrik",
        age: "30",

        thisCar: function() {
            return `
            name: ${this.name}
            age: ${this.age}
            `;
        }
    }

    student.name = "Fredrik";
    student.age = "15";
    student.course = "C#"

    student.thisCar = function() {
        return `
            name: ${this.name}
            age: ${this.age}
            course: ${this.course}
        `;
    };

    console.log(student.thisCar());
});