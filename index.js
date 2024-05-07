import http from 'http';

const port = 3000;

http.createServer((request, response) => {
    console.log(`Webserver is running now on http://localhost:${port}`);
}).listen(port)