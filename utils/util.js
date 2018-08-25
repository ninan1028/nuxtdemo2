import axios from 'axios';

let instance =axios.create({
    baseURL:'http://localhost:3000'
})

export let post=(url,param)=>{
    return instance.post(url,param);
}