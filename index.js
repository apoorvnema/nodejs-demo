const http = require("http");

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Node JS Test</title></head>');
    res.write('<body>');
    if (req.url === '/') {
        res.write('<h1>Welcome to my Node Js project</h1>');
    }
    if (req.url === '/home') {
        res.write('<h1>Welcome home</h1>');
    }
    if (req.url === '/about') {
        res.write('<h1>Welcome to About Us page</h1>');
    }
    if (req.url === '/node') {
        res.write('<h1>Welcome to my Node Js project</h1>');
    }
    res.write('</body>');
    res.write('</html>');
    res.end();
})

server.listen(3000);