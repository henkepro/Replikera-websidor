document.addEventListener("DOMContentLoaded", () => {
    let result = document.getElementById("result01");
    let paragraf = document.getElementById("paragraf01");
    let input = document.getElementById("input01");
    let button1 = document.getElementById("button01");
    let button2 = document.getElementById("button02");

    class Animal {
        constructor(name, race){
            this.name = name;
            this.race = race;
        }

        Describe(){
            return `
            name: ${this.name}
            race: ${this.race}
            `
        }
    }

    let myCat = new Animal("Jackson", "Cat");
    let myDog = new Animal("Athena", "Dog");

    console.log(myCat.Describe());
    console.log(myDog.Describe());
});