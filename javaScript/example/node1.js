'use strict'
var http = require('http');

console.log('begain');

function node1(name) {
    // console.log('Hello, ' + name + '!');
    // console.log(global.console);
    // if (process === global.process) {
    //     console.log('true');
    // }
    // console.log(process.version);
    // console.log(process.platform);
    // console.log(process.arch);
    // console.log(process.cwd());

    // process.on('exit', function (code) {
    //     console.log('about to exit with code: ' + code);
        
    // });

    // if (typeof(window) === 'undefined') {
    //     console.log('node.js');
    // } else {
    //     console.log('browser');
        
    // }


    
    
    // http test
    var server = http.createServer(function (request, response) {
        
        console.log(request.method + ' : ' + request.url);
        response.writeHead(200, {'Content_Type':'text/html'});
        response.end('<h1>Hello world!</h1>');
    })

    server.listen(8080);
    console.log('Server is running at http://127.0.0.1:8080/');
    
    
}

module.exports = node1;