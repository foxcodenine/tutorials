const fs = require('fs');

// ---------------------------------------------------------------------

function requestHandler(req, res) {
    let method = req.method;
    let url = req.url;
    let bodyContent = '<h1>My First Heading</h1>';

    // -------------------------------

    if (url === '/') {
        bodyContent = '<form action="/message" method="POST"><input type="text" name="message" placeholder="enter you message"><button type="submit">Send</button></form>';
    }
    
    // -------------------------------

    if (method === 'POST' && url === '/message') {
        const body = [];
        req.on('data', (chunk)=>{
            
            console.log(chunk);
            body.push(chunk);
        });        
        
        return req.on('end', ()=>{
            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody);
            const message = parseBody.split('=')[1];
            
            // fs.writeFileSync('message.txt', message);
            fs.writeFile('message.txt', message, (error)=>{
                
                res.writeHead(302, {'Location': '/'});
                return res.end();
            });
            
        });       
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<!DOCTYPE html>');
    res.write('<html>');
    res.write('<head><title>Page Title</title></head>');
    res.write(`<body>${bodyContent}<p>My first paragraph.</p></body>`);
    res.write('</html>');
    res.end();

    // console.log(req.url, req.method, req.headers);
    // process.exit();
}

// module.exports = requestHandler;
// modue.exports.handler = requestHandler;

module.exports = {
    handler: requestHandler,
};