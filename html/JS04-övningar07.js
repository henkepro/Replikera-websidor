document.addEventListener("DOMContentLoaded", () => {
    let result = document.getElementById("result01");
    let paragraf = document.getElementById("paragraf01");
    let input = document.getElementById("input01");
    let button1 = document.getElementById("button01");
    let button2 = document.getElementById("button02");

    function formatText01(text){
        this.text = text.toUpperCase();
        this.text = this.text.replace(" ", "-");
        this.returnText = function(){
            return `
            formattet text: ${this.text}
            `
        }
    }

    function formatText02(text){
        this.text = text.toUpperCase().replace(" ", "-");
        this.returnText = function(){
            return `
            formattet text: ${this.text}
            `
        }
    }

    let newText1 = new formatText01("Din mamma");
    console.log(newText1.returnText());

    let newText2 = new formatText02("Din mamma");
    console.log(newText2.returnText());
});