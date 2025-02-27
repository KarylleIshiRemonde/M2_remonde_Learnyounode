const http = require('http');
const fs = require('fs');

const port = process.argv[2];  // Get the port number from command-line argument
const filePath = process.argv[3];  // Get the file path from command-line argument

const server = http.createServer((req, res) => {
    const fileStream = fs.createReadStream(filePath); // Create a readable stream for the file
    res.writeHead(200, { 'Content-Type': 'text/plain' }); // Set the response header
    fileStream.pipe(res); // Pipe file stream directly to response
});

server.listen(port);
