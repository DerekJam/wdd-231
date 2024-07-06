document.addEventListener("DOMContentLoaded", function () {
    fetch('chamber/data.json')
        .then(response => response.json())
        .then(data => {
            const dataDisplay = document.getElementById("dataDisplay");

           
        })
        .catch(error => console.error("Error fetching JSON data:", error));
});