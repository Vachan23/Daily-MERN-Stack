const http = require('http');

const fs = require('fs').promises;
const path = require('path');

const host = 'localhost';
const port = 2000;

const empData = [
    {
    "id": 21,
    "body": "21",
    "title": "21"
    },
    {
    "id": 22,
    "body": "22",
    "title": "22"
    },
    {
    "id": 27,
    "body": "27",
    "title": "27"
    },
    {
    "id": "nq-a9GC",
    "body": "Edit-body",
    "title": "vignesh-nayak"
    },
    {
    "id": "vH87b2g",
    "body": "okay",
    "Title": "okay"
    },
    {
    "id": "vKSBZUf",
    "body": "body",
    "title": "title"
    },
]


// JSON format
// const requestListener = function(req, res) {
//     res.setHeader("Content-type", "application/json");
//     res.writeHead(200);

//     res.end(JSON.stringify(empData))
// }

// const server = http.createServer(requestListener);

// server.listen(port, host, () => {
//     console.log(`Server is running on http://${host}:${port}`);
// })


//text and HTML format
const requestListener = function (req, res) {
    fs.readFile(path.resolve() + "/test.html").then(contents => {
        res.setHeader("Content-type", "text/html");
        res.writeHead(200);
        res.end(contents);
    })
}

const server = http.createServer(requestListener);

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
})