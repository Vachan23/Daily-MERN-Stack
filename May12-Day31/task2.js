const data = require('./empData');
const http = require('http');

const port = 5000;
const host = 'localhost'

const requestListener = function(req, res) {
    res.setHeader("Content-type", "application/json");
    res.writeHead(200);

    res.end(JSON.stringify(data))
}

const server = http.createServer(requestListener);

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
})