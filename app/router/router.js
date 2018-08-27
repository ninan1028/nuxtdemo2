const Router = require('koa-router');

const router = new Router();

import  test from './router/test'

router.get('/info',(ctx)=>{
   ctx.body=1;
})




router.use(test.routes(),test.allowedMethods());


export default router;