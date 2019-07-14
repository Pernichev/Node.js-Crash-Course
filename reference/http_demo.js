const http = require('http');

// Create a server object

http.createServer((req, res) => {
    // Write a response on REQ

    res.write('Hello World');
    res.end();
}).listen(5000, () => console.log('Server running on port 5000'));