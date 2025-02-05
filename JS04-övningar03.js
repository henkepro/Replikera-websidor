document.addEventListener("DOMContentLoaded", () => {
    let result = document.getElementById("result01");
    let paragraf = document.getElementById("paragraf01");
    let input = document.getElementById("input01");
    let button1 = document.getElementById("button01");
    let button2 = document.getElementById("button02");

    function Person(name, age){
        this.name = name;
        this.age = age;

        this.returnName = function() {
            return `
            name: ${this.name}
            age: ${this.age}
            `;
        }
    };

    let newPerson = new Person("Henrik", "Vu");
    console.log(newPerson.returnName());
});