var request = require('request')
var cheerio = require('cheerio')

function getHotMovie(url) {
    request(url,function(err,response,body) {
        if(!err && response.statusCode == 200) {
            $ = cheerio.load(body)
            var content = $(".ui-slide-content li.ui-slide-item")
            var length = content.length
            var list = []
            while(length --){
                var title = $(content[length]).data("title")
                title && list.push(title)
            }
            console.log(list)
        }else {
            console.log(err)
        }
    })
}

getHotMovie("https://movie.douban.com/")