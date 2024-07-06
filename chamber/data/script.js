document.addEventListener("DOMContentLoaded", function () {
    fetch('chamber/data.json')
        .then(response => response.json())
        
        .catch(error => console.error("Error fetching JSON data:", error));
});