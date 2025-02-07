document.addEventListener("DOMContentLoaded", () => {
    let result = document.getElementById("result01");
    let paragraf = document.getElementById("paragraf01");
    let input = document.getElementById("input01");
    let button1 = document.getElementById("button01");
    let button2 = document.getElementById("button02");

    function MathRandom(min, max){
        this.min = min;
        this.max = max;

        this.GetValues = function(){
            let result01 = Math.floor(Math.random() * (max - min + 1)) + min;
            return `
            Result was: ${result01}
            Min number was: ${this.min}
            Max number was: ${this.max}`
        }
    }

    let xMath = new MathRandom(1, 100);
    console.log(xMath.GetValues());
});