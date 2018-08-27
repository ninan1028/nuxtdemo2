
import koaRouter from 'koa-router';

import test from '../../controller/test/test'
console.log(test);
 let router= new koaRouter({
     prefix:'/test'
 });

 router.get('/info',test.test);

 export default router;



 

