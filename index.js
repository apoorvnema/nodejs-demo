const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    res.setHeader('Content-Type', 'text/html');

    if (url === '/' && method === 'GET') {
        let file;
        try {
            file = fs.readFileSync('message.txt', 'utf8');
        } catch (e) {
            file = "File not found or could not be read.";
        }

        const html = `
      <html>
        <head><title>Writing in file using form</title></head>
        <body>
          <p>${file}</p>
          <form method='POST' action='/message'>
            <input type='text' name='message'><button type='submit'>Send</button>
          </form>
        </body>
      </html>
    `;
        res.write(html);
        return res.end();
    }

    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedData = Buffer.concat(body).toString();
            const message = parsedData.split('=')[1];
            fs.writeFileSync('message.txt', message);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    }

    res.statusCode = 404;
    res.write("<h1>Not Found</h1>");
    res.end();
});

server.listen(3000);