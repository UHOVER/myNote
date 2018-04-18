var fs = require('fs');
var http = require('http');
var url = require('url');
var path = require('path');

// function createHttp() {
//     // http test
//     var server = http.createServer(function (request, response) {

//         console.log(request.method + ' : ' + request.url);
//         response.writeHead(200, { 'Content_Type': 'text/html' });
//         response.end('<h1>Hello world!</h1>');
//     })

//     server.listen(8080);
//     console.log('Server is running at http://127.0.0.1:8080/');
// }

var httpNode = {
    root:path.resolve(process.argv[2] || '.'),
    printRoot:()=>{
        // console.log('root: ' + this.root);
        var that = this;
        function logRoot() {
            console.log('root: ' + that.root);
        }
        return logRoot;
    },
    createHttp:()=>{
        // http test
        // var a = this;
        // console.log('----root: ' + a.root);
        var server = http.createServer(function (request, response) {
            console.log(request.method + ' : ' + request.url);
            var pathname = url.parse(request.url).pathname;
            
            var rootPath = path.resolve(process.argv[2] || '.')
            console.log('rootPath: ' + rootPath);

            var filePath = path.join(rootPath, pathname);
            fs.stat(filePath, function (err, stats) {
                if (!err && stats.isFile()) {
                    // 文件没有出错且存在
                    console.log('200' + request.url);
                    // 发送200响应
                    response.writeHead(200);
                    //将文件流导向response
                    fs.createReadStream(filePath).pipe(response);
                } else {
                    // 出错了或者文件不存在
                    console.log('404' + request.url);
                    // 发送404响应
                    response.writeHead(404);
                    response.end('404 Not Found');
                }
            });
            // response.writeHead(200, { 'Content_Type': 'text/html' });
            // response.end('<h1>Hello world!1111111</h1>');
        })

        server.listen(8080);
        console.log('Server is running at http://127.0.0.1:8080/');
    },
    printUrl:()=>{
        console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'));
        
    },
    createPath:()=>{
        // 解析当前目录
        var workDir = path.resolve('.');
        console.log('workDir: ' + workDir);
        // 组合完整的文件路径：当前目录+‘pub’+‘index.html’
        var filePath = path.join(workDir, 'pub', 'index.html');
        
    },
};


module.exports = httpNode;