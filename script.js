// Get references to the elements
const nameInput = document.getElementById('name');
const yearInput = document.getElementById('year');
const submitBtn = document.getElementById('button');
const urlDisplay = document.getElementById('url');

submitBtn.addEventListener('click', (event) => {
    // Prevent the form from refreshing the page
    event.preventDefault();

    let baseUrl = "https://localhost:8080/";
    let nameValue = nameInput.value;
    let yearValue = yearInput.value;

    // Create an array to hold our query parameters
    let params = [];

    if (nameValue) {
        params.push(`name=${nameValue}`);
    }
    if (yearValue) {
        params.push(`year=${yearValue}`);
    }

    // Join parameters with '&' and add a '?' if any exist
    if (params.length > 0) {
        baseUrl += "?" + params.join("&");
    }

    // Update the h3 text
    urlDisplay.textContent = baseUrl;
});
