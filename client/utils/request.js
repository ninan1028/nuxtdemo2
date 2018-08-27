import axios from 'axios';
import {Message} from 'element-ui'



let header={
    'Content-Type': 'application/x-www-form-urlencoded'
}
let instance =axios.create({
    baseURL:'http://localhost:3000',
    headers:header
})

instance.defaults.timeout=5000; //请求超时时间

instance.interceptors.request.use(config=> {
    return config;
  }, err=> {
    Message.error({message: '请求超时!'});
    return Promise.resolve(err);
  })
  instance.interceptors.response.use(data=> {
    if (data.status && data.status == 200 && data.data.status == 'error') {
      Message.error({message: data.data.msg});
      return;
    }
    return data;
  }, err=> {
    if (err.response.status == 504||err.response.status == 404) {
      Message.error({message: '服务器被吃了⊙﹏⊙∥'});
    } else if (err.response.status == 403) {
      Message.error({message: '权限不足,请联系管理员!'});
    }else {
      Message.error({message: '未知错误!'});
    }
    return Promise.resolve(err);
  })

export let post=(url,param)=>{
    return instance.post(url,param);
}

class commonRequest{
    constructor(prefix){
         this.prefix=prefix||'';
         if(this.prefix&&this.prefix[0]!='/'){
             this.prefix='/'+this.prefix;
         }
        this.$http=instance;
    }
    post(url,data,config){

         if(!url){
             console.log('请输入正确的请求url');
             return;
         }
       var  url=this.prefix+url; 
       var config=config||{};     
         return  new Promise((resolve,reject)=>{
              instance.post(url,data,config).then((res)=>{
                 var data=res.data;
                 if(+data.code==0){
                   resolve(data);
                 } else{
                    if(data.msg){
                        Message.error({message:data.msg});
                    }
                    reject(data);
                 }
              })
         })
    }
    get(url){
        if(!url){
            console.log('请输入正确的请求url');
            return;
        }
        var  url=this.prefix+url; 
        return new Promise((resolve,reject)=>{
             instance.get(url).then((res)=>{
                var data=res.data;
                 if(+data.code==0){
                   resolve(data);
                 } else{
                    if(data.msg){
                        Message.error({message:data.msg});
                    }
                    reject(data);
                 }
             })
        })
    }
}


export const baseRequest= new commonRequest();

export const Request=commonRequest;
