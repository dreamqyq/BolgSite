<template>
  <header>
    <template>
      <h1>博客小站</h1>
      <p>Let's Share</p>
      <div class="btns">
        <el-button>登录</el-button>
        <el-button>注册</el-button>
      </div>
    </template>
  </header>
</template>

<script>

</script>

<style lang="less">
header{
  display:flex;
  align-items:center;

  h1{
    margin:10px;
    align-self:center;
  }

  p{
    align-self:center;
    font-size:25px;
    font-weight:bold;
    display:flex;
    flex:1;
      justify-content:center;

  }
  .btns{
    margin-right:20px;
  }
}
</style>
