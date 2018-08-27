//controll层


// 需要引入 日志 文件  commonPost 


/**
 * 测试controll层
 * @param {*} ctx 
 * @param {*} next 
 */
const test =(ctx,next)=>{

     let param=ctx.request.query; // get 参数
      let d= 1;
      ctx.body={data:param};
}

module.exports={
    test:test
}