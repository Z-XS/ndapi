var express=require('express');
var app =express();
var fs = require('fs')
// var mysql = require('mysql')
var bodyParser = require('body-parser'); 
var sqlConnect = require('./sqlConnect')
//引用bodyParser 
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
//连接数据库
// var connection = mysql.createConnection({
//     host : 'localhost',
//     user : 'root',
//     password : '123456',
//     database : 'text'
// })
// connection.connect()
var connection = sqlConnect.connection
//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,XFILENAME,XFILECATEGORY,XFILESIZE");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
var questions=[
    {
        data:213,
        num:444,
        age:12
    },
    {
        data:456,
        num:678,
        age:13
    }];
    //写个接口
    app.post('/123',function(req,res){
        console.log(req)
        res.status(200)
        fs.writeFile('imgreq.json',req._readableState,function(err){
            if(err) throw err
            console.log('success')
        })
        // const i = req
        // res.json(i)
    });
    var addSql = 'INSERT INTO supform(qd,name,offer) VALUES ?'
    var addSql1 = 'INSERT INTO pubform1(qd,name,offer) VALUES ?'
    var addSql2 = 'INSERT INTO pubform(src,name,offer) VALUES ?'
    var readSql = 'SELECT * FROM pubform'
    app.get('/read',function(req,res){
        connection.query(readSql,function(err,result){
            if(err){
                console.log(err.message)
            }
            res.json(result)
        })
    })
app.post('/w',function(req,res){
    console.log(req.body);
    var SqlParams = req.body
    connection.query(addSql,[SqlParams],function(err,result){
        if(err){
            console.log(err.message + '失败')
            return
        }
        console.log('加入',result)
    })
    // connection.end()
    res.json(req.body)
})
app.post('/hk',function(req,res){
    var SqlParams = req.body
    console.log(SqlParams)
    connection.query(addSql1,[SqlParams],function(err,result){
        if(err){
            console.log(err.message + '失败')
            return
        }
        console.log('加入',result)
    })
    res.json(req.body)
})
app.post('/npc',function(req,res){
    var SqlParams = req.body
    console.log(SqlParams)
    connection.query(addSql2,[SqlParams],function(err,result){
        if(err){
            console.log(err.message + '失败')
            return
        }
        console.log('加入',result)
    })
    res.json(req.body)
})
//配置服务端口
var server = app.listen(3001,'localhost',function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);
    })
