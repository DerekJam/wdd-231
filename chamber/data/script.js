document.addEventListener("DOMContentLoaded", function () {
    fetch('data/members.json')
        .then(response => response.json())
        .then(data => {
            const dataDisplay = document.getElementById("dataDisplay");

            // Create HTML elements to display the JSON data
            const nameElement = document.createElement("p");
            nameElement.textContent = "Name: " + members.name;

            const addressElement = document.createElement("p");
            addressElement.textContent = "Address: " + members.address;

            const phoneElement = document.createElement("p");
            phoneElement.textContent = "Phone: " + members.phone;

            const websiteElement = document.createElement("p");
            websiteElement.textContent = "Website: " + members.website;

            // Append the elements to the "dataDisplay" div
            membersDisplay.appendChild(nameElement);
            membersDisplay.appendChild(addressElement);
            membersDisplay.appendChild(phoneElement);
            membersDisplay.appendChild(websiteElement);
        })
        .catch(error => console.error("Error fetching JSON data:", error));
});
