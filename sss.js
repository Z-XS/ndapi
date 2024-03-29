var http = require('http')

var formidable = require('formidable')

 

var server = http.createServer(function(req, res){

  // 1 设置cors跨域

  res.setHeader('Access-Control-Allow-Origin', '*')

  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  res.setHeader('Content-Type', 'application/json')

 

  // 2

  switch (req.method) {

    case 'OPTIONS':

      res.statusCode = 200

      res.end()

      break

    case 'POST':

      upload(req, res)

      break

  }

})

 

function upload(req, res) {

  // 1 判断

  if (!isFormData(req)) {

    res.statusCode = 400

    res.end('错误的请求, 请用multipart/form-data格式')

    return

  }

 

  // 2 处理

  var form = new formidable.IncomingForm()

  form.uploadDir = './myImage'

  form.keepExtensions = true

 

  form.on('field', (field, value) => {

    console.log(field)

    console.log(value)

  })

  form.on('end', () => {

    res.end('上传完成!')

  })

 

  form.parse(req)

}

 

function isFormData(req) {

  let type = req.headers['content-type'] || ''

  return type.includes('multipart/form-data')

}

 

server.listen(3000)

console.log('port is on 3000.')