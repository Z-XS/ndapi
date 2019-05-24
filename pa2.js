var http = require('http')
var express = require('express')
var cheerio=require('cheerio');
var iconv = require('iconv-lite')
var app =express();
var headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.65 Safari/537.36'
  }

app.get('/',function(req,res) {
    let url = 'http://www.163.com'
    http.get(url,function(response){
        var html = ''
        response.on('data',function(data){
            html += data
        })
        response.on('end',function(){
            var $ = cheerio.load(html)
            var content = $('p').text()
            // content = content.split('\n\t\t\t\t')
            res.json(content)
        })
    })
})
app.listen(1000, function () {
    console.log('抓取成功~~~');
});