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
      padding:0 20px;
    }

    #main{
      flex:1;
      padding:0 12%;
      border:1px solid blue;
    }

    #footer{
      width:100%;
    }
}
@media(max-width:768px){
  #app{
    #main{
      padding:0 10px;
    }
  }
}
</style>
