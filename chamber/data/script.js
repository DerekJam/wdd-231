document.addEventListener("DOMContentLoaded", function () {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const dataDisplay = document.getElementById("dataDisplay");

            // Create HTML elements to display the JSON data
            const nameElement = document.createElement("p");
            nameElement.textContent = "Name: " + data.name;

            const addressElement = document.createElement("p");
            addressElement.textContent = "Address: " + data.address;

            const phoneElement = document.createElement("p");
            phoneElement.textContent = "Phone: " + data.phone;

            const websiteElement = document.createElement("p");
            websiteElement.textContent = "Website: " + data.website;

            // Append the elements to the "dataDisplay" div
            dataDisplay.appendChild(nameElement);
            dataDisplay.appendChild(addressElement);
            dataDisplay.appendChild(phoneElement);
            dataDisplay.appendChild(websiteElement);
        })
        .catch(error => console.error("Error fetching JSON data:", error));
});
