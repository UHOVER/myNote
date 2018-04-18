// var fs = require('fs');

/*
// 异步读取文件
fs.readFile("./javaScript/example/test.txt", "utf-8", function (err, data) {
    if (err) {
        console.log(err);

    } else {
        console.log(data);
        
    }
})

// 同步读取文件
var file1 = fs.readFileSync('./javaScript/example/test.txt', 'utf-8');
console.log('file1: ' + file1);

*/

// var pngBuf;
// fs.readFile('javaScript/example/icon.png', function (err, data) {
//     if (err) {
//         console.log(err);

//     } else {

//         // console.log(data);
//         // console.log(data.length + ' bytes');
//         let txt = data.toString('utf-8');
//         // // console.log('txt: ' + txt);

//         let buf = Buffer.from(txt, 'utf-8');
//         pngBuf = data;
//         // console.log('buf: ' + buf);
//     }
// });

// try {
//     let file2 = fs.readFileSync('javaScript/example/test.txt', 'utf-8');
//     console.log(file2);

// } catch (error) {
//     console.log(error);
// }

// -------写入文件-------
/*var data1 = 'hello, node.js';
fs.writeFile('output.txt', data1, function (err) {
    if (err) {
        console.log(err);
        
    } else {
        console.log('ok');
        
    }
});*/


// fs.readFile('javaScript/example/icon.png', function (err, data) {
//     if (err) {
//         console.log(err);

//     } else {
//         try {
//             fs.writeFileSync('img.png', data);
//         } catch (error) {
//             console.log(error);
//         }
//     }
// });

// fs.stat('output.txt', function (err, stat) {
//     if (err) {
//         console.log(err);

//     } else {
//         // 是否是文件
//         console.log('isFile: ' + stat.isFile());
//         // 是否是目录
//         console.log('isDirectory: ' + stat.isDirectory());
//         if (stat.isFile()) {
//             // 文件大小
//             console.log('size: ' + stat.size);
//             // 创建时间， Date对象
//             console.log('birth time: ' + stat.birthtime);
//             // 修改时间
//             console.log('modified time: ' + stat.mtime);

//         }
//     }
// });

// 输出流
// var rs = fs.createReadStream('output.txt', 'utf-8');

// rs.on('data', function (chunk) {
//     console.log('DATA');
//     console.log(chunk);
// })

// rs.on('end', function (sender) {
//     console.log('END');
//     console.log(sender);
// })

// rs.on('error', function (err) {
//     console.log('ERROR: ' + err); 
// })

// 输入流
// var ws = fs.createWriteStream('copied.txt', 'utf-8');
// ws.write('1111111111');
// ws.write('22222222222222');
// ws.write('END');
// ws.end();

// 类似把两根水管串连成一根水管，从一个文件读取到后马上写入到另外一个文件，达到复制的目的
// rs.pipe(ws);