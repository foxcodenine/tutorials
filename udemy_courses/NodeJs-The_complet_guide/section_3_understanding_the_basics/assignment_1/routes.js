let { homePage, userPage1, userPage2  } = require('./pages');

// ---------------------------------------------------------------------

let users = ['Christopher Farrugia']
// ---------------------------------------------------------------------

function requestHandler(req, res) {

    let url = req.url;
    let htmlMarkup;

    // -------------------------------

    if (url === '/') {
        htmlMarkup = homePage;
    }
    else {
        let usersMarkup = '';
        users.forEach((user)=>{
            usersMarkup += `<li class="text-center  px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">${user}</li>`;
        });

        htmlMarkup = userPage1 + usersMarkup + userPage2;

    }

    // -------------------------------

    if (req.method === 'POST' && url === '/user') {

        const body = [];

        req.on('data',(chunk)=>{
            body.push(chunk);
        });

        req.on('end', ()=>{
            const parseBody = Buffer.concat(body).toString();
            users.push(parseBody.split('=')[1].replace('+', ' '))
            res.writeHead(302, {'Location': '/user'});
            return res.end();
        });

        return;
    }

    // -------------------------------

    res.setHeader('Content-Type', 'text/html');
    res.write(htmlMarkup);
    res.end();
}

// ---------------------------------------------------------------------


module.exports = {
    handler: requestHandler,
}


