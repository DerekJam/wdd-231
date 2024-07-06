document.addEventListener("DOMContentLoaded", function () {
    fetch('https://derekjam.github.io/WDD231/chamber/data/members.json')
        .then(response => response.json())
        .then(data => {
            const dataDisplay = document.getElementById("col-container2");

            // Create HTML elements to display the JSON data
            const nameElement = document.createElement("p");
            nameElement.textContent = "Name: " + data.name;

            const ageElement = document.createElement("p");
            ageElement.textContent = "Age: " + data.age;

            const cityElement = document.createElement("p");
            cityElement.textContent = "City: " + data.city;

            // Append the elements to the "dataDisplay" div
            dataDisplay.appendChild(nameElement);
            dataDisplay.appendChild(ageElement);
            dataDisplay.appendChild(cityElement);
        })
        .catch(error => console.error("Error fetching JSON data:", error));
});
