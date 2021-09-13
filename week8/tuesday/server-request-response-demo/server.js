const http = require('http');
const fs = require("fs");

const server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);
    if (req.method === "GET" && req.url === "/") {
        const resBody = fs.readFileSync("index.html");
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        return res.end(resBody);
    }

    if (req.method === "GET" && req.url === "/main.css") {
        const resBody = fs.readFileSync("main.css");
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/css");
        return res.end(resBody);
    }

    let reqBody = "";
    req.on("data", (data) => {
        reqBody += data;
    });

    req.on("end", () => {
        console.log(reqBody);
        if (req.method === "POST" && req.url === "/tasks") {
            console.log(req.body);
            res.statusCode = 302;
            res.setHeader("Location", "/");
            return res.end();
        }
    });
    
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));