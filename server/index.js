import Koa from 'koa'
import { Nuxt, Builder } from 'nuxt'
//路由
import router from '../app/router/router.js';
const bodyParser = require('koa-bodyparser')
const cors=require('koa2-cors'); //跨域设置

//server端配置 
require('../app/uitls/global');

async function start () {
  const app = new Koa()
  const host = process.env.HOST || '127.0.0.1'
  const port = process.env.PORT || 3000

  // Import and Set Nuxt.js options
  const config = require('../nuxt.config.js')
  config.dev = !(app.env === 'production')

  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }





  

    app.use(cors());
    app.use(bodyParser());
    app.use(router.routes());
    app.use(router.allowedMethods());

    app.use(async (ctx, next) => {
      let start = new Date();
      await next();
      let ms = new Date - start;
     // console.log('%s %s - %s', this.method, this.url, ms);
    });

  app.use(ctx => {
    ctx.status = 200
    ctx.respond = false // Mark request as handled for Koa
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })

  

  

  app.listen(port, host)
  console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
}

start()
