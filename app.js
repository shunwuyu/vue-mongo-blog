var express = require('express');
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
var FileStore =
  require('session-file-store')(session);
var app =express();
var resolve = file => path.resolve(__dirname, file);
app.use('/dist',
 express.static(resolve('./dist')));
app.use(session({
  name: 'skey',
  secret: 'chyingp',
  store: new FileStore(),
  saveUninitialized: false,
  //  是否自动保存未初始化的会话
  resave: false,
  cookie: {
    maxAge: 15*60*1000
  }
}))
app.get('/api/articleList', function(req, res) {
  res.json({
    message: 'api'
  })
})
app.get('/admin', function(req, res){
  var html = readFileSync(
    resolve('./' + 'admin.html'),
    'utf-8'
  );
  res.send(html);
})

app.get('*', function(req, res) {
  var html =
    fs.readFileSync(
      resolve('./' + 'index.html'),
    'utf-8');
  res.send(html);
})
app.listen(process.env.PORT || 3000,
  function() {
  console.log('应用实例，访问地址为localhost:3000');
})
