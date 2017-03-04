import 'zone.js/dist/zone-node'
import 'reflect-metadata'

import * as path                               from 'path';
import * as express                            from 'express'
import * as bodyParser                         from 'body-parser'
import * as cookieParser                       from 'cookie-parser'
import * as morgan                             from 'morgan';
import * as mcache                             from 'memory-cache'
const { gzipSync } = require('zlib');
const accepts = require('accepts');
const { compressSync } = require('iltorb');
const interceptor = require('express-interceptor');

import { enableProdMode }                      from '@angular/core'
import { platformServer, renderModuleFactory } from '@angular/platform-server'

import { ServerAppModuleNgFactory }            from './app/app.server.module.ngfactory'
import { ngExpressEngine }                     from './modules/ng-express-engine/express-engine'
import { ROUTES }                              from './routes'

enableProdMode();

const app = express();

app.engine('html', ngExpressEngine({
  aot: true,
  bootstrap: [ServerAppModuleNgFactory]
}));

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname);
app.set('view engine', 'html');
app.set('json spaces', 2);

app.use(cookieParser());
app.use(bodyParser.json());
app.use(interceptor((req, res)=>({
  // don't compress responses with this request header
  isInterceptable: () => (!req.headers['x-no-compression']),
  intercept: ( body, send ) => {
    const encodings  = new Set(accepts(req).encodings());
    const bodyBuffer = new Buffer(body);
    // url specific key for response cache
    const key = '__response__' + req.originalUrl || req.url;
    let output = bodyBuffer;
    // check if cache exists
    if (mcache.get(key) === null) {
      // check for encoding support
      if (encodings.has('br')) {
        // brotli
        res.setHeader('Content-Encoding', 'br');
        output = compressSync(bodyBuffer);
        mcache.put(key, {output, encoding: 'br'});
      } else if (encodings.has('gzip')) {
        // gzip
        res.setHeader('Content-Encoding', 'gzip');
        output = gzipSync(bodyBuffer);
        mcache.put(key, {output, encoding: 'gzip'});
      }
    } else {
      const { output, encoding } = mcache.get(key);
      if(encodings.has(encoding)){
          res.setHeader('Content-Encoding', encoding);
          send(output);
          return;
      }
    }
    send(output);
  }
})));

app.use(morgan('dev'));

function cacheControl(req, res, next) {
  res.header('Cache-Control', 'max-age=60');
  next();
}

process.on('uncaughtException', function (err) { 
  console.error('Catching uncaught errors to avoid process crash', err);
});

app.use('/', cacheControl, express.static('dist/client', {index: false}));

ROUTES.forEach(route => {
  app.get(route, (req, res) => {
    console.time(`GET: ${req.originalUrl}`);
    res.render('index', {
      req: req,
      res: res
    });
    console.timeEnd(`GET: ${req.originalUrl}`);
  });
});

let server = app.listen(app.get('port'), () => {
  console.log(`Server listening at: http://localhost:${server.address().port}`);
});
