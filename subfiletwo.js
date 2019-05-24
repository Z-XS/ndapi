const express = require('express')
const formidable = require('formidable')
const fs = require('fs')
const app = express()

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});
var a= ''
app.post('/file',function(req,res){
    var form = new formidable.IncomingForm()
    form.uploadDir = './myImage'
    form.keepExtensions = true
    form.on('progress', (bytesReceived,bytesExpected) => {
      const percent = bytesReceived / bytesExpected*100 
      console.log(percent)
    })
    form.on('field', (field, value) => { 
      console.log(1)
      console.log(field)
      console.log(value)
    })
    form.on('file',function(name,file) {
        console.log('bbb')
        // console.log(name)
        // console.log(file)
        const types = file.name.split('.')
        const suffix = types[types.length - 1]//获取文件后缀
        a = `./myImage/${new Date().getTime()}.${suffix}`
        fs.renameSync(file.path, `./myImage/${file.name}`)
    })
    form.on('error', err => {
      console.log(err)
      res.statusCode = 500   
      res.end('服务器内部错误!')    
    })
    form.on('end', () => {
      res.send('上传完成!')
    })
    console.log('异步')
    form.parse(req)
})

var server = app.listen(3001,'localhost',function () {

var host = server.address().address;
var port = server.address().port;

console.log("Example app listening at http://%s:%s", host, port);
})
