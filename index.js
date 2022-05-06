/**
 * Title: Uptime Monitoring Application
 * Description: A RESTFul API to monitor up or down time of user defined links
 * Author: Saiduzzaman Tohin
 * Date: 05/05/2022
 */

// dependencies
const http = require('http');
const apiCallFromRequest = require('./users');

// app object - module scaffolding
const app = {};

// configuration
app.config = {
    port: 3000,
};

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`listening to port ${app.config.port}`);
    });
};

// handle request response
app.handleReqRes = (req, res) => {
    // request handle
    if (req.url === '/users') {
        apiCallFromRequest.callApi((response) => {
            // console.log(JSON.stringify(response));
            // res.write(JSON.stringify(response));
            res.end(response);
        });
    } else if (req.url === '/') {
        res.end('from root url');
    } else {
        res.end('url not found');
    }
};

// start the server
app.createServer();
