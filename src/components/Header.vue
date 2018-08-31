<template>
  <header :class="[isLogin?'common':'sticky']">
    <template v-if=!isLogin>
      <h1>博客小站</h1>
      <p>Let's Share !</p>
      <div class="btns">
        <el-button round>立即登录</el-button>
        <el-button round>注册账号</el-button>
      </div>
    </template>
    <template v-if=isLogin>
      <h1>博客小站</h1>
      <p>Let's Share !</p>
      <div class="btns">
        <i class="edit el-icon-edit"></i>
        <el-button round>退出登录</el-button>
      </div>
    </template>
  </header>
</template>

<script>
  export default {
    data(){
      return {
        isLogin: true
      }
    }
  }
</script>

<style lang="less">
@import '../assets/base.less';
header{
  transition:all .3s;
  background:@themeColor;
  color:#fff;
}
header.common{
  text-align:center;
  h1{
    margin:20px;
  }
  p{
    margin:10px;
    font-size:18px;
  }
  .btns{
    margin:20px;
  }
}
header.sticky{
  min-height:76px;
  display:flex;
  align-items:center;
  padding:10px;
  background:@themeColor;
  h1{
    align-self:center;
  }
  p{
    align-self:center;
    font-size:30px;
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
