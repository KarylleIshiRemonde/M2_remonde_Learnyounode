const http = require('http');

const url = process.argv[2];

http.get(url, (response) => {
    let collectedData = '';

    response.setEncoding('utf8'); // Ensure data is received as a string

    response.on('data', (chunk) => {
        collectedData += chunk; // Collect data chunks
    });

    response.on('end', () => {
        console.log(collectedData.length); // Print total character count
        console.log(collectedData);        // Print complete response
    });

    response.on('error', console.error);
}).on('error', console.error);
