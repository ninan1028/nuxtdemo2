<template>
  <section class="container">
    <img src="../assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <h1 class="title">
      Universal Vue.js Application Framework <span>hello</span>
    </h1>
    <div class="main">
       hello 
       <div class="main--container">do it
       </div>
    </div>
    <nuxt-link class="button" to="/about">
      About page
    </nuxt-link>
  </section>
</template>

<style scoped   lang="less">
.title
{
  margin: 50px 0;
  span{
    color:red;
  }
}
</style>
