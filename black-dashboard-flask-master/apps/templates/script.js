// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Get the button and data display div
    const button = document.getElementById('getDataButton');
    const dataDisplay = document.getElementById('dataDisplay');

    button.addEventListener('click', function() {
        // Fetch data from the Flask server
        fetch('/get_data')
            .then(response => response.json())  // Parse JSON response
            .then(data => {
                // Extract row data from the response
                const row = data.row;

                // Display the fetched data
                dataDisplay.innerHTML = `
                    <p>a: ${row.a}</p>
                    <p>b: ${row.b}</p>
                    <p>c: ${row.c}</p>
                    <p>d: ${row.d}</p>
                `;
            })
            .catch(error => console.error('Error fetching data:', error));
    });
});
