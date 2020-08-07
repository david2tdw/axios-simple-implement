const express = require('express')
const app = express()

app.all('*', function (req, res, next) {
  console.log('all filter')
  res.header('Access-Control-Allow-Origin', '*')
  // https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Allow-Headers
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  res.header('Access-Control-Allow-Methods', '*')
  // res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})

app.use(express.static(__dirname + '/public'))
// app.use('/', express.static(__dirname + '/public' ))

app.get('/getTest', function (request, response) {
  console.log('getTest')
  data = {
    FrontEnd: '前端',
    Sunny: '阳光',
  }
  response.json(data)
})

const server = app.listen('8888', function () {
  console.log('服务器启动, port:8888')
})
