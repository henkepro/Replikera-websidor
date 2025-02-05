document.addEventListener("DOMContentLoaded", () => {
    let result = document.getElementById("result01");
    let paragraf = document.getElementById("paragraf01");
    let input = document.getElementById("input01");
    let button1 = document.getElementById("button01");
    let button2 = document.getElementById("button02");

    function getCurrentDate(){
        let currentDate = new Date();
        
        // Arrays to map days and months in Swedish
        let daysOfWeek = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];
        let monthsOfYear = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"];

        // Get the current day, month, and year
        let dayOfWeek = daysOfWeek[currentDate.getDay()];
        let dayOfMonth = currentDate.getDate();
        let month = monthsOfYear[currentDate.getMonth()];
        let year = currentDate.getFullYear();

        // Return the formatted string
        return `${dayOfWeek}, ${dayOfMonth} ${month} ${year}`;
    }
    
    console.log(getCurrentDate());

    let today = new Date();
    console.log(today.toLocaleDateString());
});