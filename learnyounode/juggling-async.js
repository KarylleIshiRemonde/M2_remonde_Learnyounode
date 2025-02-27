const http = require('http');

const urls = process.argv.slice(2); // Get the three URLs from command-line arguments
const results = Array(urls.length).fill(null); // Array to store results
let count = 0; // Track completed requests

function fetchData(index) {
    http.get(urls[index], (response) => {
        let collectedData = '';

        response.setEncoding('utf8'); // Ensure we get strings
        response.on('data', (chunk) => {
            collectedData += chunk;
        });

        response.on('end', () => {
            results[index] = collectedData; // Store result in correct index
            count++;

            if (count === urls.length) {
                results.forEach((data) => console.log(data)); // Print all results in order
            }
        });

        response.on('error', console.error);
    }).on('error', console.error);
}

// Start fetching data for each URL
urls.forEach((_, index) => fetchData(index));
