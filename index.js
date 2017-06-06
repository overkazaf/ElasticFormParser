const Koa = require('koa');
const next = require('next');
const Router = require('koa-router');
const LRUCache = require('lru-cache');
const logger = require('koa-logger');
const staticServer = require('koa-static');
const co = require('co');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const mongoose = require('mongoose');
const cors = require('kcors');

const indexRoute = require('./src/middleware/routes/index.js');
const formRecordRoute = require('./src/middleware/routes/formRecord.js');

const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60 // 1hour
});

function initModels() {
  var fs = require('fs');
  var models_path = __dirname + '/src/middleware/models';
  var models = fs.readdirSync(models_path);
  // NOTE: some models seem to be broken. once fixed, the following code will work

  models.forEach(function (file) {
    if (~file.indexOf('.js')) {
      //console.log('Trying to require %s',file);
      require(models_path + '/' + file);
    }
  });
}
// routes
app.prepare()
.then(() => {
  const server = new Koa()
  const router = new Router()

  mongoose.connect('mongodb://localhost/test');
  const db = mongoose.connection;


  db.on('error', function(err) {
    console.error('error occurs:', JSON.stringify(err));
    mongoose.disconnect();
  });

  db.once('open', function(err) {
    if (err) {
      console.error(JSON.stringify(err));
      return;
    }
    initModels();
    console.log('mongoose opened');
  });

  server.use(function *(next){
    var start = new Date;
    yield next;
    var ms = new Date - start;
    this.set('X-Response-Time', ms + 'ms');
  });  

  server.use(function *(next){
    var start = new Date;
    yield next;
    var ms = new Date - start;
    console.log('%s %s -- %s ms', this.method, this.url, ms);
  });

  server.use(cors({
    "Access-Control-Allow-Methods": "GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS"
  }));

  // slice routers
  server.use(indexRoute.routes(), indexRoute.allowedMethods());
  server.use(formRecordRoute.routes(), formRecordRoute.allowedMethods());

  // global routers
  server.use(router.routes(), router.allowedMethods());



  // controllers
  // 
  // server.use('/form/submit/:fid', formRecord);
  // 

  server.listen(3001, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3001')
  })
})

function renderAndCache (req, res, path, query) {
  let html
  let cacheKey = getCacheKey(req)

  if (html = ssrCache.get(cacheKey)) {
    res.setHeader('Content-Type', 'text/html')
    res.setHeader('Content-Length', Buffer.byteLength(html))
    console.log(`Hit cache key ${cacheKey}`)
    res.end(html)
    return
  }

  return app.renderToHTML(req, res, path, query)
  .then((html) => {
    console.log(`Miss cache ${path}`);
    res.setHeader('Content-Type', 'text/html')
    res.setHeader('Content-Length', Buffer.byteLength(html))
    ssrCache.set(path, html)
    res.end(html)
  }).catch((e) => {
    console.error(e)
  })
}

function getCacheKey (req) {
  return `${req.url}`
}
