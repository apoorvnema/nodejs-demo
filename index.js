const express = require("express");

const app = express();

app.use((req, res, next) => {
    console.log("Middleware 1");
    next();
})

app.use((req, res, next) => {
    console.log("Middleware 2");
    res.send("<h1>Hello World</h1>");
})

app.listen(3000);


// const http = require("http");

// const routes = require("./routes");

// const server = http.createServer(routes);

// server.listen(3000);