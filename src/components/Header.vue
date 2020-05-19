<template>
  <header :class="[isLogin?'sticky':'common']">
    <template v-if=!isLogin>
      <h1><router-link to="/">博客小站</router-link></h1>
      <p>Let's Share !</p>
      <div class="btns">
        <router-link to="/login">
          <el-button round>立即登录</el-button>
        </router-link>
        <router-link to="/register">
          <el-button round>注册账号</el-button>
        </router-link>
      </div>
    </template>
    <template v-if=isLogin>
      <h1><router-link to="/">博客小站</router-link></h1>
      <p class="slogan">Let's Share !</p>
      <div class="btns">
        <router-link to="/create">
          <i class="edit el-icon-plus" :title="message"></i>
        </router-link>
        <router-link to="/my">
          <img class="avatar" :src="user.avatar" :alt="user.username" :title="user.username">
        </router-link>
        <el-button round @click="onLogout">退出登录</el-button>
      </div>
    </template>
  </header>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      message: '创建博客'
    }
  },
  computed: {
    ...mapGetters([
      'isLogin',
      'user'
    ])
  },
  created () {
    this.checkLogin()
  },
  methods: {
    ...mapActions([
      'checkLogin',
      'logout'
    ]),

    onLogout () {
      this.logout()
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
          button{
            margin:0 10px;
          }
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
          .avatar{
            width:40px;
            vertical-align:top;
            margin:0 10px;
          }
          button{
            margin:0 10px;
          }
          .edit{
            transform:scale(2);
            cursor:pointer;
            margin-right:20px;
          }
      }
       @media(max-width:570px){
        h1{
          font-size: 20px;
        }
        p.slogan{
          display: none;
        }
        .btns{
          margin-left: 30px;
          .avatar{
            margin: 0;
          }
          button{

          }
          .edit{
            transform: scale(1.5);
          }
        }

      }
  }
</style>
