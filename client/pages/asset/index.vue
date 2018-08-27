

<style scoped   lang="less">
.title
{
  margin: 50px 0;
  span{
    color:red;
  }
}
</style>

<template>
  <section class="container">
  
    <h1 class="title">
      资产页面
    </h1>
    <nuxt-link class="button" to="/about">
      About page
    </nuxt-link>
  </section>
</template>
<script>
 export default{
    data(){
        return {
          
        }
    },
    asyncData(ctx){
       console.log(ctx);
    },
    fetch(){

    },
    head(){
        return {
      title: '资产页面',
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
    }
 }
</script>


