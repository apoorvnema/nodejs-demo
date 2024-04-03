const fs = require("fs");

const routesHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    res.setHeader('Content-Type', 'text/html');
    if (url === '/' && method === 'GET') {
        let file;
        try {
            file = fs.readFileSync('message.txt', 'utf8');
        }
        catch (e) {
            file = "File not found or could not be read.";
        }
        res.write("<html>");
        res.write("<head><title>Writing in file using form</title></head>");
        res.write("<body>");
        res.write("<p>");
        res.write(file);
        res.write("</p>");
        res.write("<form method='POST' action='/message'>");
        res.write("<input type='text' name='message'><button type='submit'>Send</button>");
        res.write("</form>");
        res.write("</body>");
        res.write("</html>");
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        })
        return req.on('end', () => {
            const parsedData = Buffer.concat(body).toString();
            const message = parsedData.split('=')[1];
            fs.writeFileSync('message.txt', message);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        })
    }
    res.statusCode = 404;
    res.write('<h1>Not Found</h1>')
    res.end();
}

module.exports = routesHandler;