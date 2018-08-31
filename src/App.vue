<template>
  <div id="app">
    <Header id="header"></Header>
    <main id="main">
      <router-view/>
    </main>
    <Footer id="footer"></Footer>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import Footer from '@/components/Footer'

  export default {
    name: 'App',
    components: {
      Header,
      Footer
    }
  }
</script>

<style lang="less">

@import './assets/common.less';

#app {
  display:flex;
  flex-direction:column;

    #header{
      width:100%;
      padding-left:20px;
      padding-right:20px;
    }
    #main{
      flex:1;
      padding-left:12%;
      padding-right:12%;
    }
    #footer{
      width:100%;
    }
}
@media(max-width:768px){
  #app{
    #main{
      padding-left:10px;
      padding-right:10px;
    }
  }
}
</style>
