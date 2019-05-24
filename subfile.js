const express = require('express')
const multer = require('multer')
const path = require('path')
const app = express()

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

app.use(express.static('./public'))
const storage = multer.diskStorage({
    destination: function(req,file,cb) {
        cb(null,path.resolve('public/images'))
    },
    filename: function(req,file,cb) {
        cb(null,Date.now()+path.extname(file.originalname))
    }
})

const upload = multer({storage})

app.post('/file',upload.single('files'),function(req,res,next){
    res.send({
        err:null,
        filepath: '/public/images/' + path.basename(req.file.path)
    })
})

var server = app.listen(3001,'localhost',function () {

var host = server.address().address;
var port = server.address().port;

console.log("Example app listening at http://%s:%s", host, port);
})
