const net = require('net');

const port = process.argv[2]; // Get the port number from the command-line argument

const server = net.createServer((socket) => {
    const now = new Date();

    // Format date and time as "YYYY-MM-DD hh:mm"
    const formattedDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    socket.end(formattedDate + '\n'); // Send the formatted date and close the connection
});

server.listen(port);
